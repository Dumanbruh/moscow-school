import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import CustomBtn from '../ui/custom-btn'
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    isDesktop: boolean;
}

const SpringBlock = ({ isDesktop }: Props) => {
    return (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: isDesktop ? "87px" : "100px",
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
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={isDesktop ? "64px" : "32px"}>
                    <Typography variant='header' sx={{ fontSize: isDesktop ? "64px" : "36px", lineHeight: isDesktop ? "64px" : "36px", textShadow: isDesktop ? "0px 0px 40px rgba(0, 0, 0, 0.5)" : "none" }}>Весенний фестиваль ГТО</Typography>
                    <Typography variant={isDesktop ? 'body' : 'fieldHeader'} sx={{ fontSize: isDesktop ? "24px" : "20px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Приглашаем участников комплекса ГТО всех возрастных ступеней с 12.00 до 18.00 проверить свои возможности в испытаниях на скорость, силу, выносливость и гибкость.`}
                    </Typography>
                    <CustomBtn height='70px' bg='linear-gradient(90deg, #FFD324 0%, #FF8900 100%)'
                        onClick={() => { window.open('https://gbu-mosgorsport-moskomspo.timepad.ru/event/2407597/', '_blank')?.focus() }}
                        minWidth='309px'>
                        <Typography variant='footerHeader' sx={{ color: "#31313E", fontSize: "18px" }}>ЗАРЕГИСТРИРОВАТЬСЯ</Typography>
                    </CustomBtn>

                    {isDesktop ? <Stack direction={"row"} spacing={"30px"}>
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/gto-page/blue/1.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/gto-page/blue/2.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/gto-page/blue/3.png"} />
                    </Stack> : <></>}
                </Stack>
            </Container>
            {isDesktop ? <></> : <Swiper slidesPerView={"auto"}
                style={{ overflow: "visible", width: "100%", paddingLeft: "36px", marginTop: "110px" }}
                spaceBetween={30}>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/gto-page/blue/1.png"} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/gto-page/blue/2.png"} />
                </SwiperSlide>
                <SwiperSlide style={{ width: "267px", height: "178px" }}>
                    <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/gto-page/blue/3.png"} />
                </SwiperSlide>
            </Swiper>}
        </Stack>
    )
}

export default SpringBlock