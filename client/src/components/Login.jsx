import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/userSlice";

const Login = () => {
  const { token,isLoading } = useSelector((state) => state["user"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleUserLogin = async (e) => {
    e.preventDefault();
    const response = await dispatch(userLogin(data));
    console.log(response.meta.requestStatus === "fulfilled")
    if(response.meta.requestStatus === "fulfilled")
    {
      navigate("/home")
    }
  };
  if (token) {
    navigate("/home")
  }
  if(isLoading)
  {
    return <div>Loading...</div>
  }
  return (
    <main className="min-h-screen flex flex-col  items-center justify-center">
      <form
        className="flex flex-col xl:w-1/3 p-5 shadow-md gap-4"
        onSubmit={handleUserLogin}
      >
        <div className="text-center text-2xl text-violet-600 font-bold">
          SignIn to your Account
        </div>
        <div className=" flex flex-col gap-2">
          <label className="font-semibold text-rose-500 text-xl px-1">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="enter email"
            className="p-2 bg-slate-300 rounded-md shadow-md"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label className="font-semibold text-rose-500 text-xl px-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            className="p-2 bg-slate-300 rounded-md shadow-md"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center mt-1">
          <button
            type="submit"
            className="rounded-lg  bg-rose-500 text-white font-bold py-1 px-3"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
