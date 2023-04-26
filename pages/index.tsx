import Cover from "@/components/main-page-components/cover";
import RegisterBlock from "@/components/main-page-components/register";
import useGlobalMediaQuery from "@/hooks/useGlobalMediaQuery";


export default function Home() {
  const { isDesktop } = useGlobalMediaQuery();


  return (
    <>
      <Cover isDesktop={isDesktop} />
      <RegisterBlock isDesktop={isDesktop}  />
    </>
  )
}
