import React from 'react'
import { useDisclosure } from "@/hooks/disclosure";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRecords } from "@/hooks/useRecords";
import CustomBtnSubmit from "../ui/custom-btn-submit";
import { Record } from "@/mongo/models/record";
import {
    Dialog,
    DialogContent,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import CustomBtn from '../ui/custom-btn';

interface RecordProps {
    isDesktop: boolean;
    isViewer: boolean;
}

const RecordForm = ({ isDesktop, isViewer }: RecordProps) => {
    const { isOpen, open, close } = useDisclosure(false);

    const initialValues: Record = {
        email: "",
        name: "",
        date: new Date(),
        arrived: false
    };

    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const { addRecord } = useRecords();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Неправильная почта').required('Поле должно быть заполнено'),
            name: Yup.string().required('Поле должно быть заполнено'),
        }),
        onSubmit: (values) => {
            addRecord(values);
            setIsSubmitted(true);
            close();
        },
    });

    return (
        <>
            {isViewer ? (<CustomBtn
                height='96px'
                bg='white'
                onClick={() => {
                    open();
                }} minWidth='255px'>
                <Typography variant='body' sx={{ color: "#563F42", fontSize: "18px" }}>БУДУ ЗРИТЕЛЕМ</Typography>
            </CustomBtn>) : (<CustomBtn
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
            </CustomBtn>)}

            <Dialog onClose={close} open={isOpen}>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
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
                                    title="Отправить"
                                    height="70px"
                                    minWidth={"309px"}
                                    disabled={isSubmitted}
                                />
                            </Stack>
                        </Stack>
                    </form>
                </DialogContent>
            </Dialog>
        </>

    )
}

export default RecordForm