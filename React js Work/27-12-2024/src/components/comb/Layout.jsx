import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <h1>This is Layout</h1>
            <Footer />
            {children}
            <Navbar />
        </div>
    )
}

export default Layout