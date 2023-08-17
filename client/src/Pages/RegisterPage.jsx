import { useState } from "react";
import axios from "axios";
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

export default function RegisterPage(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    async function register(ev){
        ev.preventDefault();
        const response = await axios.post("http://localhost:5000/api/user/register",{
            username,
            email,            
            password
        });
        console.log(response);
        if(response.status===200){
            alert('Registed Successfully');
            // toast.success('hello');
        }else{
            alert('Registration Failed');
        }
    }

    return (
        <main className="min-h-screen flex flex-col  items-center justify-center" onSubmit={register}>
            <form className="flex flex-col lg:w-1/3 p-5  shadow-slate-400 shadow-xl gap-4">
                <div className="text-center text-3xl text-violet-600 font-bold">Register</div>
                <div className=" flex flex-col gap-2">
                <label className="font-semibold text-rose-500 text-xl px-1">Username</label>
                    <input className="p-2 bg-slate-300 rounded-md shadow-md"
                        type="text" placeholder="name" 
                        value={username} onChange={ev =>setUsername(ev.target.value)}
                    />
                    <label className="font-semibold text-rose-500 text-xl px-1">Email</label>
                    <input className="p-2 bg-slate-300 rounded-md shadow-md"
                        type="email" placeholder="usermail" 
                        value={email} onChange={ev => setEmail(ev.target.value)}
                    />
                </div>
                <div className=" flex flex-col gap-2">
                    <label className="font-semibold text-rose-500 text-xl px-1">Password</label>
                    <input  className="p-2 bg-slate-300 rounded-md shadow-md"
                        type="password" placeholder="enter password"
                        value={password} onChange={ev => setPassword(ev.target.value)}
                    />
                </div>
                <div className="flex justify-center items-center mt-1">
                    <button className="rounded-lg  bg-rose-500 text-white py-1 px-3">Register</button>
                </div>
            </form>
        </main>
    );
}