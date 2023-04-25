import React from 'react'
import { Stack, useTheme, useMediaQuery, Box } from "@mui/material";

const Navbar = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Stack height={120} direction={"row"} sx={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <Stack width={"51%"}
                direction={"row"}
                spacing={"25px"}
                sx={{
                    height: "100%",
                    background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Box
                    component={"img"}
                    src="/images/logos/complex-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
                <Box
                    component={"img"}
                    src="/images/logos/moscow-educ-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
                <Box
                    component={"img"}
                    src="/images/logos/mossport-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
                <Box
                    component={"img"}
                    src="/images/logos/100-years-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
            </Stack>
            <Stack width={"49%"} sx={{
                height: "100%",
                background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)"
            }}>

            </Stack>
        </Stack>
    )
}

export default Navbar