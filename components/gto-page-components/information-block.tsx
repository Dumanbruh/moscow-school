import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import CustomBtn from '../ui/custom-btn'

const InformationBlock: FC = () => {
    return (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: "95px",
            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)"
        }}>
            <Box component={"img"} sx={{ position: "absolute", left: 0, top: "4%", zIndex: 1 }} src={"images/bg/desktop/information/mossport-logo.png"} />
            <Box component={"img"} sx={{ position: "absolute", right: 0, top: 0, zIndex: 1 }} src={"images/bg/desktop/information/sun.png"} />
            <Container maxWidth={"md"} disableGutters sx={{ zIndex: 2 }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"50px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)", whiteSpace: "pre-line", textAlign: "center" }}>
                        {`Фестиваль ГТО
                        среди школьников`}
                    </Typography>
                    <Typography variant='body' sx={{ fontSize: "24px", lineHeight: "32px", whiteSpace: "pre-wrap", color: "white" }}>
                        {`Отбор сборной команды Москвы для участия в Фестивале ВФСК ГТО в МДЦ «Артек».

К участию приглашаются обучающиеся образовательных организаций юноши и девушки 12-13 лет (IV ступень) и 14-15 лет (V ступень), имеющие золотой знак отличия комплекса ГТО в соответствующих ступенях в личном кабинете участника АИС ГТО.`}
                    </Typography>
                    <CustomBtn height='70px' bg='linear-gradient(90deg, #FFD324 0%, #FF8900 100%)' onClick={() => { }} minWidth='309px'>
                        <Typography variant='footerHeader' sx={{ color: "#31313E", fontSize: "18px" }}>ЗАРЕГИСТРИРОВАТЬСЯ</Typography>
                    </CustomBtn>
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