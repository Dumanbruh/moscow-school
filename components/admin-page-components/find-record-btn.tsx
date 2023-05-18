import { ChangeEvent, useState } from "react";
import { WithId } from "mongodb";
import { useDisclosure } from "@/hooks/disclosure";
import { useRecords } from "@/hooks/useRecords";
import { Record } from "@/mongo/models/record";
import { Button, Input, Modal, Stack, Typography } from "@mui/material";
import moment from "moment-timezone";
import { useSnackbar } from "@/contexts/snackbar-context";

const FindRecordButton = () => {
    const { isOpen, open, close } = useDisclosure(false);
    const { getRecordByData, validateRecord } = useRecords();
    const [code, setCode] = useState("");
    const [record, setRecord] = useState<WithId<Record> | null>(null);
    const { updateSnackbar } = useSnackbar();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value);
    };

    const handleValidate = () => {
        if (!record) return;
        validateRecord(record._id.toString());
        handleClear();
        close();
    };

    const handleClose = () => {
        handleClear()
        close();
    }

    const handleSearch = () => {
        getRecordByData(code)
            .then((record) => {
                setRecord(record);
            })
            .catch((err) => {
                setCode("");
                setRecord(null);
                if (err.response) {
                    updateSnackbar(
                        true,
                        'error',
                        err.response.data,
                    )
                } else {
                    updateSnackbar(
                        true,
                        'error',
                        err.message,
                    )
                }
            });
    };

    const handleClear = () => {
        setRecord(null);
        setCode("");
    };

    return (
        <>
            <Button onClick={open} variant="outlined">
                Найти по коду
            </Button>

            <Modal open={isOpen} onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <>
                    <Stack sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }} spacing={3}>
                        <Input
                            name="code"
                            onChange={handleChange}
                            value={code}
                            placeholder="Код"
                            type={"number"}
                        />

                        <Button onClick={handleSearch}>Поиск</Button>
                        {record && (
                            <>

                                <Typography variant="body">Имя: {record.name}</Typography>
                                <Typography variant="body">Email: {record.email}</Typography>
                                <Typography variant="body">
                                    Дата записи: {moment(record.date).tz("Europe/Moscow").format("lll")}
                                </Typography>
                                <Typography variant="body" sx={{ color: record.arrived ? "green" : "red" }}>
                                    Статус: {record.arrived ? "Прибыл" : "Не прибыл"}
                                </Typography>
                                <Typography variant="body">Код: {record.code}</Typography>
                                {!record.arrived && (
                                    <Button onClick={handleValidate}>Подтвердить</Button>
                                )}

                            </>
                        )}
                    </Stack>
                </>
            </Modal>
        </>
    );
};

export default FindRecordButton;