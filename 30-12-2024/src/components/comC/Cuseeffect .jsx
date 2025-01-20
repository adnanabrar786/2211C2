
import React, { useEffect, useState } from 'react';

export default function Cuseeffect() {

    const userName = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 2,
            "id": 2,
            "title": "delectus",
            "completed": false
        },
        {
            "userId": 3,
            "id": 3,
            "title": "autem",
            "completed": false
        }]

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setData(data));
    }, []); // Empty dependency array → Runs only once

    console.log(data);

    return <div>
        {/* {data ? 'Data Loaded' : 'Loading...'} */}

        {data ? <>

            {
                data.map((item, index) => (
                    <div key={item.id}>
                        <div>
                            <h3>User Id: <span style={{ fontWeight: "lighter" }}>{item.id}</span> </h3>
                            <h3>Title: <span style={{ fontWeight: "lighter" }}> {item.title}</span></h3>
                        </div>

                    </div>
                ))
            }
        </> : 'Loading...'}

    </div>;
}


// import React, { useEffect, useState } from 'react'

// const Cuseeffect = () => {

//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         alert("hello componets")
//         return () => {
//             console.log("end!!!!!!!!!!!!!");
//         }
//     }, [count])

//     return (
//         <div>
//             Cuseeffect
//             <h4>{count}</h4>
//             <button onClick={() => setCount(count + 1)}>Count Button</button>
//         </div>
//     )
// }

// export default Cuseeffect



// import React, { useEffect, useState } from 'react'

// const Cuseeffect = () => {

//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         if (count === 2) {
//             alert("hello componets")
//         }
//     }, [count])

//     return (
//         <div>Cuseeffect
//             <h4>{count}</h4>
//             <button onClick={() => setCount(count + 1)}>Count Button</button>
//         </div>
//     )
// }

// export default Cuseeffect



// import React, { useEffect, useState } from 'react'

// const Cuseeffect = () => {

//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         console.log("hello components start");
//     }, [count])

//     return (
//         <div>Cuseeffect
//             <h4>{count}</h4>
//             <button onClick={() => setCount(count + 1)}>Count Button</button>
//         </div>
//     )
// }

// export default Cuseeffect




// import React, { useEffect } from 'react'

// const Cuseeffect = () => {

//     useEffect(() => {
//         console.log("hello components start");
//     }, [])


//     return (
//         <div>Cuseeffect</div>
//     )
// }

// export default Cuseeffect
