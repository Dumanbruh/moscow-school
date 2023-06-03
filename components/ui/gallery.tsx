import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

interface Props {
    isDesktop: boolean;
}

const GalleryBLock = ({ isDesktop }: Props) => {
    const photos = [
        {
            id: 1,
            chunk: ["https://i.ibb.co/g7mqFR2/FSS1019.jpg",
                "https://i.ibb.co/ctyFhyh/FSS1020.jpg",
                "https://i.ibb.co/SrMZmzV/FSS1021.jpg",
                "https://i.ibb.co/cw7q1Zv/FSS1024.jpg",
                "https://i.ibb.co/F7RTVpL/FSS1027.jpg",
                "https://i.ibb.co/GxCVwc2/FSS1031.jpg"]
        },
        {
            id: 2,
            chunk: ["https://i.ibb.co/dfCKh4j/FSS1032.jpg",
                "https://i.ibb.co/f96t82F/FSS1033.jpg",
                "https://i.ibb.co/f835np5/FSS1038.jpg",
                "https://i.ibb.co/WcMN4V9/FSS1057.jpg",
                "https://i.ibb.co/yq5WXdj/FSS1062.jpg",
                "https://i.ibb.co/whd2J11/FSS1088.jpg"]
        },
        {
            id: 3,
            chunk: ["https://i.ibb.co/JsK1MLp/FSS1091.jpg",
                "https://i.ibb.co/M2cCyN1/FSS1095.jpg",
                "https://i.ibb.co/t2DLXfh/FSS1098.jpg",
                "https://i.ibb.co/Bj4m7sH/FSS1099.jpg",
                "https://i.ibb.co/f4Tbd5D/FSS1101.jpg",
                "https://i.ibb.co/1zHFNSG/FSS1104.jpg"]
        },
        {
            id: 4,
            chunk: ["https://i.ibb.co/MNnk7pk/FSS1109.jpg",
                "https://i.ibb.co/Kx01tkM/FSS1112.jpg",
                "https://i.ibb.co/SKTrHZP/FSS1118.jpg",
                "https://i.ibb.co/PC5Sk3M/FSS1120.jpg",
                "https://i.ibb.co/svHHy7k/FSS1122.jpg",
                "https://i.ibb.co/9ryCjJJ/FSS1189.jpg"]
        },
        {
            id: 5,
            chunk: ["https://i.ibb.co/n3fLfn4/FSS1199.jpg",
                "https://i.ibb.co/K0NZKrY/FSS1204.jpg",
                "https://i.ibb.co/txbfk2d/FSS1210.jpg",
                "https://i.ibb.co/LYxCNHK/FSS1228.jpg",
                "https://i.ibb.co/jyjX2Ts/FSS1254.jpg",
                "https://i.ibb.co/ww0YCtQ/FSS1282.jpg"]
        },
        {
            id: 6,
            chunk: ["https://i.ibb.co/zmy4F9R/FSS1290.jpg",
                "https://i.ibb.co/wNz8M9T/FSS1313.jpg",
                "https://i.ibb.co/qjNsSY9/FSS1318.jpg",
                "https://i.ibb.co/dKX5mnB/FSS1325.jpg",
                "https://i.ibb.co/Bw8D0Ww/FSS1329.jpg",
                "https://i.ibb.co/zVXrHCG/FSS1361.jpg"]
        },
        {
            id: 7,
            chunk: ["https://i.ibb.co/0FzP5FM/FSS1367.jpg",
                "https://i.ibb.co/yS6YK9c/FSS1372.jpg",
                "https://i.ibb.co/K2C0S23/FSS1418.jpg",
                "https://i.ibb.co/Yp0zv0w/FSS1427.jpg",
                "https://i.ibb.co/9tpRQxr/FSS1448.jpg",
                "https://i.ibb.co/K0K6MJQ/FSS1450.jpg"]
        },
        {
            id: 8,
            chunk: ["https://i.ibb.co/NxmRRSX/FSS1457.jpg"]
        },

    ];
    const [showLeftArrow, setShowLeftArrow] = React.useState(false);
    const [showRightArrow, setShowRightArrow] = React.useState(true);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isLastIndex, setIsLastIndex] = React.useState(false);

    function chunkArray(array: string[], chunk_size: number) {
        let results = [];

        while (array.length) {
            results.push(array.splice(0, chunk_size));
        }

        return results;
    }


    const handleChangeIndex = (index: number, lastIndex: number) => {
        setActiveIndex(index);
        if (index === 0) {
            setShowLeftArrow(false);
        } else {
            setShowLeftArrow(true);
        }
        if (lastIndex === 1) {
            setIsLastIndex(true);
            setShowRightArrow(false);
        } else {
            setIsLastIndex(false);
            setShowRightArrow(true);
        }
    };

    return (
        <Stack sx={{
            width: "100%",
            alignItems: "center",
            position: "relative",
            minHeight: 754,
            pt: "64px",
            pb: isDesktop ? "93px" : "93px",
            background: "linear-gradient(90deg, #008185 0%, #01D2CB 100%)"
        }}>
            <Container maxWidth={isDesktop ? false : "sm"} disableGutters sx={{ zIndex: 2, px: isDesktop ? "0px" : "40px", maxWidth: '1100px', position: "relative" }}>
                <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"60px"}>
                    <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textAlign: "center" }}>Галерея</Typography>
                    <Swiper slidesPerView={"auto"}
                        modules={[Navigation]}
                        navigation={isDesktop ? {
                            prevEl: ".prev-button",
                            nextEl: ".next-button",
                        } : false}
                        style={{ overflow: "visible", width: "100%" }}
                        spaceBetween={isDesktop ? 48 : 16}
                        resistance={false}
                        onActiveIndexChange={(e: any) =>
                            handleChangeIndex(e.activeIndex, e.progress)
                        }
                        onReachBeginning={() => setShowLeftArrow(false)}
                        onReachEnd={() => setShowRightArrow(false)}
                    >
                        {photos.map((photo, i) => (
                            <SwiperSlide key={photo.id} style={{ width: isDesktop ? "1100px" : "320px" }}>
                                <Grid container spacing={1} sx={{ width: "100%", mx: "0px" }}>
                                    {photo.chunk.map((src, i) => (
                                        <Grid item key={i} xs={isDesktop ? 4 : 6}>
                                            <Box component={"img"} src={src} sx={{ height: isDesktop ? "300px" : "200px", width: "100%" }} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Box
                        className={"next-button"}
                        component={"img"}
                        src={"/images/logos/slider/right.png"}
                        sx={{
                            position: "absolute",
                            right: "-5%",
                            top: "45%",
                            maxHeight: "100px",
                            zIndex: 3,
                            display: isDesktop && showRightArrow ? "block" : "none",
                        }}
                    />
                    <Box
                        className={"prev-button"}
                        component={"img"}
                        src={"/images/logos/slider/left.png"}
                        sx={{
                            position: "absolute",
                            left: "-5%",
                            top: "45%",
                            maxHeight: "100px",
                            zIndex: 3,
                            display: isDesktop ? "block" : "none",
                        }}
                    />
                </Stack>
            </Container >
        </Stack >
    )
}

export default GalleryBLock