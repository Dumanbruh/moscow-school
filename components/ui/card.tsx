import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CustomBtn from './custom-btn'
import RecordForm from '../forms/record-form';

interface Props {
    isDesktop: boolean;
    name: string;
    desc: string;
    img: string;
    date: string;
    url: string;
    type: 'main' | 'tournament' | 'master'
}

const Card = ({ isDesktop, name, desc, img, url, date, type }: Props) => {
    return isDesktop ? (
        <Stack sx={{ minWidth: "1100px", background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)", borderRadius: "32px", position: "relative" }} direction={"row"} spacing={"45px"}>
            <Box sx={{
                backgroundImage: img,
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
                    <Typography variant='fieldHeader' sx={{ fontSize: "11px", color: "white", lineHeight: "16.5px", textTransform: "uppercase" }}>{date}</Typography>
                </Stack>
                <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "60px", height: name === 'Русская лапта' ? "52px" : "114px" }}>{name}</Typography>
                <Typography variant='body' sx={{ fontSize: "24px", maxWidth: "571px", height: name === 'Русская лапта' ? "260px" : "202px", lineHeight: "28.8px", whiteSpace: "pre-line" }}>
                    {`${desc}`}
                </Typography>
                {type === 'main' && (
                    <Stack direction={"row"} spacing={"30px"} sx={{ justifyContent: name !== "мастер-классы" ? 'flex-start' : 'center' }}>
                        <CustomBtn height='96px' bg='linear-gradient(90deg, #FF6373 0%, #CC1427 100%)' onClick={() => { window.open(url, '_blank')?.focus() }} minWidth='255px'>
                            <Typography variant='body' sx={{ color: "white", fontSize: "18px" }}>ПОДРОБНЕЕ</Typography>
                        </CustomBtn>
                        {name !== "мастер-классы" && (
                            <RecordForm isDesktop={isDesktop} isViewer={true} />
                        )}
                    </Stack>
                )}
                {type === 'tournament' && (
                    <Stack direction={"row"} spacing={"30px"} sx={{ justifyContent: name !== "мастер-классы" ? 'flex-start' : 'center' }}>
                        <CustomBtn height='96px' bg='linear-gradient(90deg, #FF6373 0%, #CC1427 100%)' onClick={() => { window.open(url, '_blank')?.focus() }} minWidth='255px'>
                            <Typography variant='body' sx={{ color: "white", fontSize: "18px" }}>ПОДРОБНЕЕ</Typography>
                        </CustomBtn>
                        <RecordForm isDesktop={isDesktop} isViewer={true} />
                    </Stack>
                )}
                {type === 'master' && (
                    <Stack direction={"row"} spacing={"30px"} sx={{ justifyContent: name !== "мастер-классы" ? 'flex-start' : 'center' }}>
                        <CustomBtn height='96px' bg='linear-gradient(90deg, #FF6373 0%, #CC1427 100%)' onClick={() => { window.open(url, '_blank')?.focus() }} minWidth='255px'>
                            <Typography variant='body' sx={{ color: "white", fontSize: "18px" }}>ЗАПИСАТЬСЯ</Typography>
                        </CustomBtn>
                        <RecordForm isDesktop={isDesktop} isViewer={true} />
                    </Stack>
                )}
            </Stack>
        </Stack >
    ) : (
        <Stack sx={{
            background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)", borderRadius: "32px", pb: "64px", position: "relative", zIndex: 2, maxWidth: "400px", height: "100%"
        }} spacing={"32px"}>
            <Box sx={{
                backgroundImage: img,
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
                        <Typography variant='fieldHeader' sx={{ fontSize: "11px", color: "white", lineHeight: "16.5px", textTransform: "uppercase" }}>{date}</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box component={"img"} src={"images/logos/card/card-logo.png"} sx={{ position: "absolute", right: 0, top: 0, pt: "162px", zIndex: 1 }} />

            <Stack sx={{ zIndex: 2, px: "20px" }}>
                <Typography variant='header' sx={{ fontSize: "36px", lineHeight: "36px", minHeight: name === "Настольные спортивные игры" ? "100%" : "72px", letterSpacing: "-1px", textAlign: "center" }}>{name}</Typography>
                <Typography variant='body' sx={{ fontSize: "14px", mt: "24px", lineHeight: "19px", minHeight: type === 'main' ? "235px" : "206px", maxWidth: "360px", whiteSpace: "pre-line" }}>
                    {`${desc}`}
                </Typography>

                {type === 'main' && (
                    <Stack direction={"column"} spacing={"16px"} sx={{ px: "11%", mt: "13px", justifyContent: 'center', minHeight: '144px' }}>
                        <CustomBtn height='64px' bg='linear-gradient(90deg, #FF6373 0%, #CC1427 100%)' onClick={() => { window.open(url, '_blank')?.focus() }}>
                            <Typography variant='body' sx={{ color: "white", fontSize: "18px" }}>ПОДРОБНЕЕ</Typography>
                        </CustomBtn>
                        {name !== "мастер-классы" && (
                            <RecordForm isDesktop={isDesktop} isViewer={true} />
                        )}
                    </Stack>
                )}
                {type === 'tournament' && (
                    <Stack direction={"column"} spacing={"16px"} sx={{ px: "11%", mt: "13px", justifyContent: 'center', minHeight: '144px' }}>
                        <CustomBtn height='64px' bg='linear-gradient(90deg, #FF6373 0%, #CC1427 100%)' onClick={() => { window.open(url, '_blank')?.focus() }}>
                            <Typography variant='body' sx={{ color: "white", fontSize: "18px" }}>ПОДРОБНЕЕ</Typography>
                        </CustomBtn>
                        <RecordForm isDesktop={isDesktop} isViewer={true} />
                    </Stack>
                )}
                {type === 'master' && (
                    <Stack direction={"column"} spacing={"16px"} sx={{ px: "11%", mt: "13px", justifyContent: 'center', minHeight: '144px' }}>
                        <CustomBtn height='64px' bg='linear-gradient(90deg, #FF6373 0%, #CC1427 100%)' onClick={() => { window.open(url, '_blank')?.focus() }}>
                            <Typography variant='body' sx={{ color: "white", fontSize: "18px" }}>ЗАПИСАТЬСЯ</Typography>
                        </CustomBtn>
                        <RecordForm isDesktop={isDesktop} isViewer={true} />
                    </Stack>
                )}
            </Stack>
        </Stack>
    )
}

export default Card