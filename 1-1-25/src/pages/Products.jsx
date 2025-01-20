import React from 'react'
import { Link, useNavigate } from 'react-router'

const Products = () => {

    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    };

    return (
        <div>
            <h4>This is Products Page</h4>
            <Link to="/">Go To Home</Link>
            <br />
            <Link to={`/products/${55}`}>Go To Single Products</Link>
            {/* <Link to={`/products/${1}/${username}`}>Go To Single Products</Link> */}
            <br />
            <button onClick={goToHomePage}>Go to Home</button>
        </div>
    )
}

export default Products
