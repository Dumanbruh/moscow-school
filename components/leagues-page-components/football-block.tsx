import React, { FC } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

const FootballBlock: FC = () => {
    return (
        <Stack sx={{
            width: "100%",
            minHeight: 754,
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: "87px",
            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)"
        }}>
            <Box component={"img"} sx={{ position: "absolute", right: 0, top: "4%", zIndex: 1 }} src={"images/bg/desktop/information/mossport-logo-left.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: 0, top: 0, zIndex: 1 }} src={"images/bg/desktop/information/sun.png"} />
            <Container maxWidth={"md"} disableGutters sx={{ zIndex: 2 }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"64px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)" }}>Школьная спортивная лига по футболу</Typography>
                    <Typography variant='body' sx={{ fontSize: "24px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Финальные матчи школьной спортивной лиги по футболу среди лучших школьных спортивных клубов.

Система проведения: финальные матчи младшей, средней и старшей возрастной категорий`}
                    </Typography>
                    <Stack direction={"row"} spacing={"30px"}>
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/football/1.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/football/2.png"} />
                        <Box component={"img"} sx={{ maxWidth: "267px" }} src={"images/leagues-page/football/3.png"} />
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}

export default FootballBlock