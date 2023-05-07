import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import Card from '../ui/card'
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    isDesktop: boolean;
}

const MasterBlock = ({ isDesktop }: Props) => {

    const masters = [
        {
            name: "Гольф в формате SNAG",
            desc: `Мастер-классы для всех желающих, без 
            ограничений по возрасту.
            Эта игра имеет собственные упрощенные 
            правила и терминологию, что делает 
            процесс обучения и игры особенно 
            увлекательным.`,
            date: "19 МАЯ",
            img: "url(/images/master-page/1.png)"
        },
        {
            name: "Роуп – скиппинг",
            desc: `Тренировки с обычной скакалкой. Это 
            не просто детская забава, а эффективное 
            упражнение, входящее в большинство 
            тренировочных комплексов.
            Мастер-классы для всех желающих без 
            ограничений по возрасту.`,
            date: "19 МАЯ",
            img: "url(/images/master-page/2.png)"
        },
        {
            name: "Джампинг фитнес",
            desc: `Мастер-классы для всех желающих, без 
            ограничений по возрасту в направлениях: 
            «джампинг комплекс», «джампинг дэнс», 
            «джампинг паур», «ждампинг 
            функционал» и «джампинг рехаб» для 
            детей с ОВЗ.`,
            date: "19 МАЯ",
            img: "url(/images/master-page/3.png)"
        },
        {
            name: "Прыгай выше головы",
            desc: `Спортивные прыжки через резинку 
            «Прыгай выше головы».
            Все участники фестиваля смогут 
            познакомиться с игрой, попрыгать 
            и посостязаться в импровизированных 
            личных и командных батлах.`,
            date: "19 МАЯ",
            img: "url(/images/master-page/4.png)"
        },
        {
            name: "Русская лапта",
            desc: `Вас ждёт:
               • Знакомство с инвентарём и правилами 
            лапты.
               • Отработка подброса мяча подающим 
            игроком. Отработка трёх видов ударов, 
            используемых в лапте. Разделение 
            участников на две команды. Игра 20 мин.
               • После игры инструктор будет готов 
            ответить на интересующие вопросы.`,
            date: "19 МАЯ",
            img: "url(/images/master-page/5.png)"
        },
        {
            name: "Городки",
            desc: `Мастер-класс по игре в городки
            Знакомство с видом спорта городки. 
            Знакомство с инвентарём и правилами 
            игры городки. Любой желающий сможет 
            попробовать свои силы в игре.`,
            date: "19 МАЯ",
            img: "url(/images/master-page/6.png)"
        },
        {
            name: "Настольные спортивные игры",
            desc: `Все участники смогут познакомиться с 
            такими играми, как Джакколо, Керлинг, 
            Корнхол и другие.`,
            date: "19 МАЯ",
            img: "url(/images/master-page/7.png)"
        },
    ]

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
                        {masters.map((master, i) => (
                            <SwiperSlide key={i} style={{ width: "400px" }}>
                                <Card
                                    type='master'
                                    isDesktop={isDesktop}
                                    name={master.name}
                                    img={master.img}
                                    desc={master.desc}
                                    date={master.date}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Stack>
            </Container>
        </Stack>
    )
}

export default MasterBlock