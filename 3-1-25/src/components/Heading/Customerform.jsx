import React, { useState } from 'react'

const Customerform = () => {

    const [formData, setformData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setformData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        console.log('Form submitted with data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='firstName' onChange={handleChange} value={formData.firstName} />
            <input type="text" name='lastName' onChange={handleChange} value={formData.lastName} />
            <input type="email" name='email' onChange={handleChange} value={formData.email} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Customerform