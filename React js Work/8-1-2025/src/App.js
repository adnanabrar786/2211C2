// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };


  const products = [
    { id: 1, name: "Product A", price: 100, description: "This is Product A." },
    { id: 2, name: "Product B", price: 200, description: "This is Product B." },
  ];


  return (
    <div>
      <h1>Simple Add to Cart</h1>

      <div>
        <h2>Products:</h2>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Cart Items:</h2>
        {
          cart.map((item, index) => (
            <p key={index}>
              {item.name} - ${item.price}
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default App;
