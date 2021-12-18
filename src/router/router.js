import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import Dashboard from "../components/pages/dashboard";
import Protected from "./Protected";

function Router(){
    return(
        <div>
            <BrowserRouter >
                <Switch>
                    <Route path="/SignIn" component={SignIn}/>
                    <Route exact path="/" component={SignUp}/>
                   {/* <Route path="/Dashboard" component={Dashboard}/> */}
                   <Route path="/Dashboard">
                       <Protected component={Dashboard}/>
                   </Route>
 
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Router;