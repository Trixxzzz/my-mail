import { Box, Divider, Typography, styled } from '@mui/material'
import React from 'react'

const Component = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    opacity: .8,
});

const StyledDivider = styled(Divider)({
    width: '100%',
    marginTop: 10
})

const NoMails = ({ message = { heading: 'No Mails', subHeading: 'No new mails to display' } })=> {
  return (
    <Component>
        <Typography>
            {message.heading}
        </Typography>
        <Typography>
            {message.subHeading}
        </Typography>
        <StyledDivider/>
    </Component>
  )
}

export default NoMails