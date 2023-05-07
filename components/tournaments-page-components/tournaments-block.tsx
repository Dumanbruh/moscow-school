import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import Card from '../ui/card'
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    isDesktop: boolean;
}

const TournamentsBlock = ({ isDesktop }: Props) => {

    const tournaments = [
        {
            name: "Тэг-регби",
            desc: `Фестиваль пройдет в двух возрастных 
            категориях смешанных команд юношей 
            и девушек: 7-9, 10-12 лет.
            Все игры проходят в группах, все команды 
            играют по правилам «Тэг-регби» согласно 
            расписанию.`,
            date: "19 МАЯ",
            img: "url(/images/tournaments-page/1.png)"
        },
        {
            name: "Настольный теннис",
            desc: `Турнир по настольному теннису среди 
            команд школьных спортивных 
            клубов Москвы
            в 2-х возрастных категориях.
            Возрастные категории: 9-12 лет, 13-15 лет.
            Состав команды: 2 юноши + 1 девушка.`,
            date: "19 МАЯ",
            img: "url(/images/tournaments-page/2.png)"
        },
        {
            name: "Фитнес-аэробика",
            desc: `Фестиваль по фитнес-аэробике 
            в дисциплинах: «Аэробика», «Аэробика 
            5 человек», «Степ-аэробика», «Хип-хоп», 
            «Хип-хоп, большая группа».
            Возрастные категории: «Аэробика» 
            8-10 лет, 11-13 лет, 14-16 лет; «Хип-хоп» 
            8-13 лет, 12-17 лет.`,
            date: "19 МАЯ",
            img: "url(/images/tournaments-page/3.png)"
        },
        {
            name: "Футбол",
            desc: `Соревнования по футболу 4×4 среди 
            команд участников проекта «Футбол 
            в школе». Групповой этап, плей-офф.
            Возрастные категории: мальчики и девочки 7-9 лет.
            Состав команды — 4 игрока (смешанные 
            команды мальчиков и девочек).`,
            date: "19 МАЯ",
            img: "url(/images/tournaments-page/4.png)"
        },
    ]


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
            <Container maxWidth={isDesktop ? "lg" : "sm"} disableGutters sx={{ zIndex: 2 }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"60px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", }}>турниры</Typography>
                    <Swiper
                        slidesPerView={"auto"}
                        style={{ overflow: "visible", width: "100%" }}
                        spaceBetween={isDesktop ? 48 : 12}
                    >
                        {tournaments.map((tournament, i) => (
                            <SwiperSlide key={i} style={{ width: isDesktop ? "1100px" : "300px" }}>
                                <Card
                                    isDesktop={isDesktop}
                                    name={tournament.name}
                                    desc={tournament.desc}
                                    img={tournament.img}
                                    date={tournament.date}
                                    type='tournament'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Stack>
            </Container>
        </Stack>
    )
}

export default TournamentsBlock