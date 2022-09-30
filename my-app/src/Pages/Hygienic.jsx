import {Box,Button,SimpleGrid,Image,Text,Heading,Select,Input,Stack,InputGroup,InputLeftAddon} from "@chakra-ui/react"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"


export default  function Hygienic(){
    
    const [cityName,setCityName]=useState("")
    const navigate = useNavigate();

    const handleCity=(e)=>{
        setCityName(e.target.value)
       
       // setInterval(() => {
            navigate("/home")
       // }, 2000);
    };
    
    console.log(cityName,"cityName")

    return(
        <SimpleGrid columns={[1, 1, 1]} >
         
            <Box h="550px"  display="flex" bg="black" color="white">
                <Box w="50%">
                    <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg" alt="image" />
                </Box>
                <Box w="50%"  >
                        <Box   w="90%" mt="10%"  ml="30px" >
                            <Text w="40%" fontWeight="400" fontSize="22px">URBAN COMPANY</Text>                 
                            <br />
                            <Heading >Quality home services, on demand</Heading>
                            <br />
                            <Text fontSize="18px">Experienced,hand-picked Professionals to serve you at your </Text>
                            <Text fontSize="18px" >doorstep</Text>
                          
                            <Box borderRadius="8px" ml="20px" bg="white" color="black" w="60%" border="1px" h="120px" mt="15px">
                                <Text mt="8px" mb="8px" ml="20px" fontWeight="bold" fontSize="22px" >Where do you need a service?</Text>
                                <Select w="80%" m="auto" placeholder='Select your city' value={cityName} onChange={handleCity} >
                                    <option value='Agra'><Link to="#">Agra</Link></option>
                                    <option value='Delhi'><Link to="#">Delhi</Link></option>
                                    <option value='Pune'><Link to="#">Pune</Link></option>
                                </Select>
                            </Box>
                        </Box>
                </Box>
            </Box>


            <Box display="flex" mt="8%"  w="100%" pl="40px" > 
                <Box    >
                    <Heading>Why Urban Company?</Heading>
                 <Box   mt="5%"  display="flex" justifyContent="space-around">
                  
                        <Image  w="72px" h="72px" src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png" alt="hygenic image" />
                    <Box >   
                        <Text>Transparent pricing</Text>
                        <Text>See fixed prices before you book. No hidden charges.</Text>
                    </Box>
                   
                  </Box>

                        <Box  mt="5%"   display="flex" justifyContent="space-around">
                                
                                <Image w="72px" h="72px" src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png" alt="hygenic image" />
                            <Box >   
                                <Text>Experts only</Text>
                                <Text>Our professionals are well trained and have on-job expertise.</Text>
                            </Box>
                            
                            </Box>
                            <Box  mt="5%"   display="flex" justifyContent="space-around">
                                
                                <Image w="72px" h="72px" src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png" alt="hygenic image" />
                            <Box>   
                                <Text>Fully equipped</Text>
                                <Text>We bring everything needed to get the job done well.</Text>
                            </Box>
                            
                            </Box>

                     </Box>

                            <Box w="50%" m="auto">
                                <Box bg="#f5f9ff"  h="90%" w="70%">
                                    <Image ml="3rem" mt="15px" mb="35px" h="120px" w="110px" src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png" alt="img" />
                                <Box >
                                    <Heading>100% Quality Assured</Heading>
                                    <Text>If you don't love our service, we will make it right.</Text>
                                </Box>
                            </Box>

                            </Box>
            </Box>


            <Box  display="flex" mt="8rem" pl="40px">
                <Box w="50%" >
                      <Heading >Book professionals from your</Heading>  
                      <Heading> phone</Heading>  
                      <br />

                        <Text fontSize="20px" fontWeight="400" color="grey" >Enter your mobile number to get the App download link.</Text>
                        <br />
                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftAddon children='+91' />
                                <Input type='tel' placeholder='phone number'   />
                                <Button bg="black" color="white" >Send</Button>
                            </InputGroup>
                         </Stack>

                         <Box display="flex" mt="5%" gap="2rem">
                            <Image src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png" alt="img" w="140px" h="50px" />
                            <Image  src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png" alt="img" w="140px" h="50px" />
                         </Box>
                        
                </Box>

                <Box  w="50%"  m="auto" ml="4rem">
                        <Box display="flex" gap="2rem" m="auto">
                            <Image src="https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png" alt="img" w="240px" h="500px" />
                            <Image src="https://res.cloudinary.com/urbanclap/image/upload/w_350,f_auto/categories/category_v2/category_2d013050.png" alt="img" w="240px" h="500px" />
                        </Box>
                </Box>
            </Box>

        </SimpleGrid>
    )
 
}




