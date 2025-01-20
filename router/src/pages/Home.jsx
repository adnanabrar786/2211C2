import React, { useState } from 'react'
import { Link } from 'react-router'
import Practiceuseeffect from '../components/Practiceuseeffect';
import NestingWrapper from '../components/nestingelement/NestingWrapper';
import Parent from '../components/com/Parent';
import Layout from '../layout/Layout';
import Banner from '../layout/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    // State to track whether mouse is inside or outside
    const [isHovered, setIsHovered] = useState(false);
    const [showHide, setshowHide] = useState(false)

    const handleAlert = () => {
        alert("hello User")
    }


    // Event handler for mouse entering
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Event handler for mouse leaving
    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    const handleClick = (event) => {
        console.log(event); // Synthetic Event
        console.log(event.target); // Target element
    };


    return (
        <div className='App'>
            {/* <div>
                <h1>Home page</h1>
                <button onClick={handleAlert}>show alert</button>
                <br /><br />
                <Link to="/about">ABOUT</Link>
                <br /><br />
                <button>
                    <Link to="/contactus">Contact</Link >
                </button>
                <br /><br />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: isHovered ? 'lightgreen' : 'lightblue',
                        textAlign: 'center',
                        lineHeight: '200px',
                    }}
                >
                    {isHovered ? 'Mouse is inside!' : 'Hover over me!'}
                </div>
            </div>

            <button onClick={handleClick}>Click Me!</button> */}

            {/* <button onClick={() => setshowHide(true)}>show hide</button>

            {
                showHide ? <>none</> : <><Practiceuseeffect /></>
            } */}

            {/* <NestingWrapper />

            <div onTouchStart={(event) => console.log(event)}>
                on touch start
            </div> */}




            {/* <Parent /> */}
            <Layout>
                <Navbar />
                <Banner />
                <Footer />
            </Layout>
            <br />
            <br />
            <br />

        </div>
    )
}

export default Home