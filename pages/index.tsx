import Cover from "@/components/main-page-components/cover";
import RegisterBlock from "@/components/main-page-components/register";
import useGlobalMediaQuery from "@/hooks/useGlobalMediaQuery";
import { Stack } from "@mui/system";


export default function Home() {
  const { isDesktop } = useGlobalMediaQuery();


  return (
    <>
      <Cover isDesktop={isDesktop} />
      <RegisterBlock isDesktop={isDesktop} />
    </>
  )
}
