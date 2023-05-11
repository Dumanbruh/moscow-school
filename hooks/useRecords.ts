import { Record } from "@/mongo/models/record";
import axios from "axios";
import { WithId } from "mongodb";
import { useAxiosHandler } from "@/hooks/handlers/handleAxios";
import { useSnackbar } from "@/contexts/snackbar-context";

export const useRecords = () => {
  const { handleAxios } = useAxiosHandler();
  const { updateSnackbar } = useSnackbar();

  const addRecord = (record: Record) => {
    handleAxios(axios.post(`/api/records`, record));
  };

  const getAllRecords = async () => {
    return axios.get<WithId<Record>[]>(`/api/records`);
  };

  const deleteRecord = (recordId: string) => {
    handleAxios(axios.delete(`/api/records/${recordId}`));
  };

  const getRecordByData = async (code: string) => {
    const res = await axios.get<WithId<Record>>(`/api/records/validation`, {
      params: { code },
    });

    if (res.data === null) {
      updateSnackbar(true, "error", "Ничего не было найдено");
    }
    return res.data;
  };

  const validateRecord = (recordId: string) => {
    handleAxios(
      axios.patch(`/api/records/validation`, null, { params: { recordId } })
    );
  };

  return {
    addRecord,
    getAllRecords,
    getRecordByData,
    validateRecord,
    deleteRecord,
  };
};
