import { Record } from "@/mongo/models/record";
import axios from "axios";
import { useAxiosHandler } from "@/hooks/handlers/handleAxios";
import { Setting } from "@/mongo/models/setting";
import { WithId } from "mongodb";

interface SettingProps {
  id: string;
  available: boolean;
}

export const useSettings = () => {
  const { handleAxios } = useAxiosHandler();
  //   const { updateSnackbar } = useSnackbar();

  const updateSetting = (setting: SettingProps) => {
    handleAxios(axios.put(`/api/settings`, setting));
  };

  const getSetting = async () => {
    return axios.get<WithId<Setting>>(`/api/settings`);
  };

  return {
    updateSetting,
    getSetting,
  };
};
