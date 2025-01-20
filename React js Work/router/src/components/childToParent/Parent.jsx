import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [parentData, setParentData] = useState('')

    const fetchChildData = (data) => {
        setParentData(data)
    }
    console.log(parentData);

    return (
        <div>
            <h1>Parent  to Child</h1>
            <Child setFetchChildData={fetchChildData} />
        </div>
    )
}

export default Parent