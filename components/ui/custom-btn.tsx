import { Button } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode | ReactNode[];
    height: string;
    minWidth?: string;
    bg: string;
    onClick: () => void
}

const CustomBtn = ({ children, height, minWidth, bg, onClick }: Props) => {
    return (
        <Button
            sx={{
                height: height,
                background: bg,
                borderRadius: "8px",
                minWidth: minWidth ? minWidth : "100%",
            }}
            onClick={onClick}
        >{children}</Button>
    )
}

export default CustomBtn