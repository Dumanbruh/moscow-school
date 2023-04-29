import { useState } from "react";

export const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openSnackbar = (newMessage: string) => {
    setMessage(newMessage);
    setOpen(true);
  };

  const closeSnackbar = (
    event?: Event | React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return { openSnackbar, closeSnackbar, open, message };
};
