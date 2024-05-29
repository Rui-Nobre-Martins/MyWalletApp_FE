// import { useEffect, useState } from "react"
// import apiService from "../services/apiService"
// import { FaTrash } from "react-icons/fa";
// import { FaPen } from "react-icons/fa";



// function TransactionsList() {

//     const [transactionsInfo, setTransactionsInfo] = useState([]);
//     const [transactionEdit, setTransactionEdit] = useState({id: null, description: "", amount: ""});

//     useEffect(function(){
//         (async function() {

//             const user_id = localStorage.getItem("user_id");
//             const result = await apiService.fetchData(`transactions/${user_id}`, "GET");

//             console.log(result);
//             setTransactionsInfo(result.transactions);
//         })();
//     },[]);

//     async function updateTransaction(event) {
//         event.preventDefault();

//         const { id, description, amount } = transactionEdit;

//             const body = {
//                 description,
//                 amount
//             };

//             const result = await apiService.fetchData(`transactions/${id}`, "PUT", body);

//             if(result.sucess) {
//                 const updatedTransactions = transactionsInfo.map(transaction => transaction.id === id ? {
//                     transaction,
//                     description,
//                     amount
//                 }: transaction)
//                 setTransactionsInfo(updatedTransactions);
//                 setTransactionEdit({id: null, description: "", amount: ""});
//                 location.reload(HomeView);
//             } else {
//                 console.log("Error on updated");
//             }
//         }

//         async function deleteTransaction(id) {
//             const result = await apiService.fetchData(`transactions/${id}`, "DELETE");
//             if (result.success) {
//                 const updatedTransactions = transactionsInfo.filter(transactions => transactions.id !== id);
//                 setTransactionsInfo(updatedTransactions);
                
//             } else {
//                 console.log("Erro ao excluir transação");
//             }
//             location.reload(HomeView);
//         }

//     function handleEditChange(event) {
//                 const { name, value } = event.target;
//                 setTransactionEdit(prev => ({ ...prev, [name]: value }));
//                 location.reload(HomeView);
//             }

//     return(
//         <>        
//         <div className="py-10 px-2 flex justify-center flex-col items-center">

//             <table className="max-w-xl bg-white shadow rounded-lg overflow-hidden text-center">
//             <thead className="bg-gray-200">
//                 <tr>
//                     <th className="py-2 px-4">Amount</th>
//                     <th className="py-2 px-4">Description</th>
//                     <th className="py-2 px-4">Created At</th>
//                     <th className="py-2 px-4">Edit</th>
//                     <th className="py-2 px-4">Delete</th>
//                 </tr>
//             </thead>

            
//             <tbody>
//                 {transactionsInfo.map((transaction, index) =>
//                     <tr key={index}>
//                         <td className="py-2 px-2">{transaction.amount}</td>
//                         <td className="py-2 px-2">{transaction.description}</td>
//                         <td className="py-2 px-2">{(transaction.created_at).substring(0,10)}
//                         </td>
//                         <td>
//                             <button 
//                                 className="p-2 m-1  bg-blue-500  hover:bg-blue-300 text-white rounded"
//                                 onClick={() => setTransactionEdit({ id: transaction.id, description: transaction.description, amount: transaction.amount })}
//                             ><FaPen />
//                             </button>
//                         </td>
//                         <td>
//                             <button
//                                 className="p-2 m-1  bg-red-500 hover:bg-red-300 text-white rounded"
//                                 onClick={() => deleteTransaction(transaction.id)}
//                             ><FaTrash /></button>
//                         </td>
//                     </tr>
//                     )}
//             </tbody>
//             </table>

//             {transactionEdit.id && (
//                 <form onSubmit={updateTransaction} className="mt-4">
//                     <input
//                         type="text"
//                         name="description"
//                         value={transactionEdit.description}
//                         onChange={handleEditChange}
//                         placeholder="Description"
//                         className="px-2 py-1 border rounded"
//                     />
//                     <input
//                         type="number"
//                         name="amount"
//                         value={transactionEdit.amount}
//                         onChange={handleEditChange}
//                         placeholder="Amount"
//                         className="px-2 py-1 border rounded ml-2"
//                     />
//                     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded ml-2">Update</button>
//                 </form>
//             )}
//         </div>

//         </>
//     )
// }

// export default TransactionsList



import { useEffect, useState, location } from "react"
import apiService from "../services/apiService"
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function TransactionsList() {

    const [transactionsInfo, setTransactionsInfo] = useState([]);
    const [transactionEdit, setTransactionEdit] = useState({ id: null, description: "", amount: "" });
   
    useEffect(function(){
        (async function() {

            const user_id = localStorage.getItem("user_id");
            const result = await apiService.fetchData(`transactions/${user_id}`, "GET");
            setTransactionsInfo(result.transactions); 

        })();
    },[]);

    async function updateTransaction(event) {
        event.preventDefault();

        const { id, description, amount } = transactionEdit;
        const body = { description, amount };

        const result = await apiService.fetchData(`transactions/${id}`, "PUT", body);
        if (result.fail) {
            console.log("Error on updated");
        } else {
            window.location.reload();
        }
    }


    async function deleteTransaction(id) {
        try {
            const result = await apiService.fetchData(`transactions/${id}`, "DELETE");
            if (result.deleted) {
                window.location.reload();
            } else {
                console.log("Error deleting transaction");
            }
        } catch (error) {
            console.error("Error deleting transaction:", error);
            window.location.reload();
        }
    }


    function handleEditChange(event) {
        const { name, value } = event.target;
        setTransactionEdit(prev => ({ ...prev, [name]: value }));
    }

    return(
        <>        
        <div className="py-10 px-2 flex justify-center flex-col items-center">
            <table className="max-w-xl bg-white shadow rounded-lg overflow-hidden text-center">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4">Amount</th>
                        <th className="py-2 px-4">Description</th>
                        <th className="py-2 px-4">Created At</th>
                        <th className="py-2 px-4">Edit</th>
                        <th className="py-2 px-4">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsInfo.map((transaction, index) =>
                        <tr key={index}>
                            <td className="py-2 px-2">{transaction.amount}</td>
                            <td className="py-2 px-2">{transaction.description}</td>
                            <td className="py-2 px-2">{transaction.created_at.substring(0, 10)}</td>
                            <td>
                                <button 
                                className="p-2 m-1  bg-blue-500  hover:bg-blue-300 text-white rounded"
                                onClick={() => setTransactionEdit({ id: transaction.id, description: transaction.description, amount: transaction.amount })}
                                ><FaPen/></button>
                            </td>
                            <td>
                                <button
                                className="p-2 m-1  bg-red-500  hover:bg-blue-300 text-white rounded"
                                onClick={async () => await deleteTransaction(transaction.id)}>
                                <FaTrash/></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {transactionEdit.id && (
                <form onSubmit={updateTransaction} className="mt-4">
                    <input
                        type="number"
                        name="amount"
                        value={transactionEdit.amount}
                        onChange={handleEditChange}
                        placeholder="Amount"
                        className="px-2 py-1 border rounded ml-2"
                        
                    />
                    <input
                        type="text"
                        name="description"
                        value={transactionEdit.description}
                        onChange={handleEditChange}
                        placeholder="Description"
                        className="px-2 py-1 border rounded"
                    />
                    <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-300 text-white rounded ml-2">Update</button>
                </form>
            )}
        </div>
        </>
    )
}

export default TransactionsList

