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

    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
            <form
            onSubmit={registerHandler.bind(this)}
            action=""
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
                <p className="text-center text-lg font-medium">Create an account</p>
                
                <div>
                    <label className="sr-only">Username</label>
                    <div className="relative">
                        <input
                        required
                        autoComplete="off"
                        onChange={fieldHandler.bind(this)}
                        name="username"
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Enter username"
                        />
                    </div>
                </div>
                
                <div>
                    <label className="sr-only">Password</label>
                    <div className="relative">
                        <input
                        required
                        autoComplete="new-password"
                        onChange={fieldHandler.bind(this)}
                        name="password"
                        type="password"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Enter password"
                        />
                    </div>
                </div>

                <div>
                    <label className="sr-only">Name</label>
                    <div className="relative">
                        <input
                        required
                        autoComplete="off"
                        onChange={fieldHandler.bind(this)}
                        name="name"
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Enter name"
                        />
                    </div>
                </div>

                <div>
                    <label className="sr-only">Admin key</label>
                    <div className="relative">
                        <input
                        required
                        autoComplete="off"
                        onChange={fieldHandler.bind(this)}
                        name="admkey"
                        type="password"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Enter admin key"
                        />
                    </div>
                </div>

                <p className="text-center text-sm text-red-500">
                    {(registerStatus == '') ? <br/> : registerStatus }
                </p>
                
                <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                    Register
                </button>
                
                <p className="text-center text-sm text-gray-500">
                    <Link className="underline" href="/auth/login">Log in</Link>
                </p>
            </form>
        
        </div>
    </div>

    );

}