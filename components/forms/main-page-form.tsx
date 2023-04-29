import { Alert, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import CustomBtnSubmit from '../ui/custom-btn-submit';
import { Form } from '@/models/form';
import axios from 'axios';
import { useSnackbar } from '@/hooks/useSnackbar';
import * as Yup from "yup";

interface Props {
    isDesktop: boolean
}

const MainPageForm = ({ isDesktop }: Props) => {
    const initialValues: Form = {
        email: "",
        name: ""
    };

    const { openSnackbar, closeSnackbar, open, message } = useSnackbar();
    const [isSubmitted, setIsSubmitted] = useState(false);


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Неправильная почта').required('Поле должно быть заполнено'),
            name: Yup.string().required('Поле должно быть заполнено'),
        }),
        onSubmit: (values) => {
            axios.post("/api/form", values)
                .then((res) => {
                    openSnackbar("Вы успешно зарегистрировались!")
                })
                .finally(() => {
                    setIsSubmitted(true)
                });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={"24px"} sx={{ minWidth: isDesktop ? "446px" : "100%", display: "block" }}>
                <Stack spacing={"6px"}>
                    <Typography variant='fieldHeader' sx={{ fontSize: "24px" }}>
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
                                borderRadius: "3px"
                            },
                        }}
                        disabled={isSubmitted}
                    />
                </Stack>

                <Stack spacing={"6px"}>
                    <Typography variant='fieldHeader' sx={{ fontSize: "24px" }}>
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
                                borderRadius: "3px"
                            },
                        }}
                        disabled={isSubmitted}
                    />
                </Stack>
                <Stack sx={{ width: "100%", alignItems: "center" }}>
                    <CustomBtnSubmit title='ПОЛУЧИТЬ ПОДАРОК' height='70px' minWidth={"309px"} disabled={isSubmitted} />
                </Stack>
            </Stack>
            <Snackbar open={open} autoHideDuration={6000} onClose={closeSnackbar}>
                <Alert onClose={closeSnackbar} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </form>
    )
}

export default MainPageForm