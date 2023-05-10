import { Alert, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import CustomBtnSubmit from '../ui/custom-btn-submit';
import { Record } from '@/mongo/models/record';
import axios from 'axios';
import * as Yup from "yup";
import { useRecords } from '@/hooks/useRecords';

interface Props {
    isDesktop: boolean
}

const MainPageForm = ({ isDesktop }: Props) => {
    const initialValues: Record = {
        email: "",
        name: "",
        date: new Date(),
        arrived: false
    };

    const [isSubmitted, setIsSubmitted] = useState(false);
    const { addRecord } = useRecords();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Неправильная почта').required('Поле должно быть заполнено'),
            name: Yup.string().required('Поле должно быть заполнено'),
        }),
        onSubmit: (values) => {
            addRecord(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={"24px"} sx={{ minWidth: isDesktop ? "446px" : "100%" }}>
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
                    <CustomBtnSubmit title='ПОЛУЧИТЬ ПОДАРОК' height='70px' minWidth={isDesktop ? "309px" : "209px"} disabled={isSubmitted} />
                </Stack>
            </Stack>
        </form>
    )
}

export default MainPageForm