
  import {Text,Box,Button,Heading} from "@chakra-ui/react"

 
  import React from "react"
import { useState } from "react"
import { PinInput, PinInputField } from '@chakra-ui/react'
import { Link } from "react-router-dom"


export default function LoginVerification() {
        const [popup,setPopup]=useState(true)
 
    // alert("hi")
    const val = Math.floor(1000 + Math.random() * 9000);
   // console.log(val,"otp")
    if(popup===true){
        alert(`OTP is ${val}`)
        setPopup(false)
    }
    
    return <Box h="300px" m="auto">
        <Box textAlign="center">
            <Heading>Enter verification code</Heading>
           <br />
            <Text>we have sent you a 4 digit OTP</Text>
            <Text>on 9111111111</Text>
        </Box>
        <Box mt="30px" textAlign="center">
    <PinInput otp>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
     </PinInput>
        </Box>
    
    
    <Box textAlign="center" mt="25px" >
        <Link to="/home">

        <Button bg="black" color="white" w="25%">Login</Button>
        </Link>
    </Box>

    </Box>

  
   
       
       
  }