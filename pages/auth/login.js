import React, { useState } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';
import Link from 'next/link';

import { unauthPage } from '@/middlewares/authorizationPage';

export async function getServerSideProps(ctx) {
    await unauthPage(ctx);
    return { props: {} }
}

export default function Login() {

    const [loginStatus, setLoginStatus] = useState('');

    async function loginHandler(e) {
        e.preventDefault();
        const loginReq = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fields)
        })
        .catch((error) => {
            console.log(error)
        });
        if(!loginReq.ok) return setLoginStatus('Pengguna tidak ditemukan');
        const loginRes = await loginReq.json();
        Cookie.set('token', loginRes.token);
        Cookie.set('username', loginRes.username);
        Router.replace('/dashboard');
    }

    const [fields, setFields] = useState({
        username: '',
        password: ''
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
            onSubmit={loginHandler.bind(this)}
            action=""
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
                <p className="text-center text-lg font-medium">Masuk ke dalam akun anda</p>
                
                <div>
                    <label className="sr-only">Username</label>
                    <div className="relative">
                        <input
                        required
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
                        onChange={fieldHandler.bind(this)}
                        name="password"
                        type="password"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Enter password"
                        />
                    </div>
                </div>

                <p className="text-center text-sm text-red-500">
                    {(loginStatus == '') ? <br/> : loginStatus }
                </p>
                
                <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                    Masuk
                </button>
                
                <p className="text-center text-sm text-gray-500">
                    <Link className="underline" href="/auth/register">Daftar</Link>
                </p>
            </form>
        
        </div>
    </div>

    );

}