import React from 'react'
import Child from './Child'

const Parent = () => {
    const message = "this is parent components pass data"

    const arr = ["ali", "ahmed", "zaid"]

    const arrTwo = [
        {
            name: "ali",
            age: 22
        },
        {
            name: "ahmed",
            age: 24
        },
        {
            name: "ziad",
            age: 19
        },
    ]

    return (
        <div>
            <h1>Parent Component</h1>
            <Child message={message} arr={arr} arrTwo={arrTwo} />
        </div>
    )
}

export default Parent