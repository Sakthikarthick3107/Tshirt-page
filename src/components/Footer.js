import { Divider, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material'
import {makeStyles} from '@mui/styles'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const styleTextField = makeStyles((theme) => ({
    textField:{
                                       
                    '& .MuiInputBase-input': {
                        color: 'white', 
                        fontStyle:'italic',
                        
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#f0f0f0',
                          borderRadius :15,
                        },
                        '&:hover fieldset': {
                            borderColor: '#f0f0f0', 
                            
                          },
                      },
                      '& label': {
                        color: '#f0f0f0',
                        
                      },
                },
    
}))

const Footer = () => {
    const box = styleTextField()
  return (
    <>
      <Box sx={{backgroundColor:'black' ,color:'white'}}>
        <br/>
        <Typography variant='h5' textAlign='center'>Join our email list</Typography>
        <form><br/>
            <Container maxWidth='xs'>
                <TextField variant='outlined' color='primary' label='Email' fullWidth className={box.textField}
                        InputProps={{
                            endAdornment:(
                                <InputAdornment position='end'>
                                    <IconButton color='primary' type='submit'><EastOutlinedIcon/></IconButton>
                                </InputAdornment>
                            )
                        }} />
            </Container>
            <br/><br/>
        </form>

        <Divider /><br/><br/>

        <Stack direction='row' justifyContent='center' >
            <Typography variant='body2' color='white'  padding={2} fontFamily='sans-serif'>
                @ 2023&nbsp;,&nbsp;
                <Link to=''>Effilo</Link> - 
                <Link to=''>Powered by Shopify</Link>&nbsp;.
                &nbsp;<Link to=''>Refund Policy</Link>&nbsp;.     
                &nbsp; <Link to=''>Privacy Policy</Link>&nbsp;.
                &nbsp;<Link to=''>Terms of Service</Link>&nbsp;.
                &nbsp;<Link to=''>Shipping Policy</Link>&nbsp;.
                &nbsp; <Link to=''>Contact Information</Link>
            </Typography>
        </Stack>
        <br/><br/>
      </Box>
    </>
  )
}

export default Footer
