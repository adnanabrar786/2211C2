import React, { useState } from 'react'

const Conmouseriverleave = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    console.log(isHovered);
    return (
        <div className='App'>
            <div>
                <h1>onMouseEnter and onMouseLeave</h1>
                <br /><br />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: isHovered ? 'lightgreen' : 'lightblue',
                        textAlign: 'center',
                        lineHeight: '200px',
                    }}
                >
                    {isHovered ? 'Mouse is inside!' : 'Hover over me!'}
                </div>
            </div>
        </div>
    )
}
export default Conmouseriverleave
