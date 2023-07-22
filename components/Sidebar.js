import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ currentPage }) {
    
    const [activeLink, setActiveLink] = useState(currentPage);

    // const handleLinkClick = (link) => {
    //     setActiveLink(link);
    // };

    return (
    <>
    
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-sky-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Halaman</div>
                    </div>
                </li>
                <li>
                    <Link href="/dashboard" 
                    className={`relative flex flex-row items-center h-11 focus:outline-none 
                    ${activeLink === 'dashboard' ? 'bg-sky-800 text-white-800 border-sky-500' : 'hover:bg-sky-800 hover:text-white-800 hover:border-sky-500 text-white-600 border-transparent'} 
                    border-l-4 dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16"> <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/> </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">DASHBOARD</span>
                    </Link>
                </li>
                <li>
                    <Link href="/penjualan" 
                    className={`relative flex flex-row items-center h-11 focus:outline-none 
                    ${activeLink === 'penjualan' ? 'bg-sky-800 text-white-800 border-sky-500' : 'hover:bg-sky-800 hover:text-white-800 hover:border-sky-500 text-white-600 border-transparent'} 
                    border-l-4 dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16"> <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/> </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">PENJUALAN</span>
                    </Link>
                </li>
                <li>
                    <Link href="/pembelian" 
                    className={`relative flex flex-row items-center h-11 focus:outline-none 
                    ${activeLink === 'pembelian' ? 'bg-sky-800 text-white-800 border-sky-500' : 'hover:bg-sky-800 hover:text-white-800 hover:border-sky-500 text-white-600 border-transparent'} 
                    border-l-4 dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">PEMBELIAN</span>
                    </Link>
                </li>
                <li>
                    <Link href="/customer" 
                    className={`relative flex flex-row items-center h-11 focus:outline-none 
                    ${activeLink === 'customer' ? 'bg-sky-800 text-white-800 border-sky-500' : 'hover:bg-sky-800 hover:text-white-800 hover:border-sky-500 text-white-600 border-transparent'} 
                    border-l-4 dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16"> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/> </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">CUSTOMER</span>
                    </Link>
                </li>
                <li>
                    <Link href="/barang" 
                    className={`relative flex flex-row items-center h-11 focus:outline-none 
                    ${activeLink === 'barang' ? 'bg-sky-800 text-white-800 border-sky-500' : 'hover:bg-sky-800 hover:text-white-800 hover:border-sky-500 text-white-600 border-transparent'} 
                    border-l-4 dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16"> <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/> </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">STOK BARANG</span>
                    </Link>
                </li>
                <li>
                    <Link href="/layanan" 
                    className={`relative flex flex-row items-center h-11 focus:outline-none 
                    ${activeLink === 'layanan' ? 'bg-sky-800 text-white-800 border-sky-500' : 'hover:bg-sky-800 hover:text-white-800 hover:border-sky-500 text-white-600 border-transparent'} 
                    border-l-4 dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wrench" viewBox="0 0 16 16"> <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/> </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">LAYANAN</span>
                    </Link>
                </li>
                <li>
                    <Link href="/laporan" 
                    className={`relative flex flex-row items-center h-11 focus:outline-none 
                    ${activeLink === 'laporan' ? 'bg-sky-800 text-white-800 border-sky-500' : 'hover:bg-sky-800 hover:text-white-800 hover:border-sky-500 text-white-600 border-transparent'} 
                    border-l-4 dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt-cutoff" viewBox="0 0 16 16"> <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/> <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z"/> </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">LAPORAN</span>
                    </Link>
                </li>
                {/* <li>
                    <Link onClick={() => handleLinkClick("laporan")} href="/laporan" 
                    className={`relative flex flex-row items-center h-11 focus:outline-none 
                    ${activeLink === 'laporan' ? 'bg-sky-800 text-white-800 border-sky-500' : 'hover:bg-sky-800 hover:text-white-800 hover:border-sky-500 text-white-600 border-transparent'} 
                    border-l-4 dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt-cutoff" viewBox="0 0 16 16"> <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/> <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z"/> </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">LAPORAN</span>
                    </Link>
                </li> */}
            </ul>
            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2023</p>
        </div>
    </div>

    </>
    );

}