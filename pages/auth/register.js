import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import { unauthPage } from '@/middlewares/authorizationPage';

export async function getServerSideProps(ctx) {
    await unauthPage(ctx);
    return { props: {} }
}

export default function Register() {

    const [registerStatus, setRegisterStatus] = useState('');

    async function registerHandler(e) {
        e.preventDefault();
        const registerReq = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch((error) => {
            console.log(error)
        });
        if(!registerReq.ok) {
            if(registerReq.status == 403) return setRegisterStatus('Admin key salah');
            if(registerReq.status == 409) return setRegisterStatus('Username sudah terdaftar');
        }
        Router.replace('/auth/login');
    }

    const [fields, setFields] = useState({
        username: '',
        password: '',
        name:'',
        admkey: ''
    });

    function fieldHandler(e) {
        const name = e.target.getAttribute('name');
        setFields({
            ...fields,
            [name]: e.target.value
        });
    }

    return(

        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-sky-800 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                {/* <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover"/> */}
            </div>
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Register an account</h1>
                    <form className="mt-6" onSubmit={registerHandler.bind(this)}>
                        <div>
                            <label className="block text-gray-700">Username</label>
                            <input onChange={fieldHandler.bind(this)} type="text" name="username" placeholder="Enter Username" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="false" required/>
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input onChange={fieldHandler.bind(this)} type="password" name="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoComplete="new-password" required/>
                        </div>
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input onChange={fieldHandler.bind(this)} type="text" name="name" placeholder="Enter Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="false" required/>
                        </div>
                        <div>
                            <label className="block text-gray-700">Admin Key</label>
                            <input onChange={fieldHandler.bind(this)} type="password" name="admkey" placeholder="Enter Admin Key" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="false" required/>
                        </div>
                        <div className="text-center text-red-500 mt-6">
                            {(registerStatus == '') ? <br/> : registerStatus }
                        </div>
                        {/* <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div> */}
                        <button type="submit" className="w-full block bg-sky-700 hover:bg-sky-600 focus:bg-sky-600 text-white font-semibold rounded-lg px-4 py-3 mt-6">Register</button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full"/>
                    <p className="mt-8"><Link href="/auth/login" className="text-sky-600 hover:text-sky-700 font-semibold">Log in</Link></p>
                </div>
            </div>
        </section>

    // <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    //     <div className="mx-auto max-w-lg">
    //         <form
    //         onSubmit={registerHandler.bind(this)}
    //         action=""
    //         className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    //         >
    //             <p className="text-center text-lg font-medium">Create an account</p>
                
    //             <div>
    //                 <label className="sr-only">Username</label>
    //                 <div className="relative">
    //                     <input
    //                     required
    //                     autoComplete="off"
    //                     onChange={fieldHandler.bind(this)}
    //                     name="username"
    //                     type="text"
    //                     className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
    //                     placeholder="Enter username"
    //                     />
    //                 </div>
    //             </div>
                
    //             <div>
    //                 <label className="sr-only">Password</label>
    //                 <div className="relative">
    //                     <input
    //                     required
    //                     autoComplete="new-password"
    //                     onChange={fieldHandler.bind(this)}
    //                     name="password"
    //                     type="password"
    //                     className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
    //                     placeholder="Enter password"
    //                     />
    //                 </div>
    //             </div>

    //             <div>
    //                 <label className="sr-only">Name</label>
    //                 <div className="relative">
    //                     <input
    //                     required
    //                     autoComplete="off"
    //                     onChange={fieldHandler.bind(this)}
    //                     name="name"
    //                     type="text"
    //                     className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
    //                     placeholder="Enter name"
    //                     />
    //                 </div>
    //             </div>

    //             <div>
    //                 <label className="sr-only">Admin key</label>
    //                 <div className="relative">
    //                     <input
    //                     required
    //                     autoComplete="off"
    //                     onChange={fieldHandler.bind(this)}
    //                     name="admkey"
    //                     type="password"
    //                     className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
    //                     placeholder="Enter admin key"
    //                     />
    //                 </div>
    //             </div>

    //             <p className="text-center text-sm text-red-500">
    //                 {(registerStatus == '') ? <br/> : registerStatus }
    //             </p>
                
    //             <button
    //             type="submit"
    //             className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
    //             >
    //                 Register
    //             </button>
                
    //             <p className="text-center text-sm text-gray-500">
    //                 <Link className="underline" href="/auth/login">Log in</Link>
    //             </p>
    //         </form>
        
    //     </div>
    // </div>

    );

}