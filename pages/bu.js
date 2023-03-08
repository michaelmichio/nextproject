import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

export default function BackUpIndex() {
    return (

        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
            
            <Nav />
            
            <Sidebar />
            
            <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                <div className="py-1 bg-gray-50">
                    <div className="w-full lg:w-full px-4 mx-auto mt-6">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                            <div className="rounded-t bg-white mb-0 px-3 py-3">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-gray-700 text-xl font-bold">
                                        
                                    </h6>
                                    <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                        Batal
                                    </button>
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form>
                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Nama Karyawan
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                Susi Susanti
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Nomor Order
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                0000001
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-1 border-b-1 border-gray-300"/>
                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Informasi Customer
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Nama Customer
                                            </label>
                                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue=""/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Alamat
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue=""/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Nomor Telepon
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-gray-300"/>
                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Informasi Kendaraan
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Nomor Polisi
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue=""/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Jenis Kendaraan
                                            </label>
                                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue=""/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Nomor Rangka
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue=""/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Nomor Mesin
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue=""/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Nomor SPK
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-gray-300"/>
                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Suku Cadang & Material
                                    </h6>
                                    <div className="mt-4 mx-4">
                                        <div className="text-center flex justify-end px-2 py-2">
                                            <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                                Tambah
                                            </button>
                                        </div>
                                        <div className="w-full overflow-hidden rounded-lg shadow-xs">
                                            <div className="w-full overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                    <th className="px-4 py-3">No.</th>
                                                    <th className="px-4 py-3">ID Barang</th>
                                                    <th className="px-4 py-3">Nama Barang</th>
                                                    <th className="px-4 py-3">Jumlah</th>
                                                    <th className="px-4 py-3">Harga Satuan</th>
                                                    <th className="px-4 py-3">Discount</th>
                                                    <th className="px-4 py-3">Total</th>
                                                    <th className="px-4 py-3"></th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-3 text-sm">1</td>
                                                    <td className="px-4 py-3 text-sm">0000001</td>
                                                    <td className="px-4 py-3 text-sm">Oli Gardan</td>
                                                    <td className="px-4 py-3 text-sm">1</td>
                                                    <td className="px-4 py-3 text-sm">50.000</td>
                                                    <td className="px-4 py-3 text-sm"></td>
                                                    <td className="px-4 py-3 text-sm">50.000</td>
                                                    <td className="px-4 py-3 text-xs flex">
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Address
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                City
                                            </label>
                                            <input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="New York"/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Country
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="United States"/>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Postal Code
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Postal Code"/>
                                            </div>
                                        </div>
                                    </div> */}
                                    <hr className="mt-6 border-b-1 border-gray-300"/>
                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Jasa Layanan
                                    </h6>
                                    <div className="mt-4 mx-4">
                                        <div className="text-center flex justify-end px-2 py-2">
                                            <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                                Tambah
                                            </button>
                                        </div>
                                        <div className="w-full overflow-hidden rounded-lg shadow-xs">
                                            <div className="w-full overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                    <th className="px-4 py-3">No.</th>
                                                    <th className="px-4 py-3">Uraian Pekerjaan</th>
                                                    <th className="px-4 py-3">Ongkos Kerja</th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-3 text-sm">1</td>
                                                    <td className="px-4 py-3 text-sm">Ganti Oli</td>
                                                    <td className="px-4 py-3 text-sm">20.000</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                About me
                                            </label>
                                            <textarea type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" defaultValue="A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source."/>
                                            </div>
                                        </div>
                                    </div> */}
                                    <hr className="mt-6 border-b-1 border-gray-300"/>
                                    <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Uraian Biaya
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Ongkos Kerja
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                20.000
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-9/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Suku Cadang
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                0
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-9/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Oli/Material
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                50.000
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-9/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Subtotal
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                70.000
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mb-6 border-b-1 border-gray-300"/>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Materai
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                0
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-9/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Discount
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                0
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-9/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Total
                                            </label>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-3/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label className="block uppercase text-gray-600 text-sm mb-2" htmlFor="grid-password">
                                                70.000
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="rounded-t bg-white mb-0 px-3 py-3">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-gray-700 text-xl font-bold">
                                        
                                    </h6>
                                    <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                        Cetak
                                    </button>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>

            </div>

        </div>

    );
}