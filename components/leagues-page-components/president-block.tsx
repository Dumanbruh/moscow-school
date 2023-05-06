import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';


interface Props {
    isDesktop: boolean;
}

const PresidentBlock = ({ isDesktop }: Props) => {
    return isDesktop ? (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: "87px",
            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)"
        }}>
            <Box component={"img"} sx={{ position: "absolute", left: 0, top: "10px", zIndex: 1 }} src={"images/leagues-page/president/mossport-logo.png"} />
            <Box component={"img"} sx={{ position: "absolute", left: 0, bottom: 0, zIndex: 1 }} src={"images/leagues-page/president/left-sun.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }} src={"images/leagues-page/president/right-sun.png"} />
            <Box component={"img"} sx={{ position: "absolute", left: "140px", top: "96px", zIndex: 1 }} src={"images/leagues-page/president/birds.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: "84px", bottom: "105px", zIndex: 1 }} src={"images/leagues-page/president/sparks.png"} />

            <Container maxWidth={"md"} disableGutters sx={{ zIndex: 2 }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"50px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)" }}>Президентские спортивные игры</Typography>
                    <Typography variant='body' sx={{ fontSize: "24px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Программа «Президентских спортивных игр» включает в себя обязательные и дополнительные виды спорта. Каждая команда девушек и юношей должна принять участие во всех обязательных видах программы, участие в дополнительных видах допускается по желанию.

В рамках Фестиваля пройдут финальные встречи среди команд юношей и девушек школьных спортивных клубов по виду программы «Баскетбол 3×3» в возрастной категории 13-14 лет.`}
                    </Typography>
                    <Stack direction={"row"} spacing={"30px"}>
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/president/1.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/president/2.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/president/3.png"} />
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    ) : (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: "240px",
            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)"
        }}>
            <Box component={"img"} sx={{
                position: "absolute", top: 0, bottom: 0, marginBottom: "auto",
                marginTop: "auto", right: 0, zIndex: 1
            }} src={"images/leagues-page/president/mossport-logo-mobile.png"} />
            <Box component={"img"} sx={{ position: "absolute", left: 0, bottom: 0, zIndex: 1 }} src={"images/leagues-page/president/left-sun.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }} src={"images/leagues-page/president/right-sun.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: "84px", bottom: "105px", zIndex: 1 }} src={"images/leagues-page/president/sparks.png"} />
            <Box component={"img"} sx={{ position: "absolute", left: "208px", bottom: "96px", zIndex: 1 }} src={"images/leagues-page/president/birds-mobile.png"} />

            <Container maxWidth={"sm"} disableGutters sx={{ zIndex: 2, px: "40px" }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"32px"}>
                    <Typography variant='header' sx={{ fontSize: "36px", lineHeight: "32px" }}>Президентские спортивные игры</Typography>
                    <Typography variant='fieldHeader' sx={{ fontSize: "20px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Программа «Президентских спортивных игр» включает в себя обязательные и дополнительные виды спорта. Каждая команда девушек и юношей должна принять участие во всех обязательных видах программы, участие в дополнительных видах допускается по желанию.

В рамках Фестиваля пройдут финальные встречи среди команд юношей и девушек школьных спортивных клубов по виду программы «Баскетбол 3×3» в возрастной категории 13-14 лет.`}
                    </Typography>
                </Stack>
            </Container>
            <Swiper slidesPerView={"auto"}
                style={{ overflow: "visible", width: "100%", paddingLeft: "36px", marginTop: "40px" }}
                spaceBetween={30}>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/president/1.png"} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/president/2.png"} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/president/3.png"} />
                </SwiperSlide>
            </Swiper>
        </Stack >
    )
}

export default PresidentBlock