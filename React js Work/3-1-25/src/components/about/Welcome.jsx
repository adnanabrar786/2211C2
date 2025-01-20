import React from 'react'

const Welcome = ({ user = "ahmed" }) => {
    return (
        <div>
            <h1>Welcome</h1>

            <div>
                {user}
            </div>
        </div>
    )
}

export default Welcome