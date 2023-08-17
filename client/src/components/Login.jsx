import axios from "axios";
import { useState } from "react";
const Login = () => {
  return (
    <main className="min-h-screen flex flex-col  items-center justify-center">
      <form
        className="flex flex-col xl:w-1/3 p-5 shadow-slate-400 shadow-xl gap-4"
        onSubmit={login}
      >
        <div className="text-center text-3xl text-violet-600 font-bold">
          Login
        </div>
        <div className=" flex flex-col gap-2">
          <label className="font-semibold text-rose-500 text-xl px-1">
            Email
          </label>
          <input
            type="text"
            placeholder="enter email"
            className="p-2 bg-slate-300 rounded-md shadow-md"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label className="font-semibold text-rose-500 text-xl px-1">
            Password
          </label>
          <input
            type="password"
            placeholder="enter password"
            className="p-2 bg-slate-300 rounded-md shadow-md"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div className="flex justify-center items-center mt-1">
          <button className="rounded-lg  bg-rose-500 text-white py-1 px-3">
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
