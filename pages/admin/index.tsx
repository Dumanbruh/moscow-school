import FindRecordButton from '@/components/admin-page-components/find-record-btn';
import SecretForm from '@/components/forms/secret-form';
import { useAdmin } from '@/contexts/admin-context';
import { useDisclosure } from '@/hooks/disclosure';
import { useRecords } from '@/hooks/useRecords';
import { useSettings } from '@/hooks/useSettings';
import { Record } from '@/mongo/models/record';
import { Setting } from "@/mongo/models/setting";
import { Box, Button, Checkbox, Container, Dialog, DialogContent, Paper, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from '@mui/material';
import moment from 'moment-timezone';
import { ObjectId, WithId } from 'mongodb';
import { GetStaticProps, NextPage } from 'next'
import React from 'react'


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Admin: NextPage = () => {
    const { status, signOut, role } = useAdmin();
    const { isOpen, open, close } = useDisclosure(true);
    const { getAllRecords, deleteRecord } = useRecords();
    const { getSetting, updateSetting } = useSettings();



    const [rows, setRows] = React.useState<WithId<Record>[]>([]);
    const [available, setAvailable] = React.useState<WithId<Setting>>();
    const [loading, setLoading] = React.useState(false);
    const [countByDate, setCountByDate] = React.useState<Map<string, number>>(new Map());
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    React.useEffect(() => {
        if (status === "unauthenticated") {
            open();
        } else {
            close();
        }
    }, [close, open, status]);

    React.useEffect(() => {
        getAllRecords()
            .then((res) => {
                setRows(res.data)
            })
        getSetting()
            .then((res) => {
                setAvailable(res.data)
            })
    }, [loading])


    React.useEffect(() => {
        const newCountByDate = new Map<string, number>();

        for (const row of rows) {
            const dateString = String(row.date).split('T')[0];

            if (newCountByDate.has(dateString)) {
                const count = newCountByDate.get(dateString)!;
                newCountByDate.set(dateString, count + 1);
            } else {
                newCountByDate.set(dateString, 1);
            }
        }

        setCountByDate(newCountByDate);
    }, [rows]);

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }


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
                        (<>
                            <Tabs
                                value={tabValue}
                                onChange={handleChange}
                                aria-label="wrapped label tabs example"
                            >
                                <Tab
                                    value={0}
                                    label="Заявки"
                                />
                                <Tab value={1} label="Статистика" />
                                <Tab value={2} label="Настройка" />
                            </Tabs>
                            <TabPanel value={tabValue} index={0}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="users table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Почта</TableCell>
                                                <TableCell align="right">Имя</TableCell>
                                                <TableCell align="right">Дата подачи</TableCell>
                                                <TableCell align="right">Присутствует</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row, i) => (
                                                <TableRow
                                                    key={i}
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
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="statistics table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Дата</TableCell>
                                                <TableCell>Записалось за день</TableCell>
                                                <TableCell>Всего</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {Array.from(countByDate).map(([key, value], i) =>
                                            (
                                                <TableRow
                                                    key={i}
                                                >
                                                    <TableCell>{key}</TableCell>
                                                    <TableCell component="th" scope="row">
                                                        {value}
                                                    </TableCell>
                                                    <TableCell>{rows.length}</TableCell>
                                                </TableRow>
                                            )
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                            <TabPanel value={tabValue} index={2}>
                                <Typography variant='body'>{"Доступ к регистраций пользователей"}</Typography>
                                <Checkbox checked={available?.available} onChange={(e) => {
                                    setLoading(!loading);
                                    updateSetting({ id: String(available?._id), available: e.target.checked })
                                }} />
                                <Typography variant='body'>{available?.available ? 'ДА' : 'НЕТ'}</Typography>
                            </TabPanel>
                        </>)
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