import {
    Box,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import useGlobalMediaQuery from "@/hooks/useGlobalMediaQuery";
import CustomBtn from "../ui/custom-btn";
import { useDisclosure } from "@/hooks/disclosure";
import MainPageForm from "../forms/main-page-form";

const RegisterBlock = () => {
    const { isDesktop } = useGlobalMediaQuery();

    const { isOpen, open, close } = useDisclosure(false);

    return (
        <>
            {isDesktop ? (
                <Box
                    height={500}
                    sx={{
                        width: "100%",
                        position: "relative",
                        background:
                            "linear-gradient(90.35deg, #FFD324 -71.13%, #FF9A08 39.11%, #FDAA4A 99.56%)",
                    }}
                >
                    <Box
                        component={"img"}
                        sx={{ position: "absolute", left: 0, top: 0 }}
                        src={"images/bg/desktop/reg/reg-top.png"}
                    />
                    <Box
                        component={"img"}
                        sx={{ position: "absolute", right: 0, bottom: 0 }}
                        src={"images/bg/desktop/reg/reg-bottom.png"}
                    />
                    <Container disableGutters sx={{ px: "40px", pt: "90px" }}>
                        <Stack
                            direction={"row"}
                            sx={{ width: "100%", height: "100%" }}
                            spacing={"60px"}
                        >
                            <Box
                                component={"img"}
                                src={"images/logos/form/present-logo.png"}
                                sx={{ pl: "110px", maxHeight: "248px" }}
                            />

                            <Stack
                                spacing={"23px"}
                                sx={{
                                    alignItems: "center",
                                }}
                            >
                                <Box sx={{ maxWidth: "671px" }}>
                                    <Typography
                                        variant="formHeader"
                                        sx={{
                                            fontSize: "36px",
                                            lineHeight: "60px",
                                            whiteSpace: "pre-line",
                                        }}
                                    >
                                        {`19 МАЯ
                        ШКОЛЬНЫЙ ПРАЗДНИК СПОРТА`}
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body"
                                    sx={{
                                        fontSize: "24px",
                                        color: "#30303E",
                                        lineHeight: "32px",
                                        whiteSpace: "pre-line",
                                    }}
                                >
                                    {`Приходи и получи подарок от Московского спорта`}
                                </Typography>
                                <Stack spacing={"15px"}>
                                    <CustomBtn
                                        height="70px"
                                        bg="linear-gradient(266.01deg, #DE3042 -38.53%, #FD5F6F 111.85%)"
                                        onClick={() => {
                                            open();
                                        }}
                                        minWidth="309px"
                                    >
                                        <Typography
                                            variant="footerHeader"
                                            sx={{ color: "white", fontSize: "18px" }}
                                        >
                                            ПОЛУЧИТЬ ПОДАРОК
                                        </Typography>
                                    </CustomBtn>
                                    <Typography
                                        variant="fieldHeader"
                                        sx={{ color: "#30303E", fontSize: "16px" }}
                                    >
                                        *количество подарков ограничено
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            ) : (
                <Box
                    minHeight={900}
                    sx={{
                        width: "100%",
                        position: "relative",
                        background:
                            "linear-gradient(90.35deg, #FFD324 -71.13%, #FF9A08 39.11%, #FDAA4A 99.56%)",
                    }}
                >
                    <Box
                        component={"img"}
                        sx={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }}
                        src={"images/bg/mobile/reg/reg-bottom.png"}
                    />
                    <Stack
                        spacing={"16px"}
                        sx={{
                            width: "100%",
                            heigth: "100%",
                            alignItems: "center",
                            pt: "118px",
                            px: "60px",
                            pb: "127px",
                        }}
                    >
                        <Stack
                            sx={{ textAlign: "right", width: "100%", alignItems: "flex-end" }}
                        >
                            <Typography
                                variant="formHeader"
                                sx={{
                                    fontSize: "32px",
                                    lineHeight: "38px",
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {`19 МАЯ
                        ШКОЛЬНЫЙ ПРАЗДНИК 
                        СПОРТА`}
                            </Typography>
                        </Stack>
                        <Stack
                            sx={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                component={"img"}
                                src={"/images/logos/form/present-logo.png"}
                            />
                        </Stack>
                        <Typography
                            variant="body"
                            sx={{
                                fontSize: "24px",
                                color: "#30303E",
                                lineHeight: "32px",
                                whiteSpace: "pre-line",
                            }}
                        >
                            {`Приходи и получи подарок от Московского спорта`}
                        </Typography>
                        <Stack spacing={"15px"}>
                            <CustomBtn
                                height="70px"
                                bg="linear-gradient(266.01deg, #DE3042 -38.53%, #FD5F6F 111.85%)"
                                onClick={() => {
                                    open();
                                }}
                                minWidth="309px"
                            >
                                <Typography
                                    variant="footerHeader"
                                    sx={{ color: "white", fontSize: "18px" }}
                                >
                                    ПОЛУЧИТЬ ПОДАРОК
                                </Typography>
                            </CustomBtn>
                            <Typography
                                variant="fieldHeader"
                                sx={{ color: "#30303E", fontSize: "16px" }}
                            >
                                *количество подарков ограничено
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            )}


            <Dialog onClose={close} open={isOpen}>
                <DialogContent>
                    {/* <form onSubmit={formik.handleSubmit}>
                        <Stack
                            spacing={"24px"}
                            sx={{ minWidth: isDesktop ? "446px" : "100%", display: "block" }}
                        >
                            <Stack spacing={"6px"}>
                                <Typography variant="fieldHeader" sx={{ fontSize: "24px" }}>
                                    E-mail
                                </Typography>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    sx={{
                                        input: {
                                            background: "white",
                                            border: "1px solid #C4C4C4",
                                            borderRadius: "3px",
                                        },
                                    }}
                                    disabled={isSubmitted}
                                />
                            </Stack>

                            <Stack spacing={"6px"}>
                                <Typography variant="fieldHeader" sx={{ fontSize: "24px" }}>
                                    Ваше имя
                                </Typography>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    type="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    sx={{
                                        input: {
                                            background: "white",
                                            border: "1px solid #C4C4C4",
                                            borderRadius: "3px",
                                        },
                                    }}
                                    disabled={isSubmitted}
                                />
                            </Stack>
                            <Stack sx={{ width: "100%", alignItems: "center" }}>
                                <CustomBtnSubmit
                                    title="ПОЛУЧИТЬ ПОДАРОК"
                                    height="70px"
                                    minWidth={"309px"}
                                    disabled={isSubmitted}
                                />
                            </Stack>
                        </Stack>
                    </form> */}
                    <MainPageForm isDesktop={isDesktop} />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default RegisterBlock;
