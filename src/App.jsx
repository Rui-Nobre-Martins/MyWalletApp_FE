import { Route } from "wouter"
import HomeView from "./views/HomeView"
import TransactionsView from "./views/TransactionsView"
import SettingsView from "./views/SettingsView"
import Register from "./components/Register"




function App() {


  return (
    <>
      <Route path="/">
        <HomeView/>
      </Route>
      <Route path="/transactions">
        <TransactionsView/>
      </Route>
      <Route path="/settings">
        <SettingsView/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
    </>
  )
}

export default App
