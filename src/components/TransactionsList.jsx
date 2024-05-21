import { useEffect, useState } from "react"
import apiService from "../services/apiService"

function TransactionsList() {

    const [transactionsInfo, setTransactionsInfo] = useState([]);

    useEffect(function(){
        (async function() {

            const user_id = localStorage.getItem("user_id");
            const result = await apiService.fetchData(`transactions/${user_id}`, "GET");

            console.log(result);
            setTransactionsInfo(result.transactions);
        })();
    },[]);
 
    return(
        <>        
        <div className="py-10 px-2 flex justify-center flex-col items-center">

            <table className="max-w-xl bg-white shadow rounded-lg overflow-hidden text-center">
            <thead className="bg-gray-200">
                <tr>
                    <th className="py-2 px-4">Amount</th>
                    <th className="py-2 px-4">Description</th>
                    <th className="py-2 px-4">Created At</th>
                </tr>
            </thead>

            
            <tbody>
                {transactionsInfo.map((transaction, index) =>
                    <tr key={index}>
                        <td className="py-2 px-2">{transaction.amount}</td>
                        <td className="py-2 px-2">{transaction.description}</td>
                        <td className="py-2 px-2">{(transaction.created_at).substring(0,10)}</td>
                    </tr>
                    )}
            </tbody>

            </table>
        </div>

        </>
    )
}

export default TransactionsList
