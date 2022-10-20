import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Typography } from '@mui/material';
const ErrorCom = ({err}) => {
  return (
    <Box
      bgcolor='background.default'
      sx={{
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        height:'90vh'
      }}
    >
      <ErrorOutlineIcon sx={{fontSize:'40px', color:'#FC1503'}} />
      <Typography variant='h5' mt={2}>
        {err}
      </Typography>
    </Box>
  )
}

export default ErrorCom