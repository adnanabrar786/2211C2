import React, { useState } from 'react'

const InputExample = () => {

    const [text, setText] = useState("");
    const [firstName, setFirstName] = useState("");

    const handleChange = (event) => {
        // console.log(event.target.value);
        setText(event.target.value)
        // console.log(event.target.value);
        // setText(event.target.value);
    };

    console.log(firstName);


    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="enter a"
            />
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="enter a first name"
            />
            <p>You typed: {text}</p>
        </div>

    )
}

export default InputExample