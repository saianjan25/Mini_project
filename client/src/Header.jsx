import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const token = localStorage.getItem("token");
    
    console.log(token)
    useEffect(()=>{
        fetch("http://localhost:5000/api/user/");

    },[])

    function logout(){
        localStorage.removeItem("token");
        fetch("http://localhost:5000/api/user/logout");
    }
    return(
        <header className="flex justify-between items-center mb-8"> 
            <Link to="/" className="font-bold text-2xl text-rose-600">StoryLine</Link>
            <nav className="space-x-6 text-lg">   
                {
                    token !== null ? <Link to={logout}>Logout</Link> :( 
                    <div className="flex gap-2"><Link to="/login">Login</Link>
                    <Link to="/register">Register</Link></div>)
                }
            </nav>
        </header>
    );
}