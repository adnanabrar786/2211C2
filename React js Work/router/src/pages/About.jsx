import React from "react"
import { Link } from "react-router";
import Counter from "../components/Counter";
import Products from "./Products";
import Layout from "../layout/Layout";


function About() {
    return (
        <>
            <h1>About heading</h1>
            <button>
                <Link to="/contactus">Contact</Link >
                <Link to="/">Home</Link >
            </button>
            <Products/>
            {/* <Counter />
            <CompA /> */}
        </>

    )

}

export default About;