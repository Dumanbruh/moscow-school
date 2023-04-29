import { Button } from '@mui/material'
import React from 'react'

interface Props {
    title: string;
    height: string;
    minWidth: string;
    disabled: boolean;
}

const CustomBtnSubmit = ({ title, height, minWidth, disabled }: Props) => {
    return (
        <Button disabled={disabled} sx={{ height: height, background: "linear-gradient(266.01deg, #DE3042 -38.53%, #FD5F6F 111.85%)", borderRadius: "8px", fontFamily: "Gotham Pro Bold", fontSize: "18px", color: "white", minWidth: minWidth }} type="submit">{title}</Button>
    );
}

export default CustomBtnSubmit