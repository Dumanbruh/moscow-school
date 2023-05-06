import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CustomBtn from './custom-btn'

interface Props {
    isDesktop: boolean;
}

const Card = ({ isDesktop }: Props) => {
    return isDesktop ? (
        <Stack sx={{ minWidth: "1100px", background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)", borderRadius: "32px", position: "relative" }} direction={"row"} spacing={"45px"}>
            <Box sx={{
                backgroundImage: "url(/images/tournaments-page/1.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                width: "40%",
                height: "576px",
                borderRadius: "32px",
                zIndex: 2
            }} />

            <Box component={"img"} src={"images/logos/card/card-logo.png"} sx={{ position: "absolute", right: 0, py: "47px", zIndex: 1 }} />

            <Stack spacing={"24px"} sx={{
                zIndex: 2, width: "60%",
            }}>
                <Stack sx={{
                    borderRadius: "5px",
                    background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)",
                    maxWidth: "84px",
                    alignItems: "center",
                    py: "10px"
                }}>
                    <Typography variant='fieldHeader' sx={{ fontSize: "11px", color: "white", lineHeight: "16.5px", textTransform: "uppercase" }}>19 мая</Typography>
                </Stack>
                <Typography variant='header' sx={{ fontSize: "64px", height: "114px" }}>Тэг-регби</Typography>
                <Typography variant='body' sx={{ fontSize: "24px", lineHeight: "28.8px", whiteSpace: "pre-line" }}>
                    {`Фестиваль пройдет в двух возрастных категориях смешанных команд юношей и девушек: 7-9, 10-12 лет.
                    Все игры проходят в группах, все команды играют по правилам «Тэг-регби» согласно расписанию.`}
                </Typography>
                <Stack direction={"row"} spacing={"30px"}>
                    <CustomBtn height='96px' bg='linear-gradient(90deg, #FF6373 0%, #CC1427 100%)' onClick={() => { }} minWidth='255px'>
                        <Typography variant='body' sx={{ color: "white", fontSize: "18px" }}>РЕГИСТРАЦИЯ</Typography>
                    </CustomBtn>
                    <CustomBtn height='96px' bg='white' onClick={() => { }} minWidth='255px'>
                        <Typography variant='body' sx={{ color: "#563F42", fontSize: "18px" }}>БУДУ ЗРИТЕЛЕМ</Typography>
                    </CustomBtn>
                </Stack>
            </Stack>
        </Stack>
    ) : (
        <Stack sx={{
            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)", borderRadius: "32px", pb: "64px", position: "relative", zIndex: 2, maxWidth: "400px"
        }} spacing={"32px"}>
            <Box sx={{
                backgroundImage: "url(/images/tournaments-page/1.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                width: "100%",
                height: "300px",
                borderRadius: "32px",
                zIndex: 2
            }}>
                <Stack sx={{
                    width: "100%",
                    alignItems: "center",
                }}>
                    <Stack sx={{
                        borderRadius: "5px",
                        background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)",
                        py: "10px",
                        px: "18px"
                    }}>
                        <Typography variant='fieldHeader' sx={{ fontSize: "11px", color: "white", lineHeight: "16.5px", textTransform: "uppercase" }}>19 мая</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box component={"img"} src={"images/logos/card/card-logo.png"} sx={{ position: "absolute", right: 0, top: 0, pt: "162px", zIndex: 1 }} />

            <Stack spacing={"24px"} sx={{ zIndex: 2, px: "20px" }}>
                <Typography variant='header' sx={{ fontSize: "36px", lineHeight: "36px", letterSpacing: "-1px", textAlign: "center" }}>Тэг-регби</Typography>
                <Typography variant='body' sx={{ fontSize: "16px", lineHeight: "19px", whiteSpace: "pre-line" }}>
                    {`Фестиваль пройдет в двух возрастных категориях смешанных команд юношей и девушек: 7-9, 10-12 лет.
                    Все игры проходят в группах, все команды играют по правилам «Тэг-регби» согласно расписанию.`}
                </Typography>
                <Stack direction={"column"} spacing={"16px"} sx={{ px: "11%", pt: "66px" }}>
                    <CustomBtn height='64px' bg='linear-gradient(90deg, #FF6373 0%, #CC1427 100%)' onClick={() => { }}>
                        <Typography variant='body' sx={{ color: "white", fontSize: "18px" }}>ПОДРОБНЕЕ</Typography>
                    </CustomBtn>
                    <CustomBtn height='64px' bg='white' onClick={() => { }}>
                        <Typography variant='body' sx={{ color: "#563F42", fontSize: "18px" }}>БУДУ ЗРИТЕЛЕМ</Typography>
                    </CustomBtn>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Card