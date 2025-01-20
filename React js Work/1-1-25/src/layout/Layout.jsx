import React from 'react'
import Footer from '../components/comA/Footer'
import Navbar from '../components/comA/Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout