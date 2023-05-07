import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import MainPageForm from '../forms/main-page-form'
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery';

const PreviewRegister = () => {
    const { isDesktop } = useGlobalMediaQuery();

    return isDesktop ? (
        <Box height={900} sx={{
            width: "100%",
            position: "relative", background: "linear-gradient(90.35deg, #FFD324 -71.13%, #FF9A08 39.11%, #FDAA4A 99.56%)"
        }}>
            <Box component={"img"} sx={{ position: "absolute", left: 0, top: 0 }} src={"images/bg/desktop/reg/reg-top.png"} />
            <Box component={"img"} sx={{ position: "absolute", left: 0, bottom: 0 }} src={"images/bg/desktop/reg/half-logo.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: 0, bottom: 0 }} src={"images/bg/desktop/reg/reg-bottom.png"} />

            <Stack sx={{
                width: "30%",
                position: "absolute",
                height: "100%",
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <Box component={"img"} src={"images/logos/form/present-logo.png"} />
            </Stack>
            <Stack spacing={"27px"} sx={{
                width: "812px", position: "absolute", right: 0,
                mr: "150px", pt: "96px",
                alignItems: "center"
            }}>
                <Box sx={{ maxWidth: "671px" }}>
                    <Typography variant='formHeader' sx={{ fontSize: "36px", whiteSpace: "pre-line" }}>
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
                    {`Наше мероприятие соберет вместе учеников со всех уголков города, которые смогут показать свои спортивные таланты в футболе, баскетболе 3х3, ГТО, посетить мастер- классы и специализированные секции.
                    А для гостей мы приготовили подароки от Московского спорта! Оставь свой адрес электронной почты и мы пригласим тебя в числе первых!`}
                </Typography>
                <MainPageForm isDesktop={isDesktop} />
            </Stack>
        </Box >
    ) : (
        <Box minHeight={1400} sx={{
            width: "100%",
        }}>
            <Stack spacing={"16px"} sx={{
                width: "100%",
                alignItems: "center",
                pt: "100px",
                px: "32px",
                pb: "154px",
                background: "linear-gradient(90.35deg, #FFD324 -71.13%, #FF9A08 39.11%, #FDAA4A 99.56%)",
                position: "relative"
            }}>
                <Box component={"img"} sx={{ position: "absolute", width: "46.8%", height: "20%", left: 0, top: 0, zIndex: 1 }} src={"images/bg/mobile/reg/reg-top.png"} />
                <Box component={"img"} sx={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }} src={"images/bg/mobile/reg/reg-bottom.png"} />

                <Box sx={{ textAlign: "right" }}>
                    <Typography variant='formHeader' sx={{ fontSize: "32px", lineHeight: "60px", whiteSpace: "pre-line" }}>
                        {`19 МАЯ
                    ШКОЛЬНЫЙ ПРАЗДНИК 
                    СПОРТА`}
                    </Typography>
                </Box>

                <Typography variant='body' sx={{
                    fontSize: "24px",
                    color: "#30303E",
                    lineHeight: "32px",
                    whiteSpace: "pre-line",
                    textAlign: "justify",
                }}>
                    {`Наше мероприятие соберет вместе учеников со всех уголков города, которые смогут показать свои спортивные таланты в футболе, баскетболе 3х3, ГТО, посетить мастер- классы и специализированные секции.
                    А для гостей мы приготовили подароки от Московского спорта! Оставь свой адрес электронной почты и мы пригласим тебя в числе первых!`}
                </Typography>

                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Box component={"img"} src={"/images/logos/form/present-logo.png"} />
                </Stack>

                <MainPageForm isDesktop={isDesktop} />
            </Stack>
        </Box >
    )
}

export default PreviewRegister