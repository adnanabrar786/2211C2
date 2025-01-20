import React, { useState } from "react";

function ButtonToggle() {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
        console.log(isOn);
    };

    return (
        <div>
            <h1>
                <h3 style={{
                    color: isOn ? "blue" : "black"
                }} >
                    Store Open
                </h3>

                <h3 style={{
                    color: isOn ? "black" : "red"
                }}>
                    Store Close
                </h3>

            </h1>
            <button onClick={toggle}>
                Store Toggle Button
            </button>
        </div>
    );
}

export default ButtonToggle;
