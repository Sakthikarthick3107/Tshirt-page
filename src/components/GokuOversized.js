import { Box, Button, Container, Grid, IconButton, InputAdornment, List, ListItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import {makeStyles} from '@mui/styles'
import React, { useState } from 'react'
import main from '../images/main.webp'
import sub1 from '../images/sub1.webp'
import sub2 from '../images/sub2.webp'
import sub3 from '../images/sub3.webp'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StraightenIcon from '@mui/icons-material/Straighten';
import SizeChart from './SizeChart'

const ImageStyle = makeStyles((theme) => ({
  image: {
    height  :  180 , 
    borderRadius :7,
    transition : 'filter 0.1s ease',
    '&:hover':{
      cursor :'pointer',
      filter: ' brightness(1.5) opacity(0.7)',
    }
  },
  textField:{
            border : 'solid 1px black',
            borderRadius : 6,
            backgroundColor : 'white'
        
    }
}))

const GokuOversized = () => {
  const imageStyle = ImageStyle()
  const [quantity , setQuantity] = useState(1)
  const [activeButton , setActiveButton] = useState('button1')
  const [currentImage , setCurrentImage] = useState(main)
  const isMobile = useMediaQuery('(max-width : 600px)')

    const [ open , setOpen] = useState(false)

  const setActive = (buttonId) =>{
    setActiveButton(buttonId)
  }

  const setActiveImage = (setImage) =>{
    setCurrentImage(setImage)
  }

  const setDrawerOpen = () =>{
    setOpen(true)
  }
  const setDrawerClose = () =>{
    setOpen(false)
  }

  const   MaterialType = [
    '100% Supima Cotton (Made from the Best of 1% Cotton from the World)' ,
    '220 GSM Fabric',
    'Bio Washed Material ',
    'All Over Print',
    'Wrinkle free'

   ]

  


  return (
    <><br/>
      <Box sx={{background : 'linear-gradient(to right, white,#b39ddb  , white)'}}>
        <br/>
        <Typography variant='h3' textAlign='center'>Goku Oversized T-Shirt</Typography>
         <Grid container>
            <Grid item lg={8} md={8} sm={12}>
                <Box sx={{margin : 10}}>
                    <Container maxWidth='xs'>
                     
                        <img src={currentImage} alt=''  style={{  height  : isMobile? 400 : 600 , borderRadius :10}} />
                      
                    </Container>
              
                    <Grid container columnSpacing={ isMobile ? 8 : 0}>
                      <Grid item lg={3} md={4} xs={4}>
                        <img src={main} alt=''   className = {imageStyle.image} onClick={ () => setActiveImage(main)}/>
                      </Grid>
                      <Grid item lg={3} md={4} xs={4}>
                        <img src={sub1} alt='' className = {imageStyle.image} onClick={ () => setActiveImage(sub1)} />
                      </Grid>
                      <Grid item lg={3} md={4} xs={4}>
                        <img src={sub2} alt='' className = {imageStyle.image} onClick={ () => setActiveImage(sub2)}/>
                      </Grid>
                      <Grid item lg={3} md={4} xs={4}>
                        <img src={sub3} alt='' className = {imageStyle.image} onClick={ () => setActiveImage(sub3)}/>
                      </Grid>
                    </Grid>

                </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12}>
                <Box sx={{margin : 5}}><br/><br/>
                    <Stack direction='row' spacing={1}>
                      <Typography variant='h6' sx={{textDecoration :  'line-through'}}>Rs. 1,099.00</Typography>
                      <Typography variant='h6'> Rs. 499.00</Typography>
                    </Stack>
                    <Typography variant='body1'>Tax included .Shipping calculated at checkout</Typography>

                    <form>
                        <Typography variant='body1'>Size</Typography>
                        <Stack direction='row' spacing={1}>
                          <Button variant={activeButton === 'button1' ? 'contained' : 'outlined'} onClick={() => setActive('button1')}>S</Button>
                          <Button variant={activeButton === 'button2' ? 'contained' : 'outlined'} onClick={() => setActive('button2')}>M</Button>
                          <Button variant={activeButton === 'button3' ? 'contained' : 'outlined'} onClick={() => setActive('button3')}>L</Button>
                          <Button variant={activeButton === 'button4' ? 'contained' : 'outlined'} onClick={() => setActive('button4')}>XL</Button>
                          <Button variant={activeButton === 'button5' ? 'contained' : 'outlined'} onClick={() => setActive('button5')}>XXL</Button>
                        </Stack><br/>

                        <Typography variant='body1'>Quantity</Typography>

                        <TextField variant='outlined' value={quantity}  sx={{maxWidth:150 }} className={imageStyle.textField} InputProps={{
                          startAdornment:(
                            <InputAdornment position='start'>
                                <IconButton onClick={() => quantity !==1 ? setQuantity(quantity-1) : 1}><RemoveIcon/></IconButton>
                            </InputAdornment>
                            
                          ),
                          endAdornment:(
                            <InputAdornment position='end'>
                              <IconButton  onClick={() => setQuantity(quantity+1)}><AddIcon/></IconButton>
                            </InputAdornment>
                          )
                        }} />
                        <br/><br/>
                        
                          <Button variant='text' onClick={setDrawerOpen}><StraightenIcon/>Size Chart</Button>
                         

                          <SizeChart open={open} onClose = {setDrawerClose}/>
                        <br/>
                        <Stack direction='column' spacing={2}>
                          <Button variant='outlined'>Add to Cart</Button>
                          <Button variant='contained' type='submit'>Buy Now</Button>
                        </Stack>
                        </form>
                        <br/>
                        <Typography variant='h6' >ED - 01</Typography>
                        <Typography variant='h6' fontWeight='bold'>Material :</Typography>
                        <br/>
                        <List>
                          {MaterialType.map((item , index) => (
                            <ListItem key={index}>
                              <Typography variant = 'inherit'>
                              &ndash; {item}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                        <Typography variant='body1' fontWeight='bold' fontFamily='sans-serif'>5 Days No Question Asked Refund is Accepted (As per the refund policy)</Typography>
                </Box>
            </Grid>
        </Grid>
      </Box>
      <br/>
    </>
  )
}

export default GokuOversized
