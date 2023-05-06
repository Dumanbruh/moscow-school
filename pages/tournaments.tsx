import TournamentsBlock from '@/components/tournaments-page-components/tournaments-block'
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const TournamentsPage: NextPage = () => {
    const { isDesktop } = useGlobalMediaQuery();

    return (
        <Stack sx={{ width: "100%" }}>
            <TournamentsBlock isDesktop={isDesktop} />
        </Stack>
    )
}

export default TournamentsPage