import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../ui/card'
import { Navigation } from 'swiper';

interface Props {
    isDesktop: boolean;
}

const FestivalesBlock = ({ isDesktop }: Props) => {

    const festivales = [
        {
            name: "Финалы школьных спортивных лиг",
            desc: `Вас ждут финальные игры между 
            сильнейшими школьными командами 
            Москвы по футболу и баскетболу 3×3, 
            а также финалы Президентских 
            спортивных игр`,
            date: "19 МАЯ",
            img: "url(/images/main-page/1.png)",
            url: "/leagues"
        },
        {
            name: "'КОЖАНЫЙ МЯЧ' ФИНАЛЫ",
            desc: `В московском городском этапе 
            Всероссийских соревнований приняли 
            участие 57 команд, и решающие матчи 
            состоятся в рамках фестиваля.`,
            date: "19 МАЯ",
            img: "url(/images/main-page/2.png)",
            url: "/"
        },
        {
            name: "фестиваль ГТО",
            desc: `В программе фестиваля: выполнение 
            нормативов комплекса ГТО для всех 
            желающих, а также региональные этапы 
            Всероссийских фестивалей ГТО для 
            школьников и студентов ВУЗов.`,
            date: "19 МАЯ",
            img: "url(/images/main-page/3.png)",
            url: "/gto"
        },
        {
            name: "рогейн и лабиринт",
            desc: `Это вид спортивного ориентирования, 
            в котором участники сами решают, 
            по какому маршруту двигаться в пределах 
            предложенной карты, чтобы собрать 
            максимальное количество контрольных 
            пунктов.`,
            date: "19 МАЯ",
            img: "url(/images/main-page/4.png)",
            url: "/"
        },
        {
            name: "открытые турниры",
            desc: `Не только посмотреть, но и поучаствовать 
            в турнирах возможно на нашем фестивале:
            футбол, тэг-регби, волейбол, настольный 
            теннис и фитнес-аэробика.
            Переходи на страницу, выбирай любимый 
            вид спорта и участвуй!`,
            date: "19 МАЯ",
            img: "url(/images/main-page/5.png)",
            url: "/tournaments"
        },
        {
            name: "мастер-классы",
            desc: `Насколько хорошо ты знаком с такими 
            видами спорта, как гольф, роуп-скиппинг, 
            джампинг фитнес или русская лапта.
            Бесплатные мастер-классы позволят 
            открыть что-то новое для себя. Может быть 
            даже увлечение, кто знает?
            Записывайся и приходи — разберёмся 
            вместе!`,
            date: "19 МАЯ",
            img: "url(/images/main-page/6.png)",
            url: "/master"
        },
    ]

    return (
        <Stack sx={{
            width: "100%",
            minHeight: 884,
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: isDesktop ? "103px" : "160px",
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
            <Container maxWidth={isDesktop ? "lg" : "sm"} disableGutters sx={{ zIndex: 2 }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"60px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textAlign: "center" }}>Активности фестиваля</Typography>
                    <Swiper
                        slidesPerView={"auto"}
                        modules={[Navigation]}
                        navigation={isDesktop ? true : false}
                        style={{ overflow: "visible", width: "100%" }}
                        spaceBetween={isDesktop ? 48 : 16}
                    >
                        {festivales.map((festivale, i) => (
                            <SwiperSlide key={i} style={{ width: isDesktop ? "1100px" : "320px" }}>
                                <Card
                                    isDesktop={isDesktop}
                                    name={festivale.name}
                                    desc={festivale.desc}
                                    img={festivale.img}
                                    date={festivale.date}
                                    type='main'
                                    url={festivale.url}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Stack>
            </Container>
        </Stack>
    )
}

export default FestivalesBlock