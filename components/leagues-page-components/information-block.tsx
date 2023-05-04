import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'

const InformationBlock: FC = () => {
    return (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: "87px",
            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)"
        }}>
            <Box component={"img"} sx={{ position: "absolute", left: 0, top: "4%", zIndex: 1 }} src={"images/bg/desktop/information/mossport-logo.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: 0, top: 0, zIndex: 1 }} src={"images/bg/desktop/information/sun.png"} />
            <Container maxWidth={"md"} disableGutters sx={{ zIndex: 2 }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"50px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)" }}>школьные спортивные лиги</Typography>
                    <Typography variant='body' sx={{ fontSize: "24px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Школьная спортивная лига — это спортивные соревнования среди школьных спортивных клубов города Москвы.

Соревнования школьной спортивной лиги проводятся в три этапа: школьный, отборочный и финальный. В 2022/2023 году в соревнованиях приняло участие более 100 тысяч человек.

Наиболее популярные виды спорта на сегодняшний день в Москве это — футбол, баскетбол, волейбол. На фестивале пройдут финалы школьных спортивных лиг по футболу и баскетболу 3×3.

Приходи и поддержи своих друзей!`}
                    </Typography>
                    <Stack direction={"row"} spacing={"30px"}>
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/info/1.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/info/2.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/info/3.png"} />
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}

export default InformationBlock