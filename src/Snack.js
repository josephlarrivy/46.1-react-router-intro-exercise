import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


const Snack = (props) => {
   
    return (
        <>
            <p>Snack: {props.item}</p>
        </>
    )
}

export default Snack;