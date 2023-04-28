import React from 'react'
import { Stack, useTheme, useMediaQuery, Box } from "@mui/material";

const Navbar = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery("(min-width:700px)");

    return isDesktop ? (
        <Stack height={120} direction={"row"}>
            <Stack width={"51%"}
                direction={"row"}
                spacing={"25px"}
                sx={{
                    height: "100%",
                    background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                }}>
                <Box
                    component={"img"}
                    src="/images/logos/navbar/department-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
                <Box
                    component={"img"}
                    src="/images/logos/navbar/complex-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
                <Box
                    component={"img"}
                    src="/images/logos/navbar/moscow-educ-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
                <Box
                    component={"img"}
                    src="/images/logos/navbar/mossport-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
                <Box
                    component={"img"}
                    src="/images/logos/navbar/100-years-logo.svg"
                    sx={{
                        maxHeight: "40px"
                    }}
                />
            </Stack>
            <Stack width={"49%"} sx={{
                height: "100%",
                background: "linear-gradient(90deg, #FF6373 0%, #CC1427 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>

            </Stack>
        </Stack>
    ) : (<Stack height={96} direction={"row"}>
        <Stack width={"100%"}
            direction={"row"}
            spacing={1}
            sx={{
                height: "100%",
                background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>
            <Box
                component={"img"}
                src="/images/logos/navbar/department-logo.svg"
                sx={{
                    maxHeight: "30px",
                    width: "20%"
                }}
            />
            <Box
                component={"img"}
                src="/images/logos/navbar/complex-logo.svg"
                sx={{
                    maxHeight: "30px",
                    width: "20%"
                }}
            />
            <Box
                component={"img"}
                src="/images/logos/navbar/moscow-educ-logo.svg"
                sx={{
                    maxHeight: "30px",
                    width: "20%"
                }}
            />
            <Box
                component={"img"}
                src="/images/logos/navbar/mossport-logo.svg"
                sx={{
                    maxHeight: "30px",
                    width: "20%"
                }}
            />
            <Box
                component={"img"}
                src="/images/logos/navbar/100-years-logo.svg"
                sx={{
                    maxHeight: "30px",
                    width: "20%"
                }}
            />
        </Stack>
    </Stack>)
}

export default Navbar