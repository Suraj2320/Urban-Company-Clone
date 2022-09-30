// import SimpleImageSlider from "react-simple-image-slider";
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

        <Box sx={{ height:"20px",backgroundColor:"#e0e0e0",marginTop:"100px"}}></Box>


        <Box display="flex" gap="4rem" mt="80px" >
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



            <Box sx={{ height:"20px",backgroundColor:"#e0e0e0",marginTop:"110px"}}></Box>


            <Box sx={{width:"86%",margin:"auto"}}>
                {/* <Heading sx={{marginTop:"110px",display:"flex",justifyContent:"center"}}>Cleaning & Pest Control</Heading> */}
                <Box textAlign="center" mt="100px" mb="100px">

               

                                    <Heading>Cleaning & Pest Control</Heading>
</Box>
               
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image borderRadius="5%" w="466px" h="200px"  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Bathroom and Kitchen Cleaning</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Full Home Cleaning</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Sofa & Carpet Cleaning</Text>
                 
                    </Box>
                    <Box>
                        <Image className="sur" h="200px" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg" />
                        <Text sx={{fontSize:"19px" ,marginTop:"4px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Cockroach , Ant & Pest Control</Text>
                    </Box>
                </SimpleGrid>
            </Box>





            <Box sx={{ height:"20px",backgroundColor:"#e0e0e0",marginTop:"110px"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}>
                <Heading sx={{marginTop:"110px",display:"flex",justifyContent:"center"}}>UC Luxury Experience</Heading>
                <Text sx={{marginTop:"7px",fontSize:"22px",color:"grey",fontFamily:"bold",display:"flex",justifyContent:"center"}}>Top Proffessionals | Best Brands | Premium Experience</Text>
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Salon Live</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Salon For Man Royale</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Spa Luxe</Text>
                    
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Massage Therapy For Men Royale</Text>
                    </Box>
                </SimpleGrid>
            </Box>




            <Box sx={{ height:"20px",backgroundColor:"#e0e0e0",marginTop:"110px"}}></Box>

            <Box sx={{width:"86%",margin:"auto",paddingBottom:"5rem"}}>
                <Heading sx={{marginTop:"60px",display:"flex",justifyContent:"center",}}>Home Repairs</Heading>
              
                <SimpleGrid className="grid" columns={4} spacingX='40px'sx={{ marginTop:"110px"}}>
                    
                    <Box>
                    <Image className="sur"  height={"158px"} width={"300px"} borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Furniture Making,Upholstery Purifier</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" height={"158px"} borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}> Electricians</Text>
                    </Box>
                    <Box>
                    <Image className="sur" height={"158px"} width={"300px"} borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}> Plumbers</Text>
                    
                    </Box>
                    <Box>
                        <Image className="sur"  height={"158px"} width={"300px"} borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Carpentrs</Text>
                    </Box>
                </SimpleGrid>
            </Box>





            <Box sx={{ height:"20px",backgroundColor:"lightgray",marginTop:"10px"}}></Box>

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