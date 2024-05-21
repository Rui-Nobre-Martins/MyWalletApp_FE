import { useEffect, useState } from "react"
import apiService from "../services/apiService"

function Balance() {
    
    const [amount, setAmount] = useState({});
    useEffect(function() {
        (async function getAmount() {
         
        const user_id = localStorage.getItem("user_id");
        const result = await apiService.fetchData(`transactions/${user_id}`, "GET");
        
        console.log(result)
        setAmount(result);
        })();
     },[]);

    return(
        <>
            <div className="bg-white border-2 border-slate-300 rounded drop-shadow p-9 flex flex-col text-center">
                <h1 className="text-1xl">My Balance</h1>
                <hr />
                <h2 className="text-3xl">{amount.totalBalance}</h2>
  
            </div>
        </>
    )
}

export default Balance