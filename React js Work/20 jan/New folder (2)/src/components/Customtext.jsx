import { Stack } from '@mui/material'
import React from 'react'

const Customtext = ({ text }) => {
    return (
        <Stack
            sx={{
                fontSize: "1rem",
                color: "#667085",
                opacity: "1",
                color: "red"
            }}
        >
            {text}
        </Stack>
    )
}

export default Customtext