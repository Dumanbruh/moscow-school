import MasterBlock from '@/components/master-page-components/master-block'
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const MasterPage: NextPage = () => {
    const { isDesktop } = useGlobalMediaQuery();

    return (
        <Stack sx={{ width: "100%" }}>
            <MasterBlock isDesktop={isDesktop} />
        </Stack>
    )
}

export default MasterPage