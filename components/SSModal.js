import React, { useState } from 'react';

export default function SSModal({ isVisible, onClose, ssGroupData, token }) {

    if(!isVisible) return null;

    const [itemProps, setItemProps] = useState();
    const [itemRead, setItemRead] = useState(false);
    const [ssProps, setSSProps] = useState();
    const [ssRead, setSSRead] = useState(false);
    const totalHargaSS = 0;

    function closeHandler(e) {
        e.preventDefault();
        onClose();
    }

    const initialItemFields = {
        itemId: '',
        itemCode: '',
        itemName: '',
        itemCount: '',
        itemPrice: '',
        itemTotalPrice: '',
        ssGroupId : ssGroupData.id
    };

    const [itemFields, setItemFields] = useState(initialItemFields);

    const [status, setStatus] = useState('normal');

    if (!ssRead) readItemHandler();

    async function readItemHandler() {

        setItemRead(true);
        
        const itemReq = await fetch('/api/item', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        
        const items = await itemReq.json();
        
        setItemProps(items.data);
    }

    if (!ssRead) readSSHandler();

    async function readSSHandler() {

        setSSRead(true);

        setStatus('loading');

        const readSSReq = await fetch('/api/ss/read/' + ssGroupData.id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    
        const readSSRes = await readSSReq.json();

        setStatus('success');
    
        setSSProps(readSSRes.data);
    }

    async function createSSHandler(e) {
        e.preventDefault();

        setStatus('loading');

        const createSSReq = await fetch('/api/ss/create', {
            method: 'POST',
            body: JSON.stringify(itemFields),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!createSSReq.ok) return setStatus('error' + createSSReq.status);

        const createSSRes = await createSSReq.json();

        setStatus('success');

        const updateItemFields =  {
            code: itemFields.itemCode,
            name: itemFields.itemName,
            price: itemFields.itemPrice,
            stock: itemFields.itemCount
        }

        setStatus('loading');

        const updateItemReq = await fetch('/api/item/update/' + itemFields.itemId, {
            method: 'PUT',
            body: JSON.stringify(updateItemFields),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!updateItemReq.ok) return setStatus('error' + updateItemReq.status);

        const updateItemRes = await updateItemReq.json();

        setStatus('success');
    }

    const [searchItem, setSearchItem] = useState('');

    function itemFieldHandler(e) {
        const name = e.target.getAttribute('name');

        setItemFields({
            ...itemFields,
            [name]: e.target.value
        });
    }

    function searchItemHandler(e) {
        setSearchItem(e.target.value);
    }

    let [itemVal, setItemVal] = useState('');

    function setBtnItemVal(val) {
        setItemVal(val);
    }

    const [displaySearchItem, setDisplaySearchItem] = useState("hidden");

    return(
        <>
            <div onClick={() => {setDisplaySearchItem("hidden"); setSearchItem("")}} className="min-h-full h-fit py-24 bg-black bg-opacity-5 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-11/12">

                    <div className="w-full lg:w-full px-4 mx-auto mt-6">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                            
                            <div className="rounded-t bg-white mb-0 px-3 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-gray-700 text-xl font-bold">
                                        
                                    </h6>
                                    <button onClick={closeHandler.bind(this)} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
                                        <svg xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="mt-4 mx-4">

                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Informasi SS
                                    </h6>

                                    <div className="flex flex-wrap justify-between">
                                        <div className="w-full lg:w-1/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                    Nomor SS :
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-8/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-600 text-sm mb-2" >
                                                    {ssGroupData.id}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                    Tanggal :
                                                </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-600 text-sm mb-2" >
                                                    {ssGroupData.created_at.substring(0, 10)}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="mb-6 border-b-1 border-gray-300"/>

                                    <form onSubmit={createSSHandler.bind(this)} className="flex flex-wrap">
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                                
                                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                    Item:
                                                </label>

                                                <button onClick={(e) => {e.stopPropagation(); (displaySearchItem == "hidden") ? setDisplaySearchItem("") : (setSearchItem(""),setDisplaySearchItem("hidden"))}} type="button" className="text-start border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="grid-state">
                                                    <div className="h-full">{ (!itemVal) ? <br></br> : itemVal }</div>
                                                </button>
                                                
                                                <div onClick={(e) => e.stopPropagation()} className={displaySearchItem + " w-full rounded bg-neutral-50 shadow-md my-2 absolute z-10 pin-t pin-l"}>
                                                    <ul className="list-reset">
                                                        <li className="p-2"><input value={searchItem} onChange={searchItemHandler.bind(this)} placeholder="Cari kode atau nama barang" type="text" className="focus:placeholder-transparent p-2 border-2 rounded h-8 w-full"/><br/></li>
                                                        { itemProps?.filter(item => {
                                                            const filterName = searchItem.toLowerCase();
                                                            const fullCode = item.code.toLowerCase();
                                                            const fullName = item.name.toLowerCase();

                                                            return searchItem && fullCode.startsWith(filterName) || searchItem && fullName.startsWith(filterName);
                                                        })
                                                        .slice(0, 5)
                                                        .map((item) => (
                                                            <li key={item.id} onClick={() => {setBtnItemVal(item.name); setDisplaySearchItem("hidden"); setSearchItem("")}}><p className="p-2 block text-black hover:bg-blue-500 hover:text-white cursor-pointer">{item.code + ' - ' + item.name}</p></li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                ID Item:
                                            </label>
                                            <input required onChange={itemFieldHandler.bind(this)} name="itemId" type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                Kode Item:
                                            </label>
                                            <input required onChange={itemFieldHandler.bind(this)} name="itemCode" type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                Nama Item:
                                            </label>
                                            <input required onChange={itemFieldHandler.bind(this)} name="itemName" type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                Qty:
                                            </label>
                                            <input required onChange={itemFieldHandler.bind(this)} name="itemCount" type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                Harga Satuan:
                                            </label>
                                            <input required onChange={itemFieldHandler.bind(this)} name="itemPrice" type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                Harga Total:
                                            </label>
                                            <input required onChange={itemFieldHandler.bind(this)} name="itemTotalPrice" type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                    <br/>
                                                </label>
                                                <div className="text-center flex justify-end px-2 py-2">
                                                    <button type="submit" className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                                                        Tambah
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    
                                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                                        <div className="w-full overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                    <th className="w-1/12 truncate ... px-4 py-3">No.</th>
                                                    <th className="w-2/12 truncate ... px-4 py-3">Kode Item</th>
                                                    <th className="w-2/12 truncate ... px-4 py-3">Nama Item</th>
                                                    <th className="w-1/12 truncate ... px-4 py-3">Qty</th>
                                                    <th className="w-2/12 truncate ... px-4 py-3">Harga Satuan</th>
                                                    <th className="w-2/12 truncate ... px-4 py-3">Harga Total</th>
                                                    <th className="truncate ... px-4 py-3"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                { ssProps?.map((ss, i) => (
                                                    <tr key={ss.id} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                        <td className="w-1/12 truncate ... px-4 py-3 text-sm">{ i+1 }</td>
                                                        <td className="w-2/12 truncate ... px-4 py-3 text-sm">{ ss.itemCode }</td>
                                                        <td className="w-2/12 truncate ... px-4 py-3 text-sm">{ ss.itemName }</td>
                                                        <td className="w-1/12 truncate ... px-4 py-3 text-sm">{ ss.itemCount }</td>
                                                        <td className="w-2/12 truncate ... px-4 py-3 text-sm">{ ss.itemPrice }</td>
                                                        <td className="w-2/12 truncate ... px-4 py-3 text-sm">{ ss.itemTotalPrice }</td>
                                                        <td className="px-4 py-3 text-sm flex justify-end">
                                                            <button type="button" className="mx-4 px-3 py-2 text-xs font-medium text-center text-white bg-gray-300 rounded-md hover:bg-blue-400 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-300">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                                                            </button>
                                                            <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-gray-300 rounded-md hover:bg-red-400 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-300">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-gray-300"/>
                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Uraian Biaya SS
                                    </h6>
                                    <div className="flex flex-wrap justify-end">
                                        <div className="w-full lg:w-1/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                                Total
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" >
                                                {
                                                    
                                                }
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-t bg-white mb-0 px-3 py-3">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-gray-700 text-xl font-bold">
                                        
                                    </h6>
                                    <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                        Selesai
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}