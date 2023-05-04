import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'

const BasketballBlock: FC = () => {
    return (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: "87px",
            background: "linear-gradient(90deg, #008185 0%, #01D2CB 100%)"
        }}>
            <Box component={"img"} sx={{ position: "absolute", right: 0, top: "4%", zIndex: 1 }} src={"images/bg/desktop/blueblock/mossport-logo.png"} />
            <Box component={"img"} sx={{ position: "absolute", left: 0, top: 0, zIndex: 1 }} src={"images/bg/desktop/blueblock/sun.png"} />
            <Container maxWidth={"md"} disableGutters sx={{ zIndex: 2 }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"60px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)" }}>Школьная спортивная лига по баскетболу 3х3</Typography>
                    <Typography variant='body' sx={{ fontSize: "24px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Финальный турнир школьной спортивной лиги по баскетболу 3х3 среди лучших школьных спортивных клубов.

Система проведения: групповой этап, плей-офф.

Групповой этап: 2 группы по 4 команды играют "каждый с каждым", 1 и 2 места выходят в 1/2 финала (плей-офф).

Плей-офф: 1/2 финала, финалы за 3-е и 1-е места.

Две возрастные категории юношей и девушек (по 8 команд – всего 32 команды).`}
                    </Typography>
                    <Stack direction={"row"} spacing={"30px"}>
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/blue/1.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/blue/2.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/blue/3.png"} />
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}

export default BasketballBlock