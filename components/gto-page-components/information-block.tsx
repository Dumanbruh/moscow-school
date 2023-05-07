import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import CustomBtn from '../ui/custom-btn'
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    isDesktop: boolean;
}

const InformationBlock = ({ isDesktop }: Props) => {
    return (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: isDesktop ? "87px" : "74px",
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
            <Container maxWidth={isDesktop ? "md" : "sm"} disableGutters sx={{ zIndex: 2, px: isDesktop ? "0px" : "40px" }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={isDesktop ? "64px" : "32px"}>
                    <Typography variant='header' sx={{ fontSize: isDesktop ? "64px" : "36px", lineHeight: isDesktop ? "64px" : "36px", textShadow: isDesktop ? "0px 0px 40px rgba(0, 0, 0, 0.5)" : "none", whiteSpace: "pre-line", textAlign: "center" }}>
                        {`Фестиваль ГТО
                        среди школьников`}
                    </Typography>

                    <Typography variant={isDesktop ? 'body' : 'fieldHeader'} sx={{ fontSize: isDesktop ? "24px" : "20px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Отбор сборной команды Москвы для участия в Фестивале ВФСК ГТО в МДЦ «Артек».

К участию приглашаются обучающиеся образовательных организаций юноши и девушки 12-13 лет (IV ступень) и 14-15 лет (V ступень), имеющие золотой знак отличия комплекса ГТО в соответствующих ступенях в личном кабинете участника АИС ГТО.`}
                    </Typography>
                    <CustomBtn height='70px' bg='linear-gradient(90deg, #FFD324 0%, #FF8900 100%)' onClick={() => { }} minWidth='309px'>
                        <Typography variant='footerHeader' sx={{ color: "#31313E", fontSize: "18px" }}>ЗАРЕГИСТРИРОВАТЬСЯ</Typography>
                    </CustomBtn>

                    {isDesktop ? (<Stack direction={"row"} spacing={"30px"}>
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/gto-page/info/1.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/gto-page/info/2.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/gto-page/info/3.png"} />
                    </Stack>) : (
                        <></>
                    )}
                </Stack>
            </Container>
            {isDesktop ? (<></>) : (
                <Swiper slidesPerView={"auto"}
                    style={{ overflow: "visible", width: "100%", paddingLeft: "36px", marginTop: "50px" }}
                    spaceBetween={30}>
                    <SwiperSlide style={{ width: "267px", height: "178px" }}>
                        <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/gto-page/info/1.png"} />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "267px", height: "178px" }}>
                        <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/gto-page/info/2.png"} />
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "267px", height: "178px" }}>
                        <Box component={"img"} sx={{ width: "100%", height: "100%" }} src={"images/gto-page/info/3.png"} />
                    </SwiperSlide>
                </Swiper>)}
        </Stack>
    )
}

export default InformationBlock