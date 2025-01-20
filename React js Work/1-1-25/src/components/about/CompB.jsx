import React from 'react'
import ComC from './ComC'

const CompB = (props) => {
    return (
        <div>
            <h1>CompB</h1>

            <div>
                <ComC message={props.message} />
            </div>

        </div>
    )
}

export default CompB