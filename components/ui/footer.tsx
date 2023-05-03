import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Footer = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

    return isDesktop ? (
        <Stack height={641} width={"100%"}>
            <Box height={564} width={"100%"} sx={{
                backgroundImage: "url(/images/bg/footer-bg.png)",
                backgroundRepeat: "no-repeat",
            }}>
                <Container disableGutters maxWidth={"lg"} sx={{ pt: "58px", px: "45px" }}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Stack spacing={"30px"}>
                            <Typography variant='header' sx={{
                                color: "#1E2229", fontSize: "48px",
                                paddingBottom: "10px",
                                position: "relative",
                            }}>
                                КАК НАС НАЙТИ?
                                <Box sx={{ ml: "36px", background: "#01B0AE", height: "3px", maxWidth: "140px" }} />
                            </Typography>
                            <Stack spacing={"3px"}>
                                <Typography variant='footerHeader' sx={{ color: "#202020", fontSize: "18px" }}>
                                    Эл. почта
                                </Typography>
                                <Typography variant='fieldHeader' sx={{ fontSize: "18px", textDecorationLine: "underline", textDecorationThickness: "1px" }}>
                                    school.moscow.sport@yandex.ru
                                </Typography>
                            </Stack>
                            <Stack spacing={"3px"}>
                                <Typography variant='footerHeader' sx={{ color: "#202020", fontSize: "18px" }}>
                                    Место проведения
                                </Typography>
                                <Typography variant='fieldHeader' sx={{ fontSize: "18px" }}>
                                    ГБОУ ДО СШОР «МОСКВИЧ»
                                </Typography>
                                <Typography variant='fieldHeader' sx={{ fontSize: "18px" }}>
                                    г. Москва, Волгоградский просп., 46/15с7
                                </Typography>
                            </Stack>
                        </Stack>

                        <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A48d48ecdf9dac9ca29b98da2f451f4241a37973675f422de5a973a001b82195e&amp;source=constructor" width="591" height="449" frameBorder="0"></iframe>
                    </Stack>
                </Container >
            </Box>

            <Stack height={90} direction={"row"} sx={{ borderTop: "2px solid rgba(146, 146, 146, 0.2)", width: "100%", position: "relative" }}>
                <Stack sx={{
                    position: "absolute",
                    width: "100%", justifyContent: "center", alignItems: "center", top: "-35%"
                }}>
                    <Box sx={{ background: "#01B0AE", px: "11px", py: "13px" }} onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>
                        <Box
                            component={"img"}
                            src="/images/logos/footer/arrow.png"
                            sx={{
                                height: "23px",
                            }}
                        />
                    </Box>
                </Stack>
                <Stack width={"100%"}
                    direction={"row"}
                    spacing={"25px"}
                    sx={{
                        height: "100%",
                        pl: "78px",
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
                        src="/images/logos/footer/department-logo.svg"
                        sx={{
                            maxHeight: "40px",
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
                        src="/images/logos/footer/moscow-educ-logo.svg"
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
                    <Box
                        component={"img"}
                        src="/images/logos/footer/patriot-logo.svg"
                        sx={{
                            maxHeight: "40px"
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/moskvich-logo.svg"
                        sx={{
                            maxHeight: "40px"
                        }}
                    />
                </Stack>
            </Stack>
        </Stack >
    ) : (
        <Stack width={"100%"}>
            <Stack width={"100%"} alignItems={"center"} spacing={2}>
                <Box width={"100%"} sx={{
                    backgroundImage: "url(/images/bg/footer-bg.png)",
                    backgroundPositionX: "-80px",
                    backgroundRepeat: "no-repeat",
                    pt: "75px"
                }}>
                    <Stack width={"100%"} alignItems={"flex-end"}>
                        <Stack spacing={"30px"} maxWidth={"300px"}>
                            <Typography variant='header' sx={{
                                color: "#1E2229", fontSize: "48px",
                                paddingBottom: "10px",
                                position: "relative",
                            }}>
                                КАК НАС НАЙТИ?
                                <Box sx={{ ml: "36px", background: "#01B0AE", height: "3px", maxWidth: "140px" }} />
                            </Typography>
                            <Stack spacing={"3px"}>
                                <Typography variant='footerHeader' sx={{ color: "#202020", fontSize: "18px" }}>
                                    Эл. почта
                                </Typography>
                                <Typography variant='fieldHeader' sx={{ fontSize: "18px", textDecorationLine: "underline", textDecorationThickness: "1px" }}>
                                    school.moscow.sport@yandex.ru
                                </Typography>
                            </Stack>
                            <Stack spacing={"3px"}>
                                <Typography variant='footerHeader' sx={{ color: "#202020", fontSize: "18px" }}>
                                    Место проведения
                                </Typography>
                                <Typography variant='fieldHeader' sx={{ fontSize: "18px" }}>
                                    ГБОУ ДО СШОР «МОСКВИЧ»
                                </Typography>
                                <Typography variant='fieldHeader' sx={{ fontSize: "18px" }}>
                                    г. Москва, Волгоградский просп., 46/15с7
                                </Typography>
                            </Stack>
                        </Stack>

                    </Stack>

                </Box>
                <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A48d48ecdf9dac9ca29b98da2f451f4241a37973675f422de5a973a001b82195e&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
            </Stack >


            <Stack height={90} direction={"row"} sx={{ borderTop: "2px solid rgba(146, 146, 146, 0.2)", position: "relative" }}>
                <Stack sx={{
                    position: "absolute",
                    width: "100%", justifyContent: "center", alignItems: "center", top: "-35%"
                }}>
                    <Box sx={{ background: "#01B0AE", px: "8px", py: "10px" }} onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>
                        <Box
                            component={"img"}
                            src="/images/logos/footer/arrow.png"
                            sx={{
                                height: "23px",
                            }}
                        />
                    </Box>
                </Stack>
                <Stack width={"100%"}
                    direction={"row"}
                    spacing={"16px"}
                    sx={{
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        py: "23px",
                    }}>
                    <Box
                        component={"img"}
                        src="/images/logos/footer/complex-logo.svg"
                        sx={{
                            maxHeight: "39px",
                            width: "15%",
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/department-logo.svg"
                        sx={{
                            maxHeight: "39px",
                            width: "15%",
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/mossport-logo.svg"
                        sx={{
                            maxHeight: "39px",
                            width: "15%",
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/moscow-educ-logo.svg"
                        sx={{
                            maxHeight: "39px",
                            width: "15%",
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/100-years-logo.svg"
                        sx={{
                            maxHeight: "39px",
                            width: "15%",
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/patriot-logo.svg"
                        sx={{
                            maxHeight: "39px",
                            width: "15%",
                        }}
                    />
                    <Box
                        component={"img"}
                        src="/images/logos/footer/moskvich-logo.svg"
                        sx={{
                            maxHeight: "39px",
                            width: "15%",
                        }}
                    />
                </Stack>
            </Stack>
        </Stack >)
}

export default Footer