import Cover from "@/components/ui/cover";
import RegisterBlock from "@/components/main-page-components/register";
import useGlobalMediaQuery from "@/hooks/useGlobalMediaQuery";
import { Stack } from "@mui/system";
import InformationBlock from "@/components/main-page-components/information-block";
import MapBlock from "@/components/main-page-components/map-block";
import FestivalesBlock from "@/components/main-page-components/festivales-block";
import ScheduleBlock from "@/components/main-page-components/schedule-block";
import { NextPage } from "next";


const PreviewPage: NextPage = () => {
    const { isDesktop } = useGlobalMediaQuery();

    return (
        <Stack width={"100%"}>
            <Cover />
            <RegisterBlock />
            <InformationBlock isDesktop={isDesktop} />
            <MapBlock isDesktop={isDesktop} />
            <FestivalesBlock isDesktop={isDesktop} />
            <ScheduleBlock isDesktop={isDesktop} />
        </Stack>
    )
}

export default PreviewPage;