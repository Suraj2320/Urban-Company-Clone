import {Box,Button,SimpleGrid,List,Image,Input,Select} from "@chakra-ui/react"
import {Link, useNavigate} from "react-router-dom"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import React from "react"
import { useState } from "react"


export default function Navbar(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [number,setNumber]= useState("")
    const navigate=useNavigate()

    const handlePNumber=(e)=>{
        setNumber(e.target.value)
    }
    // console.log("num",number)

  

    return(
        <SimpleGrid  h="60px"  bg="black" color="white" display="flex" justifyContent="space-around">
        <Box m="auto" bg="black" color="white" w="300px" >
        <Link to="/home">
        <Image src="data:image/png;base64,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" w="132px" alt="logo"/>
        </Link>
        </Box>
        <Box m="auto" fontWeight="bold" bg="black"
        color="white" w="900px" display="flex" justifyContent="flex-end" gap="4rem">
          <Link to="#">Blog</Link>
          <Link  to="#">Register As A Professional</Link>
          <Link to="#">My Bookings</Link>
          
    <Button  ref={btnRef} colorScheme='black'  onClick={onOpen}>
        Login/Sign Up
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> Please login to continue</DrawerHeader>

          <DrawerBody>
            <Box display="flex">
                <Box display="flex" border="grey" w="70%" >
                    <Image w="20px" h="13px" mt="14px"   src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg" alt="img"/>
                    <Select  border="none"  >
                        <option value="+91">+91</option>
                    </Select>
                </Box>
            <Input placeholder='Your Phone number' value={number} onChange={handlePNumber} />

            </Box>
            <Box textAlign="center">

        <Link to="/LoginVerification"> <Button mt="45px" w="70%"  color="white" bg="black" >Continue</Button>    </Link>  
           
         
      

            </Box>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
          
        </Box>
        </SimpleGrid>
    )
}