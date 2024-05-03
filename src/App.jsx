import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";

function App() {


  return (
    <>
     MY PERSONAL WALLET APP

     <Switch>
        <Route path="/">
          <HomeView/>
        </Route>

     </Switch>
    </>
  )
}

export default App
