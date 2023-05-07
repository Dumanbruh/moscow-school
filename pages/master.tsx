import RegisterBlock from '@/components/main-page-components/register'
import MasterBlock from '@/components/master-page-components/master-block'
import Cover from '@/components/ui/cover'
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const MasterPage: NextPage = () => {
    const { isDesktop } = useGlobalMediaQuery();

    return (
        <Stack sx={{ width: "100%" }}>
            <Cover />
            <RegisterBlock />
            <MasterBlock isDesktop={isDesktop} />
        </Stack>
    )
}

export default MasterPage