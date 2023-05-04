import InformationBlock from '@/components/gto-page-components/information-block'
import SpringBlock from '@/components/gto-page-components/spring-block'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const GtoPage: NextPage = () => {
    return (
        <Stack sx={{ width: "100%" }}>
            <InformationBlock />
            <SpringBlock />
        </Stack>
    )
}

export default GtoPage