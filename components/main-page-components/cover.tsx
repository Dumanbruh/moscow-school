import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

interface CoverProps {
    isDesktop: boolean;
}


const Cover = ({ isDesktop }: CoverProps) => {
    return isDesktop ? (
        <Box height={800} sx={{
            backgroundImage: "url(/images/bg/cover-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            width: "100%",
        }}>
            <Stack sx={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} spacing={"78px"}>
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
    ) : (
        <Box height={"900px"} sx={{
            width: "100%",
        }}>
            <Stack sx={{
                width: "100%", height: "100%",
                position: "relative"
            }} direction={"row"}>
                <Box component={"img"} sx={{ position: "absolute", width: "100%", px: "10px", top: "5%", right: 0, left: 0, zIndex: 1 }} src={"images/bg/mobile/cover-center.png"} />
                <Box component={"img"} sx={{ position: "absolute", width: "50%", top: 0, right: 0, zIndex: 1 }} src={"images/bg/mobile/cover-mobile-top-left.png"} />
                <Stack
                    width={"50%"}
                    sx={{
                        height: "100%",
                        background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                        position: "relative"
                    }}>
                    <Box component={"img"} sx={{ position: "absolute", width: "100%", left: 0, bottom: 0, zIndex: 1 }} src={"images/bg/mobile/cover-mobile-left.png"} />
                </Stack>
                <Stack
                    width={"50%"}
                    sx={{
                        height: "100%",
                        background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)",
                        position: "relative"
                    }}>
                    <Box component={"img"} sx={{ position: "absolute", width: "100%", right: 0, bottom: 0, zIndex: 1 }} src={"images/bg/mobile/cover-mobile-right.png"} />
                </Stack>
                <Stack sx={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", position: "absolute", zIndex: 3 }} spacing={"78px"}>
                    <Stack>
                        <Typography variant='cover' sx={{ fontSize: "96px", maxWidth: "344px" }}>ФЕСТИВАЛЬ</Typography>
                        <Typography variant='cover' sx={{ fontSize: "55px", maxWidth: "344px" }}>ШКОЛЬНОГО СПОРТА</Typography>
                    </Stack>

                    <Typography variant='cover' sx={{ fontSize: "36px", maxWidth: "344px", textAlign: "center", whiteSpace: "pre-line" }}>
                        {`ПОСВЯЩЁННЫЙ 
                            ПРАЗДНОВАНИЮ 
                        100-ЛЕТИЯ МОСКОВСКОГО 
                        СПОРТА`}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Cover