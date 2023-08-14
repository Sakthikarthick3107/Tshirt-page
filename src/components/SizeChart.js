import { Dialog, IconButton, Typography } from '@mui/material'
import React from 'react'
import sizeChart  from '../images/sizechart.webp'
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Stack } from '@mui/system';

const SizeChart = ({ open , onClose }) => {
  return (
    <>
      <Dialog open={open} onClose = {onClose}>
        <br/>
        <Stack direction='row' justifyContent='space-between'>
            <Box></Box>
            <Typography variant='h6' textAlign='center'>Oversized Tees</Typography>
            <IconButton onClick={onClose}><ClearIcon /></IconButton>
            
        </Stack>
        <img src={sizeChart} alt='' style={{height:600 ,width:600}}/>   
      </Dialog>
    </>
  )
}

export default SizeChart
