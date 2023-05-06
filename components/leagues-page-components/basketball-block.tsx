import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


interface Props {
    isDesktop: boolean;
}

const BasketballBlock = ({ isDesktop }: Props) => {
    return (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: isDesktop ? "87px" : "64px",
            background: "linear-gradient(90deg, #008185 0%, #01D2CB 100%)"
        }}>
            {isDesktop ?
                <Box component={"img"} sx={{ position: "absolute", right: 0, top: "4%", zIndex: 1 }} src={"images/bg/desktop/blueblock/mossport-logo.png"} />
                :
                <Box component={"img"}
                    sx={{
                        position: "absolute", right: 0, top: 0, bottom: 0, marginBottom: "auto",
                        marginTop: "auto", zIndex: 1
                    }}
                    src={"images/bg/mobile/blueblock/mossport-logo.png"} />
            }
            <Box component={"img"} sx={{ position: "absolute", left: 0, top: 0, zIndex: 1, maxWidth: isDesktop ? "157px" : "105px", }} src={"images/bg/desktop/blueblock/sun.png"} />
            <Container maxWidth={isDesktop ? "md" : "sm"} disableGutters sx={{ zIndex: 2, px: isDesktop ? "0px" : "40px" }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"60px"}>
                    {isDesktop ?
                        <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)" }}>Школьная спортивная лига по баскетболу 3х3</Typography> :
                        <Typography variant='header' sx={{ fontSize: "36px", lineHeight: "32px", textAlign: "center", whiteSpace: "pre-line" }}>
                            {`Школьная спортивная лига 
                        по баскетболу 3х3`}
                        </Typography>}
                    <Typography variant={isDesktop ? 'body' : 'fieldHeader'} sx={{ fontSize: isDesktop ? "24px" : "20px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Финальный турнир школьной спортивной лиги по баскетболу 3х3 среди лучших школьных спортивных клубов.

Система проведения: групповой этап, плей-офф.

Групповой этап: 2 группы по 4 команды играют "каждый с каждым", 1 и 2 места выходят в 1/2 финала (плей-офф).

Плей-офф: 1/2 финала, финалы за 3-е и 1-е места.

Две возрастные категории юношей и девушек (по 8 команд – всего 32 команды).`}
                    </Typography>
                    {isDesktop ? <Stack direction={"row"} spacing={"30px"}>
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/blue/1.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/blue/2.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/blue/3.png"} />
                    </Stack> : <></>}
                </Stack>
            </Container>
            {isDesktop ? <></> : <Swiper slidesPerView={"auto"}
                style={{ overflow: "visible", width: "100%", paddingLeft: "36px", marginTop: "40px" }}
                spaceBetween={30}>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/blue/1.png"} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/blue/2.png"} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/blue/3.png"} />
                </SwiperSlide>
            </Swiper>}
        </Stack >
    )
}

export default BasketballBlock