import SimpleImageSlider from "react-simple-image-slider";
import {Box,SimpleGrid,Heading,Select,Input,Image,Text,Option} from "@chakra-ui/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useState } from "react";

const images = [
    { url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660310539328-18c400.jpeg" },
    { url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660827090958-70a2a6.png" },
    { url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660824582522-21aa7b.jpeg" },
    { url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660824572075-7ba017.png" },
    { url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660824580151-f7cab3.jpeg" },
    { url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660824583191-7ad79d.jpeg" },
    { url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660827090290-1b1fc5.jpeg" },
  ];
export default function Home(){
    const navigate=useNavigate()
    const [state,setState]=useState(images)
    const handlePage=()=>{
        Navigate("/MensGrooming")
    }

      console.log("state",state)

      const  handleKeyPress=(event)=>{
        if(event.key=="Enter")
        {
    
         return   Navigate("/MensGrooming")
        }
    }

    return(
        <SimpleGrid columns={[1, 1, 1]}>
        <Box backgroundPosition="50%" backgroundSize="cover" backgroundRepeat="no-repeat" h="557px" bgImage={"https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg"}>
            <Box textAlign="center" w="50%" m="auto" mt="140px" color="white">
            <Breadcrumb  textAlign="center">
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home / Mumbai</BreadcrumbLink>
                    </BreadcrumbItem>

                    {/* <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Agra</BreadcrumbLink>
                        
                    </BreadcrumbItem>        */}
             </Breadcrumb>
             <Heading fontSize="48px" >Home services, on demand</Heading>
                <br />
                <Box  color="black" display="flex" gap="2rem">
                    {/* <Select bg="white" w="25%" placeholder="Select" >
                        <Option></Option>
                    </Select> */}
                    <Select placeholder='Select option'  bg="white" w="25%" >
                            <option value='option1'>Mumbai</option>
                            <option value='option2'>Delhi</option>
                            <option value='option3'>Nashik</option>
                    </Select>
                    <Input bg="white"  placeholder="Search for services" onKeyPress={handleKeyPress}/>
                </Box>
                <br />

                <Breadcrumb  textAlign="center">
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Women's Therapies</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Salon for Men</BreadcrumbLink>
                    </BreadcrumbItem>    
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Men's Therapies</BreadcrumbLink>
                    </BreadcrumbItem> 
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>etc</BreadcrumbLink>
                    </BreadcrumbItem>    
             </Breadcrumb>

            </Box>
        </Box>

          < Box   display="flex" justifyContent="space-around" w="816px"  h="200px"  m="auto" mt="-60px" bg="white"  boxShadow='xl' alignItems="center">
                <Box _hover={{background:"#f7f7f7", cursor:"pointer" }} onClick={handlePage} >
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" alt="img" />
                  <br />
                    <Text>Salon For Women</Text>
                </Box>
                <Box _hover={{background:"#f7f7f7", cursor:"pointer" }} onClick={handlePage}>
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png" alt="img" />
                    <br />
                    <Text>Hair,Skin & Nails</Text>
                </Box>
                <Box _hover={{background:"#f7f7f7" , cursor:"pointer"}} onClick={handlePage}>
                    <Image m="auto" mt="-10px"src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" alt="img" />
                    <br />
                    <Text>Women's Therapies</Text>
                </Box>
                <Box _hover={{background:"#f7f7f7", cursor:"pointer" }} onClick={handlePage}>
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" alt="img" />
                    <br />
                    <Text>Salon For Men</Text>
                </Box>
                <Box _hover={{background:"#f7f7f7", cursor:"pointer" }} onClick={handlePage}>
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" alt="img" />
                    <br />
                    <Text>Men's Therapies</Text>
                </Box>
          </Box>

          <Box textAlign="center" mt="100px" mb="100px">

            <Heading>Home Services</Heading>
          </Box>

          < Box   display="flex" justifyContent="space-around" w="816px"  h="200px"  m="auto" mt="-60px" bg="white"  boxShadow='xl' alignItems="center">
                <Box _hover={{background:"#f7f7f7", cursor:"pointer" }} >
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" alt="img" />
                  <br />
                    <Text>Appliance Repair</Text>
                </Box>
                <Box _hover={{background:"#f7f7f7", cursor:"pointer" }}>
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" alt="img" />
                    <br />
                    <Text>Home Painting</Text>
                </Box>
                <Box _hover={{background:"#f7f7f7" , cursor:"pointer"}} >
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="img" />
                    <br />
                    <Text>Cleaning & Pest</Text>
                </Box>
                <Box _hover={{background:"#f7f7f7", cursor:"pointer" }}>
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png" alt="img" />
                    <br />
                    <Text>Disinfection</Text>
                </Box>
                <Box _hover={{background:"#f7f7f7", cursor:"pointer" }}>
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" alt="img" />
                    <br />
                    <Text>Home Repairs</Text>
                </Box>
          </Box>
          </SimpleGrid>
    )
}