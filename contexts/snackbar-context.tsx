import { createContext, useState, useContext, SyntheticEvent } from "react";
import { Snackbar, Alert, useMediaQuery, AlertColor, SnackbarCloseReason } from "@mui/material";

const SnackbarContext = createContext({
    message: "",
    severity: "",
    open: false,
    updateOpen: (state: boolean) => { },
    updateSnackbar: (state: boolean, severity: AlertColor, message: string) => { },
});

export function useSnackbar() {
    return useContext(SnackbarContext);
}

export function SnackbarProvider(props: any) {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertColor>("info");
    const [message, setMessage] = useState("");

    function updateOpen(state: boolean) {
        setOpen(state);
    }
    const handleClose = (event: Event | SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }

        updateOpen(false);
    };

    async function updateSnackbar(state: boolean, severity: AlertColor, message: string) {
        setSeverity(severity);
        setMessage(message);
        setOpen(state);
    }

    const context: any = {
        updateSnackbar,
    };

    return (
        <SnackbarContext.Provider value={context}>
            {props.children}
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert
                    onClose={e => handleClose(e)}
                    severity={severity}
                >
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
}
