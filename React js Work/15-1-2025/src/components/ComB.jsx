import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Stack } from '@mui/material';


export default function ComB() {
    return (
        <>
            {/* <Grid container spacing={2}>
                <Grid  sx={{backgroundColor:"aqua"}} size={8}>
                    <Stack>size=8</Stack>
                </Grid>
                <Grid sx={{backgroundColor:"aqua"}} size={4}>
                    <Stack>size=4</Stack>
                </Grid>
                <Grid  sx={{backgroundColor:"aqua"}}size={4}>
                    <Stack>size=4</Stack>
                </Grid>
                <Grid sx={{backgroundColor:"aqua"}} size={8}>
                    <Stack>size=8</Stack>
                </Grid>
            </Grid> */}


            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 12 }}  >
                    <Stack sx={{backgroundColor:"aqua"}}>xs=6 md=8</Stack>
                </Grid>
                <Grid size={{ xs: 6, md: 12 }}>
                    <Stack sx={{backgroundColor:"aqua"}}>xs=6 md=4</Stack>
                </Grid>
                <Grid size={{ xs: 6, md: 12 }}>
                    <Stack sx={{backgroundColor:"aqua"}}>xs=6 md=4</Stack>
                </Grid>
                <Grid size={{ xs: 6, md: 12 }}>
                    <Stack sx={{backgroundColor:"aqua"}}>xs=6 md=8</Stack>
                </Grid>
            </Grid>
        </>
    );
}
