import React, { useState } from 'react';
import contact from '../Images/contact_banner.jpg';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = () => {
        console.log(`name: ${name} \nemail: ${email} \nnumber: ${phone} \nmessage: ${msg}`);
    }
    return (
        <div className="flex items-center justify-center h-screen w-full relative overflow-hidden pt-12">
                <img src={contact} alt="" className="absolute h-full w-full object-cover scale-105 blur" />
                <div className="md:w-[600px] w-80 h-fit bg-black z-10 bg-opacity-80 rounded-md overflow-hidden text-white text-sm md:text-base md:pb-16 pb-12 border border-y-cyan-400 border-x-red-400">
                    <div className="w-full md:h-40 h-32 relative flex flex-col items-center justify-center">
                        <img src={contact} alt="" className="absolute h-full w-full object-cover brightness-50"/>
                        <h1 className="md:text-3xl text-2xl font-bold z-10">Contact Us</h1>
                        <h1 className='z-10'>Fell free to drop us a line below!</h1>
                    </div>
                    <div className="flex py-2 md:mt-8 mt-4">
                        <h1 className='md:w-32 w-24 text-right mr-2'>Name :</h1>
                        <input onChange={e => setName(e.target.value)} type="text" id='name' className='outline-none border-b md:w-96 w-44 border-slate-50/40 bg-transparent focus:border-teal-400'/>
                    </div>
                    <div className="flex py-2">
                        <h1 className='md:w-32 w-24 text-right mr-2'>Email :</h1>
                        <input onChange={e => setEmail(e.target.value)} type="email" id='email' className='outline-none border-b md:w-96 w-44 border-slate-50/40 bg-transparent focus:border-teal-400'/>
                    </div>
                    <div className="flex py-2">
                        <h1 className='md:w-32 w-24 text-right mr-2'>Phone :</h1>
                        <input onChange={e => setPhone(e.target.value)} type="number" id='num' className='outline-none border-b md:w-96 w-44 border-slate-50/40 bg-transparent focus:border-teal-400'/>
                    </div>
                    <div className="flex py-2">
                        <h1 className='md:w-32 w-24 text-right mr-2'>Message :</h1>
                        <textarea onChange={e => setMsg(e.target.value)} rows="4" id='msg' className='outline-none border-b border-slate-50/40 bg-transparent focus:border-teal-400 mb-6 max-h-40 md:w-96 w-44'></textarea>
                    </div>
                    <button className='block m-auto bg-teal-400 rounded-full px-16 py-1 font-semibold border border-transparent hover:border-teal-400 hover:text-teal-400 hover:bg-transparent' onClick={handleSubmit}>Submit</button>
                </div>
        </div>
    );
}

export default Contact;
