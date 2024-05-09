import { Route } from "wouter"
import HomeView from "./views/HomeView"




function App() {


  return (
    <>
      MY PERSONAL WALLET APP
      
      <Route path="/">
        <HomeView/>
      </Route>
      {/* <Route path="/transactions">
        <TransactionsView/>
      </Route>
      <Route path="/settings">
        <SettingsView/>
      </Route> */}
    </>
  )
}

export default App
