import NavegationBar from "../components/NavigationBar";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
import MyWalletChart from "../components/MyWalletChart";
import TransactionsList from "../components/TransactionsList";


function HomeView() {
    return (
        <>
        <div className="bg-slate-200 h-screen flex flex-col items-center">
            <NavegationBar/>
            <div className="flex justify-center items-center gap-1 px-2">
                <Balance/>
                <AddTransactions/>
            </div>   
            <div className="gap-1 px-2">
                <TransactionsList/>
            </div>
             <div className="max-w-xl px-10 pb-1 bg-white shadow rounded-lg flex justify-center items-center">
                <MyWalletChart/> 
            </div> 
        </div>
            
        </>
    )
}

export default HomeView