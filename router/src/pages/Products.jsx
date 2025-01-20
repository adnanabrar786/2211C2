// import React, { useState } from 'react'
// import Layout from '../layout/Layout'
// import { Link, useNavigate } from 'react-router'
// import ExampleComponent from '../components/ExampleComponen';

// const Products = () => {

//     const navigate = useNavigate();

//     const goToHomePage = () => {
//         navigate('/');
//     };

//     const [count, setcount] = useState(0)

//     return (
//         <>
//             {/* <h4>This is Products Page</h4>
//             <Link to="/">Go To Home</Link> */}
//             <br />
//             <button onClick={goToHomePage}>Go to Home</button>
//             <button onClick={() => {
//                 navigate(`/products/${count}`)
//             }}>
//                 Go to Single Products
//             </button>
//             <ExampleComponent/>
//         </>
//     )
// }

// export default Products


// import React from 'react';
// import { Link } from 'react-router';

// const ProductsList = () => {

//     const products = [
//         { id: 1, name: "Product 1", description: "This is Product 1", price: "$10" },
//         { id: 2, name: "Product 2", description: "This is Product 2", price: "$20" },
//         { id: 3, name: "Product 3", description: "This is Product 3", price: "$30" },
//     ];
//     return (
//         <div>
//             <h1>Products List</h1>
//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>
//                         <Link to={`/products/${product.id}`}>{product.name}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductsList;


import React from 'react';
import { Link } from 'react-router';

const ProductsList = () => {
    const products = [
        { id: 1, name: "Product 1", description: "This is Product 1", price: "$10" },
        { id: 2, name: "Product 2", description: "This is Product 2", price: "$20" },
        { id: 3, name: "Product 3", description: "This is Product 3", price: "$30" },
    ];

    return (
        <div>
            <h1>Products List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}/adnan`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;