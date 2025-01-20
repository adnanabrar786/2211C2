import React from "react"
import { Link } from "react-router";

function Contactus() {
    return (
        <>
            <h1>Contactus heading</h1>
            <Link  to="/about">ABOUT</Link >
            <Link to="/">Home</Link >
        </>
    )

}

export default Contactus;