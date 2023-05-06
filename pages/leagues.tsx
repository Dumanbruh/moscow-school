import BasketballBlock from '@/components/leagues-page-components/basketball-block'
import FootballBlock from '@/components/leagues-page-components/football-block'
import InformationBlock from '@/components/leagues-page-components/information-block'
import PresidentBlock from '@/components/leagues-page-components/president-block'
import useGlobalMediaQuery from '@/hooks/useGlobalMediaQuery'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const LeaguesPage: NextPage = () => {
    const { isDesktop } = useGlobalMediaQuery();
    return (
        <Stack sx={{ width: "100%" }}>
            <InformationBlock isDesktop={isDesktop} />
            <BasketballBlock isDesktop={isDesktop} />
            <PresidentBlock isDesktop={isDesktop} />
            <FootballBlock isDesktop={isDesktop} />
        </Stack>
    )
}

export default LeaguesPage