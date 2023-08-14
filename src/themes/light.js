import { createTheme } from "@mui/material";


const light = createTheme({
    shadows:['none'],
    typography:{
        fontFamily:'Times New Roman'
    },
    palette:{
        primary:{
            main : '#f0f0f0'
        }
    },
    components:{

        MuiLink:{
            styleOverrides:{
                root:{
                    textDecoration:'none',
                    
                    ":hover":{
                        textDecoration:'underline',
                        cursor:'pointer'
                    }
                }
            }
        },

        MuiButton:{
            styleOverrides:{
                root:{
                    height : '45px',
                    borderRadius : 8,
                
                },
                contained : {
                        backgroundColor : 'black',
                        color : 'white',
                        ":hover" : {
                            backgroundColor : 'black',
                            border : 'solid 2px black'
                        }
                        
                },
                outlined : {
                        backgroundColor : 'white',
                        color : 'black',
                        border : 'black solid 0.5px',
                        ":hover":{
                            backgroundColor :  'white'
                        }
                },
                text:{
                    color:'black',
                    ":hover":{
                        textDecoration:'underline'
                    }
                }
            }
        },
        MuiDivider:{
            styleOverrides:{
                root:{
                    backgroundColor:'rgb(255,255,255,0.1)'
                }
            }
        }
        

        
    }
})

export default light