import { Link } from "wouter"
import { FaArrowRightFromBracket } from "react-icons/fa6"
import { useEffect, useState } from "react"
import apiService from "../services/apiService"



function NavegationBar() {

    const [name, setName] = useState({});
    

    useEffect(function(){
        (async function getName() {
         
            const id = localStorage.getItem("user_id");
            const result = await apiService.fetchData(`users/${id}`, "GET");
            
            setName(result);
            })();
         },[]);

    function logoutUser(event) {
        event.preventDefault();
        localStorage.clear();
        window.location.href = "/login";
    }

    return (
        <>
        <div className="w-full flex items-center justify-center color h-16 bg-white drop-shadow mb-4">
            <header className="flex w-full max-w-7xl items-center justify-center gap-x-10">
                
                <Link href="/overview">
                    <img className="size-10 hover:bg-slate-100 rounded"
                    src="../public/images/favicon.png" alt="Logo da My Wallet App" />
                </Link>

                <Link
                className="cursor-pointer max-w-96 p-2 text-black font-medium hover:bg-slate-100 rounded"
                href="/overview">Overview
                </Link>

                <Link 
                className="cursor-pointer max-w-96 p-2 text-black font-medium hover:bg-slate-100 rounded"
                href="/transactions">Transactions
                </Link>

                {/* <Link href="/settings">Settings</Link> */}
                <p>Hello, {name.username}</p>

                <button
                    className="cursor-pointer max-w-96 p-2 rounded-full text-white font-medium bg-red-500 hover:bg-red-100"
                    onClick={logoutUser}>
                    <FaArrowRightFromBracket />    
                </button>
            </header>
        </div>

        </>
    )
}

export default NavegationBar