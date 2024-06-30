import { Box, Typography } from '@mui/material'
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
    const error=useRouteError();
    console.log(error)
  return (
    <Box style={{maginLeft:250}}>
        <Typography>
            There was an error loading the page
        </Typography>
    </Box>
  )
}

export default ErrorComponent