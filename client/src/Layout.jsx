import { Outlet } from "react-router-dom";
import Header from "./Header";


export default function Layout(){
    return(
        <main className="p-4 sm:px-14 sm:py-5 text-gray-600">
            <section className="py-6 px-1 sm:p-3">
                <div className="flex flex-col ">
                    <Header />
                    <Outlet />
                </div>            
            </section>     
        </main>
    );
}