import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";


export default function LoginPage() {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  async function login(ev){
    ev.preventDefault();

    const response = await axios.post("http://localhost:5000/api/user/login",{
        email : username,
        password
    });
   
    if(response.status===200){ 
      console.log(response);
      const token = response.data.token;
      localStorage.setItem("token",token);
      navigate("/");
    }
    else{
      alert('Login Failed');
    }
  }
  return (
    
  );
}
