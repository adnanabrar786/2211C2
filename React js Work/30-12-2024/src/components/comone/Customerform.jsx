import React, { useState } from "react";

const Customerform = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        // console.log(event);
        event.preventDefault();
        console.log('first name:', firstName);
        console.log('last name:', lastName);
        console.log('email:', email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='firstName' onChange={(e) => setfirstName(e.target.value)} value={firstName} />
            <input type="text" name='lastName' onChange={(e) => setLastName(e.target.value)} value={lastName} />
            <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <button type="submit">Submit</button>
            {/* <button onClick={handleOnCLick}>Submit</button> */}
        </form>
    )
}
export default Customerform
