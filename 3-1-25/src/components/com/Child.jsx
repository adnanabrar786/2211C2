import React from 'react'

const Child = ({ message, arr, arrTwo }) => {
    console.log(arr);
    return (
        <div>
            <h1>Child Components</h1>
            {message}
            {/* <div>
                {
                    arr.map((item, index) => (
                        <div key={index}>
                            <h4>hello!!! {item}</h4>
                        </div>
                    ))
                }
            </div> */}
            <div>
                {
                    arrTwo.map((item, index) => (
                        <div key={index}>
                            <h4>name: {item.name}</h4>
                            <h5>age: {item.age}</h5>
                            <br/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Child