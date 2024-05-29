import { useState } from "react"
import apiService from "../services/apiService";


function AddTransactions() {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    async function insertAmount(event) {

        event.preventDefault();
        const body = {
            description,
            amount
        }

        const user_id = localStorage.getItem("user_id");
        const result = await apiService.fetchData(`transactions/${user_id}`, "POST", body );
        console.log(result);
        location.reload();
    };

    return(
        <>
        <div className="bg-white border-2 border-slate-300 rounded drop-shadow p-1 flex flex-col text-center">
            <div>
                <p className="text-lg">Transactions</p>
            <form onSubmit={insertAmount}>
                <input 
                className="max-w-96 mb-5 p-2 rounded border-2 border-slate-300 focus:outline-none focus:border-slate-500 focus:ring-1-slate-500 mx-1"
                type="text" 
                id="text" 
                name="text" 
                placeholder="Description"
                onChange={(event) => setDescription(event.target.value)}
                />

                <input 
                className="max-w-96 mb-5 p-2 rounded border-2 border-slate-300 focus:outline-none focus:border-slate-500 focus:ring-1-slate-500 mx-1"
                type="number" 
                id="number" 
                name="number" 
                placeholder="Amount"
                onChange={(event) => setAmount(event.target.value)}
                />

                <br />
                <p className="text-slate-400">To add an expense put minus before de number</p>
                <button  
                className="cursor-pointer max-w-96 p-2 bg-blue-500 hover:bg-blue-300 text-white rounded"
                type="send">OK
                </button>
                </form>
            </div>
            
                
            
        </div>

        </>
    )
}

export default AddTransactions