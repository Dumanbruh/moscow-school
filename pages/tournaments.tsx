import RegisterBlock from '@/components/main-page-components/register'
import TournamentsBlock from '@/components/tournaments-page-components/tournaments-block'
import Cover from '@/components/ui/cover'
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const TournamentsPage: NextPage = () => {
    const { isDesktop } = useGlobalMediaQuery();

    return (
        <Stack sx={{ width: "100%" }}>
            <Cover />
            <RegisterBlock />
            <TournamentsBlock isDesktop={isDesktop} />
        </Stack>
    )
}

export default TournamentsPage