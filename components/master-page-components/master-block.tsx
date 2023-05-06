import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import Card from '../ui/card'
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    isDesktop: boolean;
}

const MasterBlock = ({ isDesktop }: Props) => {
    return (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: isDesktop ? "95px" : "523px",
            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)"
        }}>
            {isDesktop ?
                <Box
                    component={"img"}
                    sx={{ position: "absolute", left: 0, top: "4%", zIndex: 1 }}
                    src={"images/bg/desktop/information/mossport-logo.png"}
                /> :
                <Box component={"img"}
                    sx={{
                        position: "absolute", left: 0, top: 0, bottom: 0, marginBottom: "auto",
                        marginTop: "auto", zIndex: 1
                    }}
                    src={"images/bg/mobile/information/mossport-logo.png"} />
            }
            <Box component={"img"} sx={{ position: "absolute", right: 0, maxWidth: isDesktop ? "157px" : "110px", top: 0, zIndex: 1 }} src={"images/bg/desktop/information/sun.png"} />
            <Container maxWidth={isDesktop ? "lg" : "sm"} disableGutters sx={{ zIndex: 2, px: isDesktop ? "0px" : "48px" }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"64px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)", whiteSpace: "pre-line", textAlign: "center" }}>
                        {`мастер-классы`}
                    </Typography>
                    <Swiper
                        slidesPerView={1}
                        style={{ overflow: "visible", width: "100%" }}
                        spaceBetween={48}
                    >
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                    </Swiper>
                </Stack>
            </Container>
        </Stack>
    )
}

export default MasterBlock