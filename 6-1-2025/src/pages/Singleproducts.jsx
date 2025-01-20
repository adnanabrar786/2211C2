import React from 'react';
import { useParams } from 'react-router';
import Products from './Products';
import { productData } from '../constant/constant';

const Singleproducts = () => {

  
    const { id } = useParams();
    const product = productData.find(p => p.id === parseInt(id));
    console.log(product);


    return (
        <div>
            {
                product ? <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>

                </> : <><h1>No Products Found</h1></>
            }
        </div>
    );
};

export default Singleproducts;

// import React from 'react'
// import { useParams } from 'react-router';

// const Singleproducts = () => {

//     const params = useParams()

//     console.log(params.id);

//     return (
//         <div>Singleproducts

//             <p>{params.id}</p>
            
//         </div>
//     )
// }

// export default Singleproducts


