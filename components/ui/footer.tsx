import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Stack width={"100%"}>
            <Stack direction={"row"} width={"100%"}>
                <Stack>
                    <Typography>
                        КАК НАС НАЙТИ?
                    </Typography>
                    <Stack>
                        <Typography>
                            Эл. почта
                        </Typography>
                        <Typography>
                            school.moscow.sport@yandex.ru
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography>
                            Место проведения
                        </Typography>
                        <Typography>
                            ГБОУ ДО СШОР «МОСКВИЧ»
                        </Typography>
                        <Typography>
                            г. Москва, Волгоградский просп., 46/15с7
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Stack height={90} direction={"row"}>
                <Stack width={"51%"}
                    direction={"row"}
                    spacing={"25px"}
                    sx={{
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Box
                        component={"img"}
                        src="/images/logos/footer/complex-logo.svg"
                        sx={{
                            maxHeight: "40px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/moscow-educ-logo.svg"
                        sx={{
                            maxHeight: "40px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/mossport-logo.svg"
                        sx={{
                            maxHeight: "40px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/100-years-logo.svg"
                        sx={{
                            maxHeight: "40px"
                        }}
                    />
                </Stack>
                <Stack width={"49%"} sx={{
                }}>

                </Stack>
            </Stack>
        </Stack>

    )
}

export default Footer