import React from 'react';
import { Link } from 'react-router';
import { productData } from '../constant/constant';
import Layout from '../layout/Layout';

const Products = () => {

// const productData = [
//     { id: 1, name: "Product 1", description: "This is Product 1", price: "$10" },
//     { id: 2, name: "Product 2", description: "This is Product 2", price: "$20" },
//     { id: 3, name: "Product 3", description: "This is Product 3", price: "$30" },
// ];
    return (
        <Layout>
            <h1>Products List</h1>
      
            <ul>
                {productData.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};


export default Products


// import React from 'react'
// import { Link, useNavigate } from 'react-router'

// const Products = () => {

//     const navigate = useNavigate();

//     // const goToHomePage = () => {
//     //     navigate("/")
//     // };

//     const goToSingleProduct = () => {
//         navigate(`/products/${55}`)
//     };

//     return (
//         <div>
//             <h4>This is Products Page</h4>
//             {/* <Link to="/">Go To Home</Link> */}
//             <br />
//             <Link to={`/products/${55}`}>Go To Single Products</Link>
//             {/* <Link to={`/products/${1}/${username}`}>Go To Single Products</Link> */}
//             <br />
//             {/* <button onClick={goToHomePage}>Go to Home</button> */}
//             <br />
//             <button onClick={goToSingleProduct}>Go to Single Products</button>
//         </div>
//     )
// }

// export default Products



