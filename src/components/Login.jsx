import { useState, useEffect } from "react";
import apiService from "../services/apiService";


function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [user, setUser] = useState({});

    useEffect(function() {
        (async function checkLogin() {
  
           const result = await apiService.fetchData("users/login", "GET");
  
           console.log(result);
           
           setUser(result);
        })();
     }, []);

     async function login(event) {

        event.preventDefault();
  
        const body = {
        email,
        password
        };
  
        const result = await apiService.fetchData("users/login", "POST", body);
  
        console.log(result);
     };


    return (
        <>
        <div className="w-full min-h-screen flex justify-center px-4 bg-slate-200">
            <div className="my-10 w-full flex justify-center items-center flex-col">

                <h1 className="text-4xl font-medium text-black content-center">My Wallet App</h1>
                <form onSubmit={login} className="flex flex-col my-6">
                    <label className="font-medium text-center text-black">Email</label>
                    <input 
                    className="min-w-96 mb-5 p-2 rounded" 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    />

                    <label className="font-medium text-center text-black">Password</label>
                    <input
                    className="max-w-96 mb-5 p-2 rounded"  
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    />

                    <button className="cursor-pointer max-w-96 p-2 text-white font-medium bg-slate-500 hover:bg-slate-400"
                    typeof="submit">LOGIN</button>
                </form>

            </div>
        </div>
        </>
    )};



export default Login