import React from "react";
import Snack from "./Snack";
import App from "./App";
import { BrowserRouter, Route, Link } from "react-router-dom";


const VendingMachine = () => {

    return (
        <>
            <h1>vending machine</h1>
            <p>View <Link exact to="/chips">chips</Link></p>
            <p>View <Link exact to="/candy">candy</Link></p>
            <p>View <Link exact to="/soda">soda</Link></p>
        </>
    )
}

export default VendingMachine;