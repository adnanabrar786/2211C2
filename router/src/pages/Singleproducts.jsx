// import React from 'react'
// import { useParams } from 'react-router'

// const Singleproducts = () => {

//     const params = useParams()

//     console.log(params);

//     return (
//         <div>Singleproducts</div>
//     )
// }

// export default Singleproducts


import React from 'react';
import { useParams } from 'react-router';

const SingleProduct = () => {

    const products = [
        { id: 1, name: "Product 1", description: "This is Product 1", price: "$10" },
        { id: 2, name: "Product 2", description: "This is Product 2", price: "$20" },
        { id: 3, name: "Product 3", description: "This is Product 3", price: "$30" },
    ];


    const { id, user } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    console.log(user);

    if (!product) {
        return <h2>Product not found</h2>;
    }


    return (
        <div>
            {
                product ? <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>

                </> : null
            }
        </div>
    );
};

export default SingleProduct;