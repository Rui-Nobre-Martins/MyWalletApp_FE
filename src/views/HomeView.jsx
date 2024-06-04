import NavegationBar from "../components/NavigationBar";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import MyWalletChart from "../components/MyWalletChart";
import TransactionsList from "../components/TransactionsList";


function HomeView() {
    return (
        <>
        <div className="bg-zinc-100 f-screen ">
            <div className="flex flex-col items-center">    
                <NavegationBar/>
                <div className="flex justify-center items-center gap-1 px-2">
                    <Balance/>
                    <AddTransactions/>
                </div>   
                <div className="gap-1 px-2">
                    <TransactionsList/>
                </div>
                <div className="max-w-xl px-5 mb-4 bg-white shadow rounded-lg">
                    <MyWalletChart/> 
                </div>
            </div>
        </div>
            
        
            
        </>
    )
}

export default HomeView