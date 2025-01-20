import React, { useState } from 'react'

const Togglebutton = () => {

    const [isOn, setIsOn] = useState(false);

    const storeOpen = () => {
        setIsOn(true);
    };

    const storeClose = () => {
        setIsOn(false);
    };

    return (
        <div>
            <h1>
              {isOn ? <h3>Store Open</h3> : <h3>Store Close</h3>}
            </h1>
            <button onClick={storeOpen}>
                Store Open Button
            </button>
            <button onClick={storeClose}>
                Store Close Button
            </button>
        </div>

    )
}

export default Togglebutton