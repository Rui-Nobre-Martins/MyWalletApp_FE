

function Register(){
    return (
        <>
        <div className="w-full min-h-screen flex justify-center px-4 bg-slate-200">
            <div className="my-10 w-full md:max-w2xl flex justify-center items-center flex-col">
                <h1 className="text-4xl font-medium text-black content-center">My Wallet App - Register</h1>

                <form className="flex flex-col my-6">
                    <label className="font-medium text-center text-black">Email</label>
                    <input 
                    className="min-w-96 mb-5 p-2 rounded" 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email"
                    />

                    <label className="font-medium text-center text-black">Username</label>
                    <input 
                    className="min-w-96 mb-5 p-2 rounded" 
                    type="text" 
                    id="text" 
                    name="text" 
                    placeholder="Username"
                    />

                    <label className="font-medium text-center text-black">Password</label>
                    <input
                    className="max-w-96 mb-5 p-2 rounded"  
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password"
                    />

                    <button className="cursor-pointer max-w-96 p-2 text-white font-medium bg-slate-500 hover:bg-slate-400"
                    type="submit">Login</button>
                </form>

                
            </div>
        </div>
        </>
    )};
export default Register