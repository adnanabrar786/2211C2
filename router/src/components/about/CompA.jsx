import React from 'react'
import CompB from './CompB'
import Welcome from './Welcome';

const CompA = () => {

    let message = "This is my component D Practice";

    return (
        <div>
            <h1>Comp A</h1>

            <div>
                <CompB message={message} />
            </div>

            <div>
                <Welcome user="ali" />
                <Welcome />
            </div>
        </div>
    )
}

export default CompA