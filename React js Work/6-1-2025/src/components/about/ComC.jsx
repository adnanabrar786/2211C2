import React from 'react'
import ComD from './ComD'

const ComC = (props) => {
    return (
        <div>
            <h1>Comp C</h1>
            <div>
                <ComD message={props.message}/>
            </div>

        </div>
    )
}

export default ComC