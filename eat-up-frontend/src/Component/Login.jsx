import React from 'react';
import background from '../Images/login_banner.jpg';

const Login = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center relative text-white overflow-hidden'>
            <img src={background} alt="banner" className='h-full w-full scale-105 object-cover absolute z-[-1] blur'/>
            <div className="bg-black p-16 w-96 h-fit flex flex-col gap-2 items-center rounded-lg text-sm mt-12 bg-opacity-50 border border-y-cyan-400 border-x-red-400">
                <h1 className='text-2xl font-semibold pb-8 text-teal-400'>Login</h1>
                <div className='border-b border-gray-600 pb-1 focus-within:border-teal-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold">Username</h1>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-teal-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <input type="text" placeholder='Type your username' className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                <div className='border-b border-gray-600 pb-1 focus-within:border-teal-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold ">Password</h1>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-teal-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                        <input type="password" placeholder='Type your password'  className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                <h1 className="w-full text-right font-semibold cursor-pointer hover:text-teal-400">Forget password?</h1>
                <h1 className="bg-teal-400 rounded-full px-16 py-1 mt-2 text-white font-semibold border border-transparent hover:border hover:border-teal-400 hover:text-teal-400 hover:bg-transparent mb-4 cursor-pointer">LOGIN</h1>
                <h1>Or Sign Up Using</h1>
                <div className="flex gap-5 text-lg mt-2 mb-8">
                    <i class="fa-brands fa-facebook-f hover:text-blue-800 text-white bg-blue-800 px-3 py-2 rounded-full hover:bg-transparent cursor-pointer"></i>
                    <i class="fa-brands fa-twitter hover:text-teal-400 text-white bg-teal-400 p-2 rounded-full hover:bg-transparent cursor-pointer"></i>
                    <i class="fa-brands fa-google hover:text-red-600 text-white bg-red-600 p-2 rounded-full hover:bg-transparent cursor-pointer"></i>
                </div>
                <h1>Or Sign Up Using</h1>
                <h1 className='font-semibold cursor-pointer hover:text-teal-400'>Sign Up</h1>
            </div>
        </div>
    );
}

export default Login;
