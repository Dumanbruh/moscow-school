import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import Card from '../ui/card'
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    isDesktop: boolean;
}

const TournamentsBlock = ({ isDesktop }: Props) => {
    return (
        <Stack sx={{
            width: "100%",
            minHeight: 884,
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: isDesktop ? "87px" : "160px",
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
            <Container maxWidth={isDesktop ? "lg" : "sm"} disableGutters sx={{ zIndex: 2, px: isDesktop ? "0px" : "48px" }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"60px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", }}>турниры</Typography>
                    <Swiper
                        slidesPerView={1}
                        style={{ overflow: "visible", width: "100%" }}
                        spaceBetween={48}
                    >
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                        <SwiperSlide style={{ width: "400px" }}><Card isDesktop={isDesktop} /></SwiperSlide>
                    </Swiper>
                </Stack>
            </Container>

        </Stack>
    )
}

export default TournamentsBlock