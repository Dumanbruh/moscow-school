import { useSnackbar } from "@/contexts/snackbar-context";
import { AxiosResponse } from "axios";

export const useAxiosHandler = () => {
    const { updateSnackbar } = useSnackbar();


    const handleAxios = async (promise: Promise<AxiosResponse<any, any>>) => {
        return promise
            .then((res) => {
                updateSnackbar(
                    true,
                    "success",
                    res.data
                )

            })
            .catch((err) => {
                if (err.response) {
                    updateSnackbar(
                        true,
                        "error",
                        err.response.data
                    )
                } else {
                    updateSnackbar(
                        true,
                        "error",
                        err.message
                    )
                }
            });
    };

    return { handleAxios };
};

