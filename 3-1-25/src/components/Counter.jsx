import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount((prevCount) => prevCount + 1);
        setCount(count + 1);
        console.log('Incremented! Current count:', count + 1);
    };

    const decrement = () => {
        // setCount((prevCount) => prevCount - 1);
        setCount(count - 1);
        console.log('Decremented! Current count:', count - 1);
    };

    const incrementSetTimeOut = () => {
        setTimeout(() => {
            // setCount((prevCount) => prevCount + 1);
            setCount(count + 1);
        }, 6000);
        console.log('Incremented! Setime out Current count:', count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={incrementSetTimeOut}>Increment SetTimneOut</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;