import React, { useState } from 'react';
import SSModal from './SSModal';

export default function OrderModal({ isVisible, onClose, orderData, token }) {

    if(!isVisible) return null;

    // ss modal
    const [ssModal, setVisibleSS] = useState(false);
    const [ssGroupData, setSSGroupData] = useState();

    // close modal
    function closeHandler(e) {
        e.preventDefault();
        onClose();
    }
    
    const [status, setStatus] = useState('normal');

    // read ssgroups
    const [ssGroupProps, setSSGroupProps] = useState();
    const [ssGroupRead, setSSGroupRead] = useState(false);
    if (!ssGroupRead) readSSGroupHandler();
    async function readSSGroupHandler() {
        setSSGroupRead(true);
        const readSSGroupReq = await fetch('/api/ssgroup/read/' + orderData.orderId, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .catch((error) => {
            console.log(error)
        });
        const readSSGroupRes = await readSSGroupReq.json();
        setSSGroupProps(readSSGroupRes.data);
    }

    // create ssgroup
    async function createSSGroupHandler() {
        const createSSGroupReq = await fetch('/api/ssgroup/create', {
            method: 'POST',
            body: JSON.stringify(orderData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch((error) => {
            console.log(error)
        });
        if(!createSSGroupReq.ok) return setStatus('error' + createSSGroupReq.status);
        setSSGroupRead(false);
    }

    // read services
    const initialServiceFields = {
        name: '',
        price: '',
        orderId : orderData.orderId
    };
    const [serviceFields, setServiceFields] = useState(initialServiceFields);
    const [serviceProps, setServiceProps] = useState();
    const [serviceRead, setServiceRead] = useState(false);
    if (!serviceRead) readServiceHandler();
    async function readServiceHandler() {
        setServiceRead(true);
        const readServiceReq = await fetch('/api/service/read/' + orderData.orderId, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .catch((error) => {
            console.log(error)
        });
        const readServiceRes = await readServiceReq.json();
        setServiceProps(readServiceRes.data);
    }

    // create service handler
    async function createServiceHandler(e) {
        e.preventDefault();
        const createServiceReq = await fetch('/api/service/create', {
            method: 'POST',
            body: JSON.stringify(serviceFields),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch((error) => {
            console.log(error)
        });
        if(!createServiceReq.ok) return setStatus('error' + createServiceReq.status);
        setVal(initialVal);
        setServiceRead(false);
    }

    // input handler
    const initialVal = {
        name: '',
        price: ''
    };
    const [val, setVal] = useState(initialVal);
    function serviceFieldHandler(e) {
        const name = e.target.getAttribute('name');
        setServiceFields({
            ...serviceFields,
            [name]: e.target.value
        });
        setVal({
            [name]: e.target.value
        });
    }

    return(
    <>

    {/* Start - Modal */}
    <div className="h-fit py-12 bg-black bg-opacity-30 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3">

            {/* Start - Card Container */}
            <div className="w-full lg:w-full px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                    
                    {/* Start - Header Card */}
                    <div className="rounded-t bg-white mb-0 px-3 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-gray-700 text-xl font-bold" />
                            <button onClick={closeHandler.bind(this)} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* End - Header Card */}

                    {/* Start - Main Card */}
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                        {/* Start - Main Content */}

                        <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Informasi Order
                        </h6>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Nama Karyawan
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        SUSI
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Id Order
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {orderData.orderId}
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Tanggal Order
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        { orderData.orderCreatedAt.substring(0, 10) }
                                    </label>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-1 border-b-1 border-gray-300"/>

                        <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Informasi Customer
                        </h6>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Nama Customer
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {orderData.customerName}
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Alamat
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {orderData.customerAddress}
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Nomor Telepon
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {orderData.customerPhone}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-1 border-b-1 border-gray-300"/>

                        <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Informasi Kendaraan
                        </h6>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Nomor Polisi
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {orderData.nomorPolisi}
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Jenis Kendaraan
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {
                                        orderData.jenisKendaraan == '' ?
                                        '-'
                                        :
                                        orderData.jenisKendaraan
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Nomor Rangka
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {
                                        orderData.nomorRangka == '' ?
                                        '-'
                                        :
                                        orderData.nomorRangka
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Nomor Mesin
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {
                                        orderData.nomorMesin == '' ?
                                        '-'
                                        :
                                        orderData.nomorMesin
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="pt-1 block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Nomor SPK
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {
                                        orderData.nomorSPK == '' ?
                                        '-'
                                        :
                                        orderData.nomorSPK
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-1 border-b-1 border-gray-300"/>

                        <h6 className="text-gray-400 text-sm mt-3 font-bold uppercase">
                            Informasi SS
                        </h6>

                        <div className="mx-4">
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-10/12 px-4" />
                                <div className="w-full lg:w-2/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                            <br/>
                                        </label>
                                        <div className="text-center flex justify-end px-2 py-2">
                                            <button onClick={() => createSSGroupHandler()} type="button" className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                                                Tambah
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                <th className="w-1/12 truncate ... px-4 py-3">No.</th>
                                                <th className="w-3/12 truncate ... px-4 py-3">Nomor SS</th>
                                                <th className="w-3/12 truncate ... px-4 py-3">Tanggal SS</th>
                                                <th className="w-3/12 truncate ... px-4 py-3">Biaya SS</th>
                                                <th className="truncate ... px-4 py-3"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                            { ssGroupProps?.map((ssgroup, i) => (
                                                <tr key={ssgroup.id} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                    <td className="w-1/12 truncate ... px-4 py-3 text-sm">{ i+1 }</td>
                                                    <td className="w-3/12 truncate ... px-4 py-3 text-sm">{ ssgroup.id }</td>
                                                    <td className="w-3/12 truncate ... px-4 py-3 text-sm">{ ssgroup.created_at.substring(0, 10) }</td>
                                                    <td className="w-3/12 truncate ... px-4 py-3 text-sm">{ ssgroup.ssTotalPrice }</td>
                                                    <td className="truncate ... px-4 py-3 text-sm flex justify-end">
                                                        <button onClick={() => {setSSGroupData(ssgroup), setVisibleSS(true)}} type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-gray-300 rounded-md hover:bg-blue-400 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-300">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                                                        </button>
                                                        {/* <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-gray-300 rounded-md hover:bg-red-400 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-300">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                        </button> */}
                                                    </td>
                                                </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-gray-300"/>

                        <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Informasi Pekerjaan
                        </h6>

                        <div className="mt-4 mx-4">
                            <form onSubmit={createServiceHandler.bind(this)} className="flex flex-wrap">
                                <div className="w-full lg:w-5/12 px-4">
                                    <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Uraian Pekerjaan:
                                    </label>
                                    <input required autoComplete="off" onChange={serviceFieldHandler.bind(this)} name="name" value={val.name} type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-5/12 px-4">
                                    <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Biaya Pekerjaan:
                                    </label>
                                    <input required autoComplete="off" onChange={serviceFieldHandler.bind(this)} name="price" value={val.price} type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                                                <th className="w-4/12 truncate ... px-4 py-3">Uraian Pekerjaan</th>
                                                <th className="w-4/12 truncate ... px-4 py-3">Biaya Pekerjaan</th>
                                                <th className="truncate ... px-4 py-3"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                            { serviceProps?.map((service, i) => (
                                                <tr key={service.id} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                    <td className="w-1/12 truncate ... px-4 py-3 text-sm">{ i+1 }</td>
                                                    <td className="w-4/12 truncate ... px-4 py-3 text-sm">{ service.name }</td>
                                                    <td className="w-4/12 truncate ... px-4 py-3 text-sm">{ service.price }</td>
                                                    <td className="px-4 py-3 text-sm flex justify-end">
                                                        {/* <button type="button" className="mr-4 px-3 py-2 text-xs font-medium text-center text-white bg-gray-300 rounded-md hover:bg-blue-400 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-300">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                                                        </button> */}
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
                        </div>

                        <hr className="mt-6 border-b-1 border-gray-300"/>

                        <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Uraian Biaya
                        </h6>
                        
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-10/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Spare Part / Oli
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {ssGroupProps?.map((ssGroup, i) => ((i == 0) ? ssGroup.total : ''))}
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-10/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Ongkos Kerja
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {serviceProps?.map((service, i) => ((i == 0) ? service.total : ''))}
                                    </label>
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-10/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Subtotal
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        {
                                        ((parseFloat(ssGroupProps?.map((ssGroup, i) => ((i == 0) ? ssGroup.total : ''))) + parseFloat(serviceProps?.map((service, i) => ((i == 0) ? service.total : '')))) > 0)
                                        ?
                                        (parseFloat(ssGroupProps?.map((ssGroup, i) => ((i == 0) ? ssGroup.total : ''))) + parseFloat(serviceProps?.map((service, i) => ((i == 0) ? service.total : ''))))
                                        :
                                        ''
                                        }
                                    </label>
                                </div>
                            </div> */}
                        </div>

                        <hr className="mb-6 border-b-1 border-gray-300"/>

                        <div className="flex flex-wrap">
                            {/* <div className="w-full lg:w-10/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Biaya Lainnya
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-10/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" >
                                        Discount
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-sm mb-2" >
                                        
                                    </label>
                                </div>
                            </div> */}
                            <div className="w-full lg:w-10/12 px-4">
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
                                        ((parseFloat(ssGroupProps?.map((ssGroup, i) => ((i == 0) ? ssGroup.total : ''))) + parseFloat(serviceProps?.map((service, i) => ((i == 0) ? service.total : '')))) > 0)
                                        ?
                                        (parseFloat(ssGroupProps?.map((ssGroup, i) => ((i == 0) ? ssGroup.total : ''))) + parseFloat(serviceProps?.map((service, i) => ((i == 0) ? service.total : ''))))
                                        :
                                        ''
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* End - Main Content */}

                    </div>
                    {/* End - Main Card */}

                    {/* Start - Footer Card */}
                    <div className="rounded-t bg-white mb-0 px-3 py-3">
                        <div className="text-center flex justify-between">
                            <h6 className="text-gray-700 text-xl font-bold" />
                            <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                Cetak
                            </button>
                        </div>
                    </div>
                    {/* End - Footer Card */}
                    
                </div>
            </div>
            {/* End - Container */}

        </div>
    </div>
    {/* End - Modal */}

    <SSModal isVisible={ssModal} onClose={() => {setVisibleSS(false); setSSGroupRead(false);}} ssGroupData={ssGroupData} token={token} />

    </>
    );

}