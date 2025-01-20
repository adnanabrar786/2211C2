import React, { useEffect, useState } from 'react'

const Practiceuseeffect = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect run...");
        return () => {
            console.log("clean up useEffect...");
        }
    }, [count])

    const [data, setData] = useState(null);
    // Fetch data on component mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            // .then(response => console.log(response.json()))
            .then(data => setData(data)); // Cleanup when component unmount return () => {
        console.log('Cleanup on unmount')
    }, []); // Empty dependency array → Runs only once

      console.log(data);

    return (
        <div>Practiceuseeffect
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>counter</button>
            {data ? 'Data Loaded' : 'Loading...'}
        </div>
    )
}

export default Practiceuseeffect