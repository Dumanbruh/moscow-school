import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'


interface Props {
    isDesktop: boolean;
}

const MapBlock = ({ isDesktop }: Props) => {

    const mapPoints = [
        "СЦЕНА (ФИТНЕС-АЭРОБИКА)",
        "ЗОНА АКТИВНОСТЕЙ (СКИПИНГ, ПРЫЖКИ ЧЕРЕЗ РЕЗИНКУ, НАСТОЛЬНЫЕ ИГРЫ)",
        "ФИНАЛ «КОЖАНЫЙ МЯЧ»",
        "ФИНАЛ ШСЛ ПО ФУТБОЛУ,ТУРНИР «ФУТБОЛ В ШКОЛЕ»",
        "ГТО",
        "КОНТЕЙНЕР ГТО",
        "ГТО ПЛАВАНИЕ",
        "ФИНАЛ ШСЛ ПО БАСКЕТБОЛУ",
        "ТУРНИР ПО ТЭГ-РЕГБИ",
        "ТУРНИР ПО НАСТОЛЬНОМУ ТЕННИСУ",
        "ГОЛЬФ В ФОРМАТЕ SNAG",
        "ФИТНЕС-ДЖАМПИНГ, ЛАПТА",
        "ГОРОДКИ",
        "РАЗДЕВАЛКИ",
        "ТУАЛЕТЫ"
    ]


    return isDesktop ? (
        <Box sx={{
            minHeight: 781, width: "100%",
            pt: "64px",
            position: "relative"
        }}>
            <Box
                component={"img"}
                sx={{ position: "absolute", left: 0, bottom: 0, zIndex: 1 }}
                src={"images/bg/desktop/map/left.png"}
            />
            <Box
                component={"img"}
                sx={{ position: "absolute", left: 0, bottom: 0, zIndex: 1 }}
                src={"images/bg/desktop/map/cloud-bottom.png"}
            />
            <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                <Typography variant='header' sx={{ color: "#1B5F60", fontSize: "64px", lineHeight: "64px" }}>КАРТА фестиваля</Typography>
            </Stack>
            <Stack direction={"row"} spacing={"20px"} sx={{ width: "100%", justifyContent: "center" }}>
                <Box
                    component={"img"}
                    sx={{ zIndex: 1 }}
                    src={"images/bg/desktop/map/map.png"}
                />
                <Stack spacing={"10px"} sx={{
                    maxWidth: "252px",
                    justifyContent: "center"
                }}>
                    {mapPoints.map((point, i) => (
                        <Stack direction={"row"} spacing={"8px"} sx={{ alignItems: "center" }} key={i}>
                            <Typography variant='header' sx={{ fontSize: "24px", lineHeight: "24px", color: "black", width: "6%" }}>
                                {i + 1}
                            </Typography>
                            <Typography variant='header' sx={{ fontSize: "16px", lineHeight: "16px", color: "black", width: "90%" }}>
                                {point}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>

        </Box>
    ) : (
        <Stack sx={{
            width: "100%",
            pt: "64px",
            pb: "42px",
            px: "7px",
            position: "relative"
        }}>
            <Box
                component={"img"}
                src={"images/bg/mobile/map/footer.png"}
                sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "108px" }}
            />
            <Box
                component={"img"}
                sx={{ position: "absolute", left: 0, bottom: 0, zIndex: 1 }}
                src={"images/bg/mobile/map/cloud-bottom.png"}
            />
            <Container maxWidth={"md"} disableGutters sx={{
                pb: "150px",
            }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"32px"}>
                    <Typography variant='header' sx={{ color: "#1B5F60", fontSize: "36px", lineHeight: "36px" }}>КАРТА фестиваля</Typography>
                    <Stack direction={"row"} spacing={"6px"} sx={{ minHeight: "230px" }}>
                        <Stack sx={{ justifyContent: "space-between" }}>
                            {mapPoints.slice(0, 4).map((point, i) => (
                                <Stack direction={"row"} spacing={"8px"} sx={{ alignItems: "center", maxWidth: "140px", minHeight: "24px" }} key={i}>
                                    <Typography variant='header' sx={{ fontSize: "24px", lineHeight: "24px", color: "black", width: "11%" }}>
                                        {i + 1}
                                    </Typography>
                                    <Typography variant='header' sx={{ fontSize: "14px", lineHeight: "14px", color: "black", width: "89%" }}>
                                        {point}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>

                        <Stack sx={{ justifyContent: "space-between" }}>
                            {mapPoints.slice(4, 8).map((point, i) => (
                                <Stack direction={"row"} spacing={"8px"} sx={{ alignItems: "center", maxWidth: "140px", minHeight: "24px" }} key={i}>
                                    <Typography variant='header' sx={{ fontSize: "24px", lineHeight: "24px", color: "black", width: "11%" }}>
                                        {i + 5}
                                    </Typography>
                                    <Typography variant='header' sx={{ fontSize: "14px", lineHeight: "14px", color: "black", width: "89%" }}>
                                        {point}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                        <Stack sx={{ justifyContent: "space-between" }}>
                            {mapPoints.slice(8, 12).map((point, i) => (
                                <Stack direction={"row"} spacing={"8px"} sx={{ alignItems: "center", maxWidth: "140px", minHeight: "29px" }} key={i}>
                                    <Typography variant='header' sx={{ fontSize: "24px", lineHeight: "24px", color: "black", width: "11%" }}>
                                        {i + 9}
                                    </Typography>
                                    <Typography variant='header' sx={{ fontSize: "14px", lineHeight: "14px", color: "black", width: "89%" }}>
                                        {point}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>

                        <Stack sx={{ justifyContent: "space-between" }}>
                            {mapPoints.slice(12, 15).map((point, i) => (
                                <Stack direction={"row"} spacing={"8px"} sx={{ alignItems: "center", maxWidth: "140px", minHeight: "24px" }} key={i}>
                                    <Typography variant='header' sx={{ fontSize: "24px", lineHeight: "24px", color: "black", width: "21%" }}>
                                        {i + 13}
                                    </Typography>
                                    <Typography variant='header' sx={{ fontSize: "14px", lineHeight: "14px", color: "black", width: "79%" }}>
                                        {point}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                    <Box
                        component={"img"}
                        src={"images/bg/mobile/map/map.png"}
                        sx={{ width: "100%" }}
                    />

                </Stack>
            </Container>
        </Stack>
    )
}

export default MapBlock