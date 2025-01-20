import { Stack } from '@mui/material'
import React from 'react'

const Customtext = ({text ,sx}) => {
    return (
        <Stack
            sx={{
                fontSize: "1rem",
                opacity: "1",
                color: "blue",
                ...sx
            }}
        >
            {text}
        </Stack>
    )
}

export default Customtext