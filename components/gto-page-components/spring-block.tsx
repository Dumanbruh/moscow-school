import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import CustomBtn from '../ui/custom-btn'

const SpringBlock: FC = () => {
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
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)" }}>Весенний фестиваль ГТО</Typography>
                    <Typography variant='body' sx={{ fontSize: "24px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Приглашаем участников комплекса ГТО всех возрастных ступеней с 12.00 до 18.00 проверить свои возможности в испытаниях на скорость, силу, выносливость и гибкость.`}
                    </Typography>
                    <CustomBtn height='70px' bg='linear-gradient(90deg, #FFD324 0%, #FF8900 100%)' onClick={() => { }} minWidth='309px'>
                        <Typography variant='footerHeader' sx={{ color: "#31313E", fontSize: "18px" }}>ЗАРЕГИСТРИРОВАТЬСЯ</Typography>
                    </CustomBtn>
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

export default SpringBlock