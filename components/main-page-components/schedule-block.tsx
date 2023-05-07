import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'


interface DateBlockProps {
    date: string;
    scene: string;
    isDesktop: boolean;
}

interface Props {
    isDesktop: boolean;
}


const DateBlock = ({ isDesktop, date, scene }: DateBlockProps) => {
    return (
        <Stack direction={"row"}
            sx={{
                width: "100%",
                minHeight: isDesktop ? "48px" : "32px",
                background: "linear-gradient(89.22deg, #FF6373 -55.16%, #CC1427 105.12%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                alignItems: "center",
                px: isDesktop ? "16px" : "2px"
            }}
            spacing={isDesktop ? "24px" : "8px"}
        >
            <Stack width={"40%"} sx={{ justifyContent: "center", alignItems: "center" }}>
                <Typography variant='fieldHeader' sx={{ color: "white", fontSize: isDesktop ? "24px" : "16px" }}>{date}</Typography>
            </Stack>
            <Box width={"60%"}>
                <Typography variant='fieldHeader' sx={{ color: "white", fontSize: isDesktop ? "24px" : "16px" }}>{scene}</Typography>
            </Box>
        </Stack>
    );
}

const ScheduleBlock = ({ isDesktop }: Props) => {


    const dates = [
        {
            date: "10:05 – 10:15",
            scene: "Разминка от Московского спорта"
        },
        {
            date: "10:15 – 11:30",
            scene: "Соревнования по фитнес-аэробике в спортивных дисциплинах «аэробика», «аэробика 5 человек»"
        },
        {
            date: "11:30 – 12:15",
            scene: "Церемония награждения турнира «Кожаный мяч»"
        },
        {
            date: "12:15 – 12:30",
            scene: "Флешмоб"
        },
        {
            date: "12:30 – 12:40",
            scene: "Церемония награждения лучших школьных спортивных клубов"
        },
        {
            date: "12:40 – 12:50",
            scene: "Церемония награждения соревнований по фитнес-аэробике"
        },
        {
            date: "12:50 – 13:00",
            scene: "Церемония награждения турнира по настольному теннису"
        },
        {
            date: "13:05 – 13:10",
            scene: "Церемония награждения турнира по баскетболу"
        },
        {
            date: "13:10 – 13:55",
            scene: "Соревнования по фитнес-аэробике в спортивной дисциплине «степ-аэробика»"
        },
        {
            date: "13:55 – 14:05",
            scene: "Церемония награждения соревнований по фитнес-аэробике"
        },
        {
            date: "14:05 – 14:15",
            scene: "Церемония награждения знаками отличия комплекса ГТО"
        },
        {
            date: "14:15 – 15:15",
            scene: "Соревнования по фитнес-аэробике в спортивных дисциплинах «Хип-хоп», «Хип-хоп большая группа» (все возрастные категории)."
        },
        {
            date: "15:15 – 15:30",
            scene: "Церемония награждения соревнований по фитнес-аэробике"
        },
        {
            date: "15:30 – 15:40",
            scene: "Церемония награждения Президентских спортивных игр"
        },
        {
            date: "15:40 – 15:55",
            scene: "Церемония награждения Президентских состязаний"
        },
        {
            date: "16:00 – 17:00",
            scene: "Музыкальная пауза"
        },
        {
            date: "17:00 – 17:10",
            scene: "Церемония награждения знаками отличия комплекса ГТО"
        },
        {
            date: "17:10 – 17:20",
            scene: "Церемония награждения турнира по футболу"
        },
        {
            date: "17:20 – 17:30",
            scene: "Церемония награждения Президентских спортивных игр"
        },
        {
            date: "17:30 – 17:40",
            scene: "Церемония награждения лучших школьных спортивных клубов"
        },
    ]

    return (
        <Stack sx={{
            width: "100%",
            minHeight: isDesktop ? "1609px" : "1327px",
            alignItems: "center",
            position: "relative",
            pb: "132px",
            pt: "64px",
            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)"
        }}
        >
            {isDesktop
                ?
                <Box component={"img"} sx={{ position: "absolute", right: 0, top: "250px", zIndex: 1 }} src={"images/leagues-page/president/mossport-logo-mobile.png"} />
                :
                <Box component={"img"} sx={{ position: "absolute", right: 0, top: "110px", zIndex: 1 }} src={"images/leagues-page/president/mossport-logo-mobile.png"} />
            }
            <Box component={"img"} sx={{ position: "absolute", left: 0, bottom: 0, zIndex: 1 }} src={"images/leagues-page/president/left-sun.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }} src={"images/leagues-page/president/right-sun.png"} />
            {isDesktop
                ?
                <Box component={"img"} sx={{ position: "absolute", left: "86px", top: "366px", zIndex: 1 }} src={"images/leagues-page/president/birds.png"} />
                :
                <Box component={"img"} sx={{ position: "absolute", left: "66px", top: "16px", zIndex: 1 }} src={"images/leagues-page/president/birds-mobile.png"} />
            }
            <Box component={"img"} sx={{ position: "absolute", right: "84px", bottom: "105px", zIndex: 1 }} src={"images/leagues-page/president/sparks.png"} />
            <Stack spacing={"68px"}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant='header' sx={{ color: "white", fontSize: isDesktop ? "64px" : "36px", lineHeight: isDesktop ? "64px" : "36px" }}>расписание сцены</Typography>
                </Stack>
                <Container maxWidth={"md"} disableGutters sx={{ zIndex: 2, px: "50px" }}>
                    <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"8px"}>
                        {dates.map((date, i) => (
                            <DateBlock isDesktop={isDesktop} date={date.date} scene={date.scene} key={i} />
                        ))}
                    </Stack>
                </Container>
            </Stack>

        </Stack>
    )
}

export default ScheduleBlock