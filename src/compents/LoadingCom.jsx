import { Box } from '@mui/material'
import React from 'react'

const LoadingCom = () => {
    return (
        <Box
            bgcolor='background.default'
            sx={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                height:'90vh'
            }}
        >
            <Box className="lds-roller">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </Box>
        </Box>
    )
}

export default LoadingCom