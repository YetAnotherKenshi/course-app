import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Users from "./layouts/users";
import Main from "./layouts/main";
import Login from "./layouts/login";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" exact component={Users} />
            </Switch>
        </>
    );
}

export default App;
