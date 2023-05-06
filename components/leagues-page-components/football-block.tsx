import React, { FC } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    isDesktop: boolean;
}

const FootballBlock = ({ isDesktop }: Props) => {
    return (
        <Stack sx={{
            width: "100%",
            minHeight: 754,
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: "172px",
            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)"
        }}>
            {isDesktop
                ?
                <Box component={"img"} sx={{ position: "absolute", right: 0, top: "4%", zIndex: 1 }} src={"images/bg/desktop/information/mossport-logo-left.png"} />
                :
                <Box component={"img"} sx={{
                    position: "absolute", left: 0, top: 0, bottom: 0, marginBottom: "auto",
                    marginTop: "auto", zIndex: 1
                }} src={"images/bg/mobile/information/mossport-logo.png"} />
            }
            <Box component={"img"} sx={{ position: "absolute", right: 0, top: 0, maxWidth: isDesktop ? "157px" : "110px", zIndex: 1 }} src={"images/bg/desktop/information/sun.png"} />
            <Container maxWidth={isDesktop ? "md" : "sm"} disableGutters sx={{ zIndex: 2, px: isDesktop ? "0px" : "40px" }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={isDesktop ? "64px" : "32px"}>
                    {isDesktop ? <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)" }}>Школьная спортивная лига по футболу</Typography>
                        : <Typography variant='header' sx={{ fontSize: "36px", lineHeight: "32px" }}>Школьная спортивная лига по футболу</Typography>}
                    <Typography variant={isDesktop ? 'body' : 'fieldHeader'} sx={{ fontSize: isDesktop ? "24px" : "20px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Финальные матчи школьной спортивной лиги по футболу среди лучших школьных спортивных клубов.

Система проведения: финальные матчи младшей, средней и старшей возрастной категорий`}
                    </Typography>
                    {isDesktop ? <Stack direction={"row"} spacing={"30px"}>
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/football/1.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/football/2.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/football/3.png"} />
                    </Stack> : <></>}
                </Stack>
            </Container>
            {isDesktop
                ?
                <></>
                :
                <Swiper slidesPerView={"auto"}
                    style={{ overflow: "visible", width: "100%", paddingLeft: "36px", marginTop: "40px" }}
                    spaceBetween={30}>
                    <SwiperSlide style={{ width: "267px", height: "178px" }}>
                        <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/football/1.png"} />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "267px", height: "178px" }}>
                        <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/football/2.png"} />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "267px", height: "178px" }}>
                        <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/leagues-page/football/3.png"} />
                    </SwiperSlide>
                </Swiper>
            }
        </Stack>
    )
}

export default FootballBlock