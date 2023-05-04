import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

interface CoverProps {
    isDesktop: boolean;
}


const Cover = ({ isDesktop }: CoverProps) => {

    const isMobile = useMediaQuery('(min-width:600px)')

    return isDesktop ? (
        <Stack>
            <Stack height={120} direction={"row"} sx={{
                width: "100%", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", zIndex: 3
            }}>
                <Stack width={"50%"}
                    direction={"row"}
                    spacing={"16px"}
                    sx={{
                        height: "100%",
                        background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/complex-logo.svg"
                        onClick={() => { window.open('https://www.mos.ru/donm/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "34px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/department-logo.svg"
                        onClick={() => { window.open('https://www.mos.ru/moskomsport/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "34px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/mossport-logo.svg"
                        onClick={() => { window.open('https://moscow.sport', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "34px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/moscow-educ-logo.svg"
                        onClick={() => { window.open('https://shkolamoskva.ru/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "34px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/100-years-logo.svg"
                        onClick={() => { window.open('https://100.moscow.sport', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "34px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/patriot-logo.svg"
                        onClick={() => { window.open('https://patriotsport.moscow/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "34px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/moskvich-logo.svg"
                        onClick={() => { window.open('https://moskvich.mossport.ru/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "34px"
                        }}
                    />
                </Stack>
                <Stack width={"50%"} sx={{
                    height: "100%",
                    background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)",
                }}>

                </Stack>
            </Stack>
            <Box height={800} sx={{
                width: "100%",
            }}>
                <Stack sx={{
                    width: "100%", height: "100%",
                    position: "relative"
                }} direction={"row"}>

                    <Stack sx={{
                        width: "100%",
                        position: "absolute",
                        height: "100%",
                        zIndex: 1,
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <Box component={"img"} src={"images/bg/desktop/cover/Logo.svg"} />
                    </Stack>
                    <Stack sx={{
                        width: "100%", height: "100%", justifyContent: "center", alignItems: "center", position: "absolute", zIndex: 3,
                    }} spacing={"78px"}>
                        <Stack>
                            <Typography variant='cover' sx={{ fontSize: "187px", maxWidth: "625px" }}>ФЕСТИВАЛЬ</Typography>
                            <Typography variant='cover' sx={{ fontSize: "107px", maxWidth: "625px" }}>ШКОЛЬНОГО СПОРТА</Typography>
                        </Stack>

                        <Typography variant='cover' sx={{ fontSize: "46px", maxWidth: "625px", textAlign: "center", whiteSpace: "pre-line" }}>
                            {`ПОСВЯЩЁННЫЙ ПРАЗДНОВАНИЮ 
                    100-ЛЕТИЯ МОСКОВСКОГО СПОРТА`}
                        </Typography>
                    </Stack>
                    <Stack
                        width={"50%"}
                        sx={{
                            height: "100%",
                            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                            position: "relative"
                        }}>
                        <Box
                            sx={{
                                position: "absolute", height: "100%", left: 0, bottom: "25%", zIndex: 1, ml: "150px", maxHeight: "488px"
                            }}
                            component={"img"}
                            src={"images/bg/desktop/cover/Details.png"}
                        />
                        <Box component={"img"} sx={{ position: "absolute", height: "100%", left: 0, zIndex: 2 }} src={"images/bg/desktop/cover/LeftGirl.png"} />
                    </Stack>
                    <Stack
                        width={"50%"}
                        sx={{
                            height: "100%",
                            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)",
                            position: "relative"
                        }}>
                        <Box component={"img"} sx={{ position: "absolute", height: "100%", right: 0, zIndex: 1 }} src={"images/bg/desktop/cover/RightBoy.png"} />
                    </Stack>
                </Stack>
            </Box>
        </Stack>

    ) : (
        <Stack>
            <Stack height={96} direction={"row"} sx={{
                width: "100%", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", zIndex: 3
            }}>
                <Stack width={"100%"}
                    direction={"row"}
                    spacing={1}
                    sx={{
                        height: "100%",
                        background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        px: "18px"
                    }}>
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/complex-logo.svg"
                        onClick={() => { window.open('https://www.mos.ru/donm/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "30px",
                            width: "15%"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/department-logo.svg"
                        onClick={() => { window.open('https://www.mos.ru/moskomsport/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "30px",
                            width: "15%"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/mossport-logo.svg"
                        onClick={() => { window.open('https://moscow.sport', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "30px",
                            width: "15%"

                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/moscow-educ-logo.svg"
                        onClick={() => { window.open('https://shkolamoskva.ru/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "30px",
                            width: "15%"

                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/100-years-logo.svg"
                        onClick={() => { window.open('https://100.moscow.sport', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "30px",
                            width: "15%"

                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/patriot-logo.svg"
                        onClick={() => { window.open('https://patriotsport.moscow/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "30px",
                            width: "15%"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/navbar/moskvich-logo.svg"
                        onClick={() => { window.open('https://moskvich.mossport.ru/', '_blank')?.focus() }}
                        sx={{
                            maxHeight: "30px",
                            width: "15%"
                        }}
                    />
                </Stack>
            </Stack>
            <Box height={"900px"} sx={{
                width: "100%",
            }}>
                <Stack sx={{
                    width: "100%", height: "100%",
                    position: "relative"
                }} direction={"row"}>
                    <Stack sx={{
                        width: "100%",
                        position: "absolute",
                        height: "100%",
                        zIndex: 2,
                        alignItems: 'center',
                        pt: "20%"
                    }}>
                        <Box component={"img"} maxWidth={"60%"} src={"images/bg/desktop/cover/Logo.svg"} />
                    </Stack>
                    <Stack sx={{
                        width: "100%",
                        position: "absolute",
                        height: "100%",
                        left: 0,
                        right: 0,
                        zIndex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box
                            component={"img"}
                            sx={{
                                height: "50%", maxHeight: "388px"
                            }}
                            src={"images/bg/desktop/cover/Details.png"}
                        />
                    </Stack>

                    <Stack
                        width={"50%"}
                        sx={{
                            height: "100%",
                            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                            position: "relative"
                        }}>
                        <Box component={"img"} sx={{ position: "absolute", height: "100%", left: isMobile ? 0 : "-45%", bottom: "-59.1%", zIndex: 2 }} src={"images/bg/mobile/cover/LeftGirl.png"} />
                        <Box component={"img"} sx={{ position: "absolute", left: 0, top: 0, zIndex: 2 }} src={"images/bg/mobile/cover/TopleftClouds.png"} />
                    </Stack>
                    <Stack
                        width={"50%"}
                        sx={{
                            height: "100%",
                            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)",
                            position: "relative"
                        }}>
                        <Box component={"img"} sx={{ position: "absolute", height: "50%", right: isMobile ? 0 : "-45%", bottom: 0, zIndex: 12 }} src={"images/bg/mobile/cover/RightBoy.png"} />
                        <Box component={"img"} sx={{ position: "absolute", right: 0, top: 0, zIndex: 2 }} src={"images/bg/mobile/cover/TopRightClouds.png"} />
                    </Stack>
                    <Stack sx={{
                        width: "100%", pt: "25%",
                        justifyContent: "center", alignItems: "center", position: "absolute", zIndex: 3
                    }} spacing={"78px"}>
                        <Stack>
                            <Typography variant='cover' sx={{ fontSize: "96px", maxWidth: "344px" }}>ФЕСТИВАЛЬ</Typography>
                            <Typography variant='cover' sx={{ fontSize: "55px", maxWidth: "344px" }}>ШКОЛЬНОГО СПОРТА</Typography>
                        </Stack>

                        <Typography variant='cover' sx={{ fontSize: "36px", maxWidth: "344px", textAlign: "center", whiteSpace: "pre-line", }}>
                            {`ПОСВЯЩЁННЫЙ 
                            ПРАЗДНОВАНИЮ 
                        100-ЛЕТИЯ МОСКОВСКОГО 
                        СПОРТА`}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Stack>

    )
}

export default Cover