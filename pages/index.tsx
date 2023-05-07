import Cover from "@/components/ui/cover";
import RegisterBlock from "@/components/main-page-components/register";
import useGlobalMediaQuery from "@/hooks/useGlobalMediaQuery";
import { Stack } from "@mui/system";
import InformationBlock from "@/components/main-page-components/information-block";
import MapBlock from "@/components/main-page-components/map-block";
import FestivalesBlock from "@/components/main-page-components/festivales-block";
import ScheduleBlock from "@/components/main-page-components/schedule-block";
import PreviewCover from "@/components/ui/preview-cover";
import PreviewRegister from "@/components/ui/preview-register";


export default function Home() {
  // const { isDesktop } = useGlobalMediaQuery();

  return (
    <Stack width={"100%"}>
      <PreviewCover />
      <PreviewRegister />
    </Stack>
  )
}
