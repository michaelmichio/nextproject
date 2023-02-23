import React, { useState } from 'react';
import Router from 'next/router';
import { unauthPage } from '@/middlewares/authorizationPage';
import Link from 'next/link';

export async function getServerSideProps(ctx) {
    await unauthPage(ctx);

    return { props: {} }
}

export default function Register() {
    const [fields, setFields] = useState({
        username: '',
        password: ''
    });

    const [status, setStatus] = useState('normal');

    async function registerHandler(e) {
        e.preventDefault();

        setStatus('loading');

        const registerReq = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!registerReq.ok) return setStatus('error' + registerReq.status);

        const registerRes = await registerReq.json();

        setStatus('success');

        Router.replace('/auth/login');
    }

    function fieldHandler(e) {
        const name = e.target.getAttribute('name');

        setFields({
            ...fields,
            [name]: e.target.value
        });
    }

    return(

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                {/* <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Get started today
                </h1>
                    
                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                    dolores deleniti inventore quaerat mollitia?
                </p> */}
                <form
                onSubmit={registerHandler.bind(this)}
                action=""
                className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Sign up to your account</p>
                    
                    <div>
                        <label className="sr-only">Email</label>
                        
                        <div className="relative">
                            <input
                            onChange={fieldHandler.bind(this)}
                            name="username"
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Enter username"
                            />
                            
                            {/* <span
                            className="absolute inset-y-0 right-0 grid place-content-center px-4"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span> */}

                        </div>
                    </div>
                    
                    <div>
                        <label className="sr-only">Password</label>
                        
                        <div className="relative">
                            <input
                            onChange={fieldHandler.bind(this)}
                            name="password"
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Enter password"
                            />
                            
                            {/* <span
                            className="absolute inset-y-0 right-0 grid place-content-center px-4"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span> */}
                        
                        </div>
                    </div>
                    
                    <button
                    type="submit"
                    className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign up
                    </button>
                    
                    <p className="text-center text-sm text-gray-500">
                        Already have an account?
                        <Link className="underline" href="/auth/login">Sign in</Link>
                    </p>
                </form>
                
                {/* <div>Status: {status}</div> */}
            
            </div>
        </div>

        // <div>
        //     <h1>Register</h1>

        //     <form onSubmit={registerHandler.bind(this)}>
        //         <input name="username" onChange={fieldHandler.bind(this)} type="text" placeholder="Username" />
        //         <input name="password" onChange={fieldHandler.bind(this)} type="password" placeholder="Password" />
        //         <button type="submit">
        //             Register
        //         </button>

        //         <div>Output: {status}</div>
        //     </form>
        // </div>
    );
}