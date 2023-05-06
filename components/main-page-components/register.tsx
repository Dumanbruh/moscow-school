import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import MainPageForm from '../forms/main-page-form'
import { ST } from 'next/dist/shared/lib/utils';
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery';
import CustomBtn from '../ui/custom-btn';




const RegisterBlock = () => {
    const { isDesktop } = useGlobalMediaQuery();

    return isDesktop ? (
        <Box height={500} sx={{
            width: "100%",
            position: "relative", background: "linear-gradient(90.35deg, #FFD324 -71.13%, #FF9A08 39.11%, #FDAA4A 99.56%)"
        }}>
            <Box component={"img"} sx={{ position: "absolute", left: 0, top: 0 }} src={"images/bg/desktop/reg/reg-top.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: 0, bottom: 0 }} src={"images/bg/desktop/reg/reg-bottom.png"} />
            <Container disableGutters sx={{ px: "40px", pt: "90px" }}>
                <Stack direction={"row"} sx={{ width: "100%", height: "100%" }} spacing={"60px"}>
                    <Box component={"img"} src={"images/logos/form/present-logo.png"} sx={{ pl: "110px", maxHeight: "248px" }} />

                    <Stack spacing={"23px"} sx={{
                        alignItems: "center"
                    }}>
                        <Box sx={{ maxWidth: "671px" }}>
                            <Typography variant='formHeader' sx={{ fontSize: "36px", lineHeight: "60px", whiteSpace: "pre-line" }}>
                                {`19 МАЯ
                    ШКОЛЬНЫЙ ПРАЗДНИК СПОРТА`}
                            </Typography>
                        </Box>

                        <Typography variant='body' sx={{
                            fontSize: "24px",
                            color: "#30303E",
                            lineHeight: "32px",
                            whiteSpace: "pre-line"
                        }}>
                            {`Приходи и получи подарок 
                    от Московского спорта`}
                        </Typography>
                        <Stack spacing={"15px"}>
                            <CustomBtn height='70px' bg='linear-gradient(266.01deg, #DE3042 -38.53%, #FD5F6F 111.85%)' onClick={() => { }} minWidth='309px'>
                                <Typography variant='footerHeader' sx={{ color: "white", fontSize: "18px" }}>ПОЛУЧИТЬ ПОДАРОК</Typography>
                            </CustomBtn>
                            <Typography variant='fieldHeader' sx={{ color: "#30303E", fontSize: "16px" }}>*количество подарков ограничено</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box >
    ) : (
        <Box minHeight={900} sx={{
            width: "100%",
            position: "relative",
            background: "linear-gradient(90.35deg, #FFD324 -71.13%, #FF9A08 39.11%, #FDAA4A 99.56%)"
        }}>
            <Box component={"img"} sx={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }} src={"images/bg/mobile/reg/reg-bottom.png"} />
            <Stack spacing={"16px"} sx={{
                width: "100%",
                heigth: "100%",
                alignItems: "center",
                pt: "118px",
                px: "60px",
                pb: "127px",
            }}>
                <Stack sx={{ textAlign: "right", width: "100%", alignItems: "flex-end" }}>
                    <Typography variant='formHeader' sx={{ fontSize: "32px", lineHeight: "38px", whiteSpace: "pre-line" }}>
                        {`19 МАЯ
                    ШКОЛЬНЫЙ ПРАЗДНИК 
                    СПОРТА`}
                    </Typography>
                </Stack>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Box component={"img"} src={"/images/logos/form/present-logo.png"} />
                </Stack>
                <Typography variant='body' sx={{
                    fontSize: "24px",
                    color: "#30303E",
                    lineHeight: "32px",
                    whiteSpace: "pre-line"
                }}>
                    {`Приходи и получи подарок 
                    от Московского спорта`}
                </Typography>
                <Stack spacing={"15px"}>
                    <CustomBtn height='70px' bg='linear-gradient(266.01deg, #DE3042 -38.53%, #FD5F6F 111.85%)' onClick={() => { }} minWidth='309px'>
                        <Typography variant='footerHeader' sx={{ color: "white", fontSize: "18px" }}>ПОЛУЧИТЬ ПОДАРОК</Typography>
                    </CustomBtn>
                    <Typography variant='fieldHeader' sx={{ color: "#30303E", fontSize: "16px" }}>*количество подарков ограничено</Typography>
                </Stack>
            </Stack>
        </Box >
    )
}

export default RegisterBlock