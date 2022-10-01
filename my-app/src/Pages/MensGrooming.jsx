import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import {Box,Text,Heading,Button,Image} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import AddToCart from "./AddToCart"
import CartContext from "../Context/CartContext"
import { useContext } from "react"
import ReactPlayer from "react-player"

export default function MensGrooming(){

    const {addToCart,state} =useContext(CartContext);

    const [data,setData]=useState([])

    const [store,setStore]=useState([])
    console.log("state",state.cartItems)
        //https://urbancompanyadv.herokuapp.com/api/urbanmensdata

        //https://urbancompanydata.herokuapp.com/api/urbanmensdata
    useEffect(()=>{
        axios.get(`https://urbancompanyadv.herokuapp.com/api/urbanmensdata`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{console.log(err)})
        
    },[])
    //    console.log("datamens",data)

    // const handleStore=(item)=>{
    //     setStore([...store,item])
    // }

    const handleAddtoCart=()=>{
          
        return <AddToCart store={store}/>
    }

    console.log("store",store)

    return <div>

        <Box h="450px" display="flex">
            <Box w="40%" m="auto" mt="5rem">
                    <Button bg="white" color="black" border="1px">UC Safe</Button>
                        <br />
                        <Heading>Salon for Men</Heading>
                        <br />
                        <Box display="flex" gap="0.4rem">
                          <Image mt="6px"  w="12px" h="12px" src="data:image/jpeg;base64,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" alt="img" />  
                            <Text>4.75 (974k)</Text>
                        </Box>
            </Box>

            <Box w="50%"  mt="2rem" mr="4rem">
            <ReactPlayer  url='https://www.youtube.com/watch?v=0CUG6aCWRSo' />
            </Box>
        </Box>

        <Box display="flex" gap="2rem" ml="4rem">
            <Box cursor="pointer">
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1660287057588-fcf0c3.jpeg" alt="img" />
                <Text>Packages</Text>
            </Box>
            <Box cursor="pointer">
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631190374864-78f3e8.jpeg" alt="img" />
                <Text>Haircut</Text>
            </Box>
            <Box cursor="pointer">
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631189933595-01692d.png" alt="img" />
                <Text>Hair Color</Text>
            </Box >
            <Box cursor="pointer">
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631189957304-ea2a7b.png" alt="img" />
                <Text>Shave/Grooming</Text>
            </Box>
            <Box cursor="pointer">
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631189857376-d49e47.png" alt="img" />
                <Text>Face Care</Text>
            </Box>
            <Box cursor="pointer">
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_64,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1631189905841-237b37.png" alt="img" />
                <Text>Massage Therapy</Text>
            </Box>
        </Box>
        <br />
        <hr />
        <br />
        <Box display="flex" justifyContent="flex-end">

        <Link to="/AddToCart"> 
        
                    <Button
                    
                    bg="blue" color="white"   onClick={handleAddtoCart} >View Cart </Button>
        </Link>
             </Box>

        {
            data?.map((el)=>{
                return  <Box display="flex">
                <Box display="flex" mb="48px" w="80%" m="auto" >
                <Box w="60%" >
                    <Box>
                        <Box display="flex" gap="0.4rem" >
                            <Image mt="6px" w="12px" h="12px" src="data:image/png;base64,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" />
                            <Text color="#afefff" fontWeight="bold">{el.package}</Text>
                        </Box>
                            <Heading fontSize="26px">{el.description}</Heading>
                           
                           <Box display="flex" gap="0.4rem">
                              <Image mt="6px"  w="12px" h="12px" src="data:image/jpeg;base64,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" alt="img" />  
                            <Text>{el.rating}</Text>
                           </Box>

                            <Box display="flex" gap="0.4rem">
                                 <Text>₹{el.price}</Text>
                                 <Text>. {el.time}</Text>           
                            </Box>

                        <Box display="flex" gap="0.4rem">
                            <Image mt="12px"  w="12px" h="12px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadOD6zfbb2TR4NAXPISnP4QlyJUs6TJ2J9Q&usqp=CAU" alt="img" />
                            <Button>{el.button}</Button>
                        </Box>
                    </Box>
                    <br />
                    <hr />
                    

                    <Box mt="4px" mb="48px">
                        <ul >
                    
                            <li>{el.feature}</li>
                            <li>{el.benefits}</li>
                        </ul>
    
                    </Box>
                    
                </Box>
    
                <Box m="auto" textAlign="center">
                        <Image src={el.image}  />

                       
                        
                        <Button mt="1rem" bg="white" border="1px" color="blue" onClick={()=>addToCart(el)} >{el.addbutton}</Button>
                      
                </Box>
             </Box>

          

             </Box> 

            })
        }

        
        

    </div>
}