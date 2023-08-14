import { AppBar, Box, Icon, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import effilo from '../images/effilo_logo.webp'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const NavigationBar = () => {
  return (
    <>
      <Box sx={{backgroundColor :  'black' , color : 'white'}}>
        <Typography variant='h6' textAlign='center' sx={{padding:0.5}}>Upto 40% Offer On Launch Sale</Typography>
      </Box>

      <AppBar position='static' color='transparent'>
        <Toolbar>
            <Box sx={{flexGrow : 1}}>
                <IconButton><SearchIcon/></IconButton>
            </Box>
            <Box sx={{flexGrow : 20}}>
                <Stack direction='column' >
                    <Box sx={{display : 'flex' , justifyContent :'center' ,padding:2}}>
                        <img src={effilo} alt='' style={{height:60 }} />
                    </Box><br/>
                    <Box>
                        <Stack direction='row' spacing={3} justifyContent='center'>
                            <Link to='' color='#000000'>Home</Link>
                            <Link to='' color='#000000'>Oversized T-shirt</Link>
                            <Link to='' color='#000000'>Track Order</Link>
                        </Stack>
                    </Box>
                    
                </Stack>
            </Box>
            <Box sx={{flexGrow:1}}>
                <IconButton><LocalMallOutlinedIcon/></IconButton>
            </Box>
            
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavigationBar
