import NavegationBar from "../components/NavigationBar";
import Balance from "../components/Balance";
import TransactionsHomeView from "../components/TransactionsHomeView";
import MyWalletChart from "../components/MyWalletChart";



function HomeView() {
    return (
        <>
        <NavegationBar/>
        <div className="homeViewBalance">
            <Balance/>
        </div>
        <div className="homeViewTransactionAndChart">
            <TransactionsHomeView/>
            <MyWalletChart/>  
        </div>
        
        </>
    )
}

export default HomeView