import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

interface Props {
    isDesktop: boolean;
}

const VideoBlock = ({ isDesktop }: Props) => {
    return (
        <Stack sx={{
            width: "100%",
            minHeight: 884,
            alignItems: "center",
            position: "relative",
            pt: "64px",
            pb: "120px",
            background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)"
        }}>
            <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }} spacing={"60px"}>
                <Typography variant='header' sx={{ fontSize: "64px", lineHeight: "64px", textAlign: "center" }}>Видео</Typography>
                <Container maxWidth={"xl"} disableGutters sx={{ zIndex: 2, px: "20px" }}>
                    <iframe
                        width="100%"
                        height={isDesktop ? "700" : "300"}
                        src="https://www.youtube.com/embed/1ijqkF0xnjc"
                        title="Фестиваль школьных видов спорта. 19 мая 2023 года. СК &quot;Москвич&quot;"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </Container>
            </Stack>
        </Stack>
    )
}

export default VideoBlock