import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

interface CoverProps {
    isDesktop: boolean;
}


const Cover = ({ isDesktop }: CoverProps) => {
    return (
        <Box height={isDesktop ? 800 : 1200} sx={{
            backgroundImage: isDesktop ? "url(/images/bg/cover-bg.png)" : "url(/images/bg/mobile/cover-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            width: "100%",
        }}>
            <Stack sx={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} spacing={isDesktop ? "78px" : "160px"}>
                <Stack>
                    <Typography variant='cover' sx={{ fontSize: isDesktop ? "187px" : "96px", maxWidth: isDesktop ? "625px" : "344px" }}>ФЕСТИВАЛЬ</Typography>
                    <Typography variant='cover' sx={{ fontSize: isDesktop ? "107px" : "55px", maxWidth: isDesktop ? "625px" : "344px" }}>ШКОЛЬНОГО СПОРТА</Typography>
                </Stack>
                {isDesktop ? (
                    <Typography variant='cover' sx={{ fontSize: "46px", maxWidth: "625px", textAlign: "center", whiteSpace: "pre-line" }}>
                        {`ПОСВЯЩЁННЫЙ ПРАЗДНОВАНИЮ 
                    100-ЛЕТИЯ МОСКОВСКОГО СПОРТА`}
                    </Typography>) : (
                    <Typography variant='cover' sx={{ fontSize: "36px", maxWidth: "344px", textAlign: "center", whiteSpace: "pre-line" }}>
                        {`ПОСВЯЩЁННЫЙ 
                        ПРАЗДНОВАНИЮ 
                    100-ЛЕТИЯ МОСКОВСКОГО 
                    СПОРТА`}
                    </Typography>)}
            </Stack>
        </Box>
    )
}

export default Cover