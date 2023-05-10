import { useAdmin } from "@/contexts/admin-context";
import { Alert, AlertTitle, Button, FormControl, FormLabel, Input, Stack, TextField, Typography } from "@mui/material";
import { Field, FieldInputProps, Form, Formik, FormikProps, useFormik } from "formik";
import CustomBtnSubmit from "../ui/custom-btn-submit";

interface FormValues {
    secret: string;
}

const SecretForm = () => {
    const { signIn } = useAdmin();

    const initialValues: FormValues = {
        secret: ""
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values, actions) => {
            signIn(values.secret);

            actions.setSubmitting(false);
        },
    });



    return (
        <form onSubmit={formik.handleSubmit} style={{ width: 500 }}>
            <Stack spacing={"24px"}>
                <Stack spacing={"6px"}>
                    <Typography variant='fieldHeader' sx={{ fontSize: "24px" }}>
                        Secret
                    </Typography>
                    <TextField
                        fullWidth
                        id="secret"
                        name="secret"
                        value={formik.values.secret}
                        onChange={formik.handleChange}
                        error={formik.touched.secret && Boolean(formik.errors.secret)}
                        helperText={formik.touched.secret && formik.errors.secret}
                        sx={{
                            input: {
                                background: "white",
                                border: "1px solid #C4C4C4",
                                borderRadius: "3px",
                            },
                        }}
                    />
                    <Button type="submit">
                        Войти
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

export default SecretForm;
