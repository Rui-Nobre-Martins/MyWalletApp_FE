import { useEffect, useState } from "react"
import apiService from "../services/apiService"

function Balance() {
    
    const [amount, setAmount] = useState({});
    
    useEffect(function() {
        (async function getAmount() {
         
        const user_id = localStorage.getItem("user_id");
        const result = await apiService.fetchData(`transactions/${user_id}`, "GET");

        setAmount(result);
        })();
     },[]);

    const negativeBalance = amount.totalBalance < 0 ? "text-red-500" : "";

    return(
        <>
            <div className="bg-white rounded-lg shadow p-9 flex flex-col text-center">
                <h1 className="text-2xl">My Balance</h1>
                <hr />
                <h2 className={`text-3xl ${negativeBalance}`}>{amount.totalBalance}€</h2>  
            </div>
        </>
    )
}

export default Balance