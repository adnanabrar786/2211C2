import React from "react";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import { Box, Button, Typography } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';

export default function ComA() {
    return (
        <Stack
        //   sx={{ display: "flex" , width:"300px" }}
        //   direction={{ md: "row", xs: "column" }}
        //   spacing={2}
        >
            {/* // <Stack sx={{display:"flex"}}  direction="row"> */}

            {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
            {/* <Typography
        sx={{
          color: "blue",
          fontSize: { sm: "20px", xs: "16px" },
          fontStyle: "normal",
          fontWeight: "500",
          maxWidth: "790px",
          minWidth: "100%",
          lineHeight: "200%",
        }}
      >
        description
      </Typography> */}

            <Stack sx={{ width: "300px" }} spacing={3} direction={{ lg: "row", xs: "column" }}>
          
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
            </Stack>
            <Box>this is box</Box>
            <Typography
                sx={{
                    color: "blue",
                    fontSize: { sm: "20px", xs: "16px" },
                    fontStyle: "normal",
                    fontWeight: "500",
                    maxWidth: "790px",
                    minWidth: "100%",
                    lineHeight: "200%",
                }}
            >
                description
            </Typography>

            <Typography variant="h1">
                h1. Heading
            </Typography>

            <Tooltip title="this is  Delete">
                {/* <IconButton> */}
                <DeleteIcon  />
                {/* </IconButton> */}
            </Tooltip>
            <CircularProgress />
        </Stack>
    );
}
