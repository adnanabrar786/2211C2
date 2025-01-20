import React, { useState } from 'react'

const Child = ({ setFetchChildData }) => {

    const [data, setData] = useState("");

    function handleClick() {
        setFetchChildData(data)
    }

    return (
        <div>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={handleClick}>Send Data to Parent</button>
        </div>
    )
}

export default Child