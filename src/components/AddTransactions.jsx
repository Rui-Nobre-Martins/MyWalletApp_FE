import { useState } from "react";
import apiService from "../services/apiService";

function AddTransactions() {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    async function insertAmount(event) {
        event.preventDefault();

        const finalAmount = isExpense ? -Math.abs(parseFloat(amount)) : parseFloat(amount);

        const body = {
            description,
            amount: finalAmount
        };

        const user_id = localStorage.getItem("user_id");
        const result = await apiService.fetchData(`transactions/${user_id}`, "POST", body);
        console.log(result);
        location.reload();
    }

    function expenseBtn(event) {
        event.preventDefault();
        setIsExpense(true);
    }

    function incomeBtn(event) {
        event.preventDefault();
        setIsExpense(false);
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow p-1 flex flex-col text-center">
                <div>
                    <p className="text-lg">Transactions</p>

                    <div className="flex justify-center gap-5 pb-2 ">
                        <button 
                            className={`cursor-pointer max-w-96 p-1 text-white rounded ${!isExpense ? 'bg-blue-500 hover:bg-blue-500' : 'bg-blue-300'}`} 
                            onClick={incomeBtn}
                        >
                            Income
                        </button>
                        <button 
                            className={`cursor-pointer max-w-96 p-1 text-white rounded ${isExpense ? 'bg-red-500 hover:bg-red-500' : 'bg-red-300'}`} 
                            onClick={expenseBtn}
                        >
                            Expense
                        </button>
                    </div>

                    <form onSubmit={insertAmount}>
                        <input 
                            className="max-w-96 mb-5 p-2 rounded border-2 border-slate-300 focus:outline-none focus:border-slate-900 focus:ring-1-slate-500 mx-1"
                            type="text" 
                            id="text" 
                            name="text" 
                            placeholder="Description"
                            onChange={(event) => setDescription(event.target.value)}
                        />

                        <input 
                            className="max-w-96 mb-5 p-2 rounded border-2 border-slate-300 focus:outline-none focus:border-slate-900 focus:ring-1-slate-500 mx-1"
                            type="number" 
                            id="number" 
                            name="number" 
                            placeholder="Amount"
                            onChange={(event) => setAmount(event.target.value)}
                        />
                        <br />
                        <button 
                            className="cursor-pointer max-w-96 p-2 bg-blue-500 hover:bg-blue-300 text-white rounded"
                            type="submit"
                        >
                            OK
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddTransactions;
