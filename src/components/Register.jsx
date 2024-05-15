import { useState, useEffect } from "react";
import apiService from "../services/apiService";
import { useLocation} from "wouter";



function Register(){

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useLocation();

    useEffect(function(){
        (async function checkRegister(){

            const result = await apiService.fetchData("users", "GET");

            console.log(result);
        })
    },[])

    async function register(event) {

        event.preventDefault();
  
        const body = {
        email,
        username,
        password,
        location
        };
  
        const result = await apiService.fetchData("users", "POST", body);
  
        console.log(result);
        setLocation("/login");
     };




    return (
        <>
        <div className="w-full min-h-screen flex justify-center px-4 bg-slate-200">
            <div className="my-10 w-full md:max-w2xl flex justify-center items-center flex-col">
                <h1 className="text-4xl font-medium text-black content-center ">My Wallet App - Register</h1>

                <form onSubmit={register} className="flex flex-col my-6">
                    <label className="font-medium text-center text-black">Email</label>
                    <input 
                    className="min-w-96 mb-5 p-2 rounded" 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    />

                    <label className="font-medium text-center text-black">Username</label>
                    <input 
                    className="min-w-96 mb-5 p-2 rounded" 
                    type="text" 
                    id="text" 
                    name="text" 
                    placeholder="Username"
                    required
                    onChange={(event) => setUsername(event.target.value)}
                    />

                    <label className="font-medium text-center text-black">Password</label>
                    <input
                    className="max-w-96 mb-5 p-2 rounded"  
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                    />

                    <button className="cursor-pointer max-w-96 p-2 text-white font-medium bg-slate-500 hover:bg-slate-400 rounded"
                    type="submit">Register</button>
                </form>
            </div>
        </div>
        </>
    )};
export default Register