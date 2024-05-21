import NavegationBar from "../components/NavigationBar";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransactions";
// import MyWalletChart from "../components/MyWalletChart";
import TransactionsList from "../components/TransactionsList";


function HomeView() {
    return (
        <>
        <div className="bg-slate-200 h-screen">
            <NavegationBar/>
        <div className="flex justify-center items-center gap-1 px-2">
            <Balance/>
            <AddTransactions/>
        </div>    
            <TransactionsList/>
            {/* <MyWalletChart/>  */}
        </div>
            
        </>
    )
}

export default HomeView