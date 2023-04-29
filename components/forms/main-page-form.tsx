import { Button, FormControl, FormHelperText, FormLabel, Input, InputLabel, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik'
import React from 'react'
import CustomBtn from '../ui/custom-btn-submit';
import CustomBtnSubmit from '../ui/custom-btn-submit';


interface FormValues {
    email: string;
    name: string;
}

interface Props {
    isDesktop: boolean
}

const MainPageForm = ({ isDesktop }: Props) => {
    const initialValues: FormValues = {
        email: "",
        name: ""
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
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
                    />
                </Stack>
                <Stack sx={{ width: "100%", alignItems: "center" }}>
                    <CustomBtnSubmit title='ПОЛУЧИТЬ ПОДАРОК' height='70px' minWidth={"309px"} />
                </Stack>
            </Stack>
        </form>
    )
}

export default MainPageForm