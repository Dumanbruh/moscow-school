import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Cover = () => {
    return (
        <Box height={800} sx={{
            backgroundImage: "url(/images/bg/cover-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
        }}>
            <Stack sx={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                <Stack>
                    <Typography variant='cover' sx={{ fontSize: "187px", maxWidth: "625px" }}>ФЕСТИВАЛЬ</Typography>
                    <Typography variant='cover' sx={{ fontSize: "107px", maxWidth: "625px" }}>ШКОЛЬНОГО СПОРТА</Typography>
                </Stack>
                <Typography variant='cover' sx={{ fontSize: "46px", maxWidth: "625px", textAlign: "center", whiteSpace: "pre-line" }}>
                    {`ПОСВЯЩЁННЫЙ ПРАЗДНОВАНИЮ 
                    100-ЛЕТИЯ МОСКОВСКОГО СПОРТА`}
                </Typography>
            </Stack>
        </Box>
    )
}

export default Cover