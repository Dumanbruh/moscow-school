import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import MainPageForm from '../forms/main-page-form'
import { ST } from 'next/dist/shared/lib/utils';

interface RegisterProps {
    isDesktop: boolean;
}


const RegisterBlock = ({ isDesktop }: RegisterProps) => {
    return isDesktop ? (
        <Box height={900} sx={{
            backgroundImage: "url(/images/bg/reg-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
            position: "relative"
        }}>
            <Stack spacing={"27px"} sx={{
                width: "812px", position: "absolute", right: 0,
                mr: "150px", pt: "96px",
                alignItems: "center"
            }}>
                <Box sx={{ maxWidth: "671px" }}>
                    <Typography variant='formHeader' sx={{ fontSize: "36px", whiteSpace: "pre-line" }}>
                        {`19 МАЯ
                    ШКОЛЬНЫЙ ПРАЗДНИК СПОРТА`}
                    </Typography>
                </Box>

                <Typography variant='body' sx={{
                    fontSize: "24px",
                    color: "#30303E",
                    lineHeight: "32px",
                    whiteSpace: "pre-line"
                }}>
                    {`Наше мероприятие соберет вместе учеников со всех уголков города, которые смогут показать свои спортивные таланты в футболе, баскетболе 3х3, ГТО, посетить мастер- классы и специализированные секции.
                    А для гостей мы приготовили подароки от Московского спорта! Оставь свой адрес электронной почты и мы пригласим тебя в числе первых!`}
                </Typography>
                <MainPageForm isDesktop={isDesktop} />
            </Stack>
        </Box >
    ) : (
        <Box height={"100%"} sx={{
            backgroundImage: "url(/images/bg/mobile/reg-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
        }}>
            <Stack spacing={"16px"} sx={{
                width: "100%",
                alignItems: "center",
                pt: "100px",
                px: "32px",
                pb: "154px",
            }}>
                <Stack sx={{
                    maxWidth: "520px",
                }}>
                    <Box sx={{ textAlign: "right" }}>
                        <Typography variant='formHeader' sx={{ fontSize: "32px", lineHeight: "60px", whiteSpace: "pre-line" }}>
                            {`19 МАЯ
                    ШКОЛЬНЫЙ ПРАЗДНИК 
                    СПОРТА`}
                        </Typography>
                    </Box>

                    <Typography variant='body' sx={{
                        fontSize: "24px",
                        color: "#30303E",
                        lineHeight: "32px",
                        whiteSpace: "pre-line",
                        textAlign: "justify"
                    }}>
                        {`Наше мероприятие соберет вместе учеников со всех уголков города, которые смогут показать свои спортивные таланты в футболе, баскетболе 3х3, ГТО, посетить мастер- классы и специализированные секции.
                    А для гостей мы приготовили подароки от Московского спорта! Оставь свой адрес электронной почты и мы пригласим тебя в числе первых!`}
                    </Typography>
                    <Stack sx={{
                        width: "100%", alignItems: "center",
                    }}>
                        <Box
                            component={"img"}
                            src="/images/logos/form/present-logo.svg"
                            sx={{
                                maxHeight: "250px"
                            }}
                        />
                    </Stack>

                    <MainPageForm isDesktop={isDesktop} />
                </Stack>
            </Stack>
        </Box >
    )
}

export default RegisterBlock