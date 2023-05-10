import FindRecordButton from '@/components/admin-page-components/find-record-btn';
import SecretForm from '@/components/forms/secret-form';
import { useAdmin } from '@/contexts/admin-context';
import { useDisclosure } from '@/hooks/disclosure';
import { useRecords } from '@/hooks/useRecords';
import { Record } from '@/mongo/models/record';
import { Button, Container, Dialog, DialogContent, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import moment from 'moment-timezone';
import { WithId } from 'mongodb';
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

const Admin: NextPage = () => {
    const { status, signOut, role } = useAdmin();
    const { isOpen, open, close } = useDisclosure(true);
    const { getAllRecords, deleteRecord } = useRecords();
    const [rows, setRows] = React.useState<WithId<Record>[]>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (status === "unauthenticated") {
            open();
        } else {
            close();
        }
    }, [close, open, status]);

    React.useEffect(() => {
        getAllRecords()
            .then((res) => setRows(res.data))
    }, [loading])


    return (
        <>
            <Container maxWidth="lg">

                <Stack spacing="40px">
                    <Typography variant='header' sx={{ color: "black", fontSize: "80px", textAlign: "center" }}>Панель админа</Typography>

                    {(role === "staff" || role === "admin") && <FindRecordButton />}

                    <Button onClick={signOut}>
                        Выйти
                    </Button>

                    {(role === "admin") &&
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Почта</TableCell>
                                        <TableCell align="right">Имя</TableCell>
                                        <TableCell align="right">Дата подачи</TableCell>
                                        <TableCell align="right">Присутствует</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.email}
                                            </TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{moment(row.date).tz("Europe/Moscow").format("lll")}</TableCell>
                                            <TableCell align="right">
                                                {row.arrived ? "✅" : "✖"}
                                            </TableCell>
                                            <TableCell >
                                                <Button variant="contained" sx={{ background: "red" }} onClick={() => {
                                                    deleteRecord(String(row._id));
                                                    setLoading(!loading);
                                                }}>Удалить заявку</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </Stack>
            </Container >
            <Dialog onClose={close} open={isOpen}>
                <DialogContent>
                    <SecretForm />
                </DialogContent>
            </Dialog>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const removeFooter = true;
    const removeNavbar = true;


    return {
        props: { removeFooter, removeNavbar },
    };
};

export default Admin;