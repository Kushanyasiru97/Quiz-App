import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function Login() {
  return (
    <Box sx={
        
    }>
    <form noValidate autoComplete='off'>
        <TextField
        label = "Email"
        name='email'
        variant='outlined' />

<TextField
        label = "Name"
        name='name'
        variant='outlined' />

        <Button
        type='submit'
        variant='contained'
        size='large'>Start</Button>
    </form>
    </Box>
  )
}
