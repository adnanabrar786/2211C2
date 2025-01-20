import React, { useEffect, useState } from 'react';

export default function ExampleComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err.message));
    }, []);

    return (
        <div>
            {data ? <>

                {
                    data.map((item, index) => (
                        <div key={index}>
                            <div>
                                <h3>User Id: <span style={{ fontWeight: "lighter" }}>{item.id}</span> </h3>
                                <h3>Title: <span style={{ fontWeight: "lighter" }}> {item.title}</span></h3>
                            </div>

                        </div>
                    ))
                }
            </> : 'Loading...'}

        </div>
    );
}


// import React, { useEffect, useState } from 'react';

// export default function ExampleComponent() {
//     const [data, setData] = useState(null);
//     // Fetch data on component mount
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then(data => setData(data));
//         // Cleanup when component unmounts
//         return () => {
//             console.log('Cleanup on unmount');
//         };
//     }, []); // Empty dependency array → Runs only once

//     return <div>{data ? 'Data Loaded' : 'Loading...'}</div>;
// }
