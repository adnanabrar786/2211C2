import React from 'react'

const Clicktwo = () => {

    const handleButtonClick = (event) => {
        event.stopPropagation(); // Stops the event
        console.log("Button Clicked");
    };

    return (
        <div
            style={{
                backgroundColor: "aqua",
                width: "300px"
            }}
            onClick={() => console.log("Parent Div Clicked")}
        >
            <button onClick={handleButtonClick}>
                Click Me
            </button>
        </div>

    )
}

export default Clicktwo
