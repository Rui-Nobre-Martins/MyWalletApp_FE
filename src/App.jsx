import { Route, Switch } from "wouter"
import HomeView from "./views/HomeView"
import TransactionsView from "./views/TransactionsView"

import RegisterView from "./views/RegisterView"
import LoginView from "./views/LoginView"





function App() {


  return (
    <>
    <Switch>
      <Route path="/">
        <HomeView/>
      </Route>
      <Route path="/transactions">
        <TransactionsView/>
      </Route>
      <Route path="/register">
        <RegisterView/>
      </Route>
      <Route path="/login">
        <LoginView/>
      </Route>
    </Switch>
    </>
  )
}

export default App
