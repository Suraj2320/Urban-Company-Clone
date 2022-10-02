
import {Box,SimpleGrid,Heading,Select,Input,Image,Text} from "@chakra-ui/react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
 
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
// import { Navigate } from "react-router-dom";
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
        navigate("/MensGrooming")
    }

      console.log("state",state)

      const  handleKeyPress=(event)=>{
        if(event.key=="Enter")
        {
    
         return   navigate("/MensGrooming")
        }
    }

    return(
        <SimpleGrid columns={[1, 1, 1]}>
        <Box backgroundPosition="50%" backgroundSize="cover" backgroundRepeat="no-repeat" h="552px" bgImage={"https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg"}>
            <Box textAlign="center" w="50%" m="auto" mt="190px" color="white">
            <Breadcrumb  textAlign="center">
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Agra</BreadcrumbLink>
                    </BreadcrumbItem>       
             </Breadcrumb>
             <Heading fontSize="48px" >Home services, on demand</Heading>
                <br />
                <Box  color="black" display="flex" gap="2rem">
                    <Select bg="white" w="25%" placeholder="Agra" ></Select>
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
                    <Image m="auto" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" alt="img" />
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

          
          {/* <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={false}
        showNavs={true}
      />
    </div> */}
        {/* work here */}
        <Box display="flex" gap="4rem" mt="40px" >
            {state?.map((item)=>{
                return <Box  key={item.id}>
                    <Image src={item.url} />
                </Box>
            })}
        </Box>


            
          <Box textAlign="center" mt="100px" mb="100px">

                <Heading>New Category Launches</Heading>
         </Box>

            <Box display="flex"  gap="2rem" ml="2rem" mr="2rem" textAlign="center">
                <Box  >
                    <Image  borderRadius="5%" w="466px" h="200px" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg" alt="img" />
                    <br />
                    <Text>Expert Counselling</Text>
                </Box>
                <Box>
                    <Image borderRadius="5%" w="466px" h="200px" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" alt="img" />
                    <br />
                    <Text>Furniture Making, Upholstery & Polish</Text>
                </Box>
                <Box>
                    <Image borderRadius="5%" w="466px" h="200px" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" alt="img" />
                    <br />
                    <Text>Air Purifier</Text>
                </Box>
                <Box>
                    <Image borderRadius="5%" w="466px" h="200px" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg" alt="img" />
                    <br />
                    <Text>Buy RO Water Purifier</Text>
                </Box>
            </Box>


            <Box textAlign="center" mt="100px" mb="100px">

            <Heading>Best Offers</Heading>
            <Text fontSize="18px" fontWeight="bold" color="gray.400">Hygienic & single-use products | low-contact services</Text>
            </Box>

<Box mb="120px" display="flex"  gap="2rem" ml="2rem" mr="2rem" textAlign="center">
<Box  >
    <Image  borderRadius="5%" w="466px" h="200px" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg" alt="img" />
    <br />
    <Text>Salon For Men</Text>
    <h3 style={{color:"grey"}}>Flat ₹100 off</h3>
</Box>
<Box>
    <Image borderRadius="5%" w="466px" h="200px" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg" alt="img" />
    <br />
    <Text>Massage For Men</Text>
    <h3 style={{color:"grey"}}>Starts at ₹499</h3>
</Box>
<Box>
    <Image borderRadius="5%" w="466px" h="200px" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png" alt="img" />
    <br />
    <Text>Geyser</Text>
    <h3 style={{color:"grey"}}>Starts at ₹249</h3>

</Box>
<Box>
    <Image borderRadius="5%" w="466px" h="200px" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602245928963-5094c6.jpeg" alt="img" />
    <br />
    <Text>Home Painting</Text>
    <h3 style={{color:"grey"}}>Consultation at ₹49</h3>
</Box>
</Box>


        </SimpleGrid>
    )
}