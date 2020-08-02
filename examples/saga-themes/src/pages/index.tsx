import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

const RootPage = lazy(() => import("./root"));
const DetailsPage = lazy(() => import("./details"));

const Routing = () => (
    <Suspense fallback={<>Loading...</>}>
            <Switch>
                <Route exact path="/" component={RootPage} />
                <Route exact path="/details" component={DetailsPage} />
                <Redirect to="/" />
            </Switch>
    </Suspense>
)

// TODO: decompose
const Navbar = () => (
    <div className="navbar">
        <NavLink exact to="/">root</NavLink>
        <NavLink exact to="/details">details</NavLink>
    </div>
)

Routing.Navbar= Navbar;

export default Routing
