import { Button,Box,Text,Heading,Image } from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import CartContext from "../Context/CartContext"


export default function AddToCart(){
        const {showCart,cartItems}=useContext(CartContext);
        const [orderPlace,setOrderPlace]=useState(false)

        const navigate=useNavigate()

            console.log("caritems",cartItems)

            const val=    cartItems.reduce((amount,item)=>
        
           ( item.price) + amount,0  
         
            )
            console.log("val",val)

            const handleOrderPlace=()=>{
                setOrderPlace(true)
            }
            if(orderPlace==true)
            {
                alert("Order Placed Successfully")
                setOrderPlace(false)
                navigate("/home")
            }
    return <>
   {showCart && (
    <Box display="flex" >
        <Box w="40%" m="auto">
            <Heading mb="45px">Summary</Heading>

    <Box>
        { cartItems?.map((item)=>(
            <Box mb="22px" display="flex" justifyContent="space-between">
            <Text>{item.description}</Text>
            <Image src={item.image}  />
            <Box >
                <Button>-</Button>
                <Button>1</Button>
                <Button>+</Button>
            </Box>
            <Text>₹{item.price}</Text>
            </Box>
        ))}
    </Box>

    <Box>
        <Box display="flex" gap="2rem" mt="65px">
            <Box textAlign="center">
                <Image w="128px" h="128px" src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1651660884996-1c3ba4.png" alt="img" />
                <Heading fontSize="12px">Relaxing Head Massage</Heading>
                <Text>₹99</Text>
                <Button bg="white" color="blue.300">ADD</Button>
            </Box>
            <Box textAlign="center">
                <Image w="128px" h="128px" src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1615976235101-6d6cc1.jpeg" alt="img" />
                <Heading fontSize="12px">Hair Color-Application</Heading>
                <Text>₹199</Text>
                <Button bg="white" color="blue.300">ADD</Button>
            </Box>
            <Box textAlign="center">
                <Image w="128px" h="128px" src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1655295307011-10fa33.jpeg" alt="img" />
                <Heading fontSize="12px">Hair Color with Product</Heading>
                <Text>₹299</Text>
                <Button bg="white" color="blue.300">ADD</Button>
            </Box>
            <Box textAlign="center">
                <Image w="128px" h="128px" src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_128,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1651666576469-ed8a95.png" alt="img" />
                <Heading fontSize="12px">Face & Neck De-Tan</Heading>
                <Text>₹399</Text>
                <Button bg="white" color="blue.300">ADD</Button>
            </Box>
        </Box>
    </Box>
    </Box>

    <Box w="40%" m="auto" >
                <Heading>Payment summary</Heading>
                <br />
                <Box display="flex" justifyContent="space-between"  >
                    <Text>Item Total</Text>
                    <Text>₹{val}</Text>
                </Box>

                <Box mt="8px" display="flex" justifyContent="space-between"  >
                    <Text>Membership Discount</Text>
                    <Text>0</Text>
                </Box>
                <br />
                <hr />
                <br/>
                <Box display="flex" justifyContent="space-between" >
                    <Text>Total</Text>
                    <Text>₹{val}</Text>
                </Box>

                <Box textAlign="center" mt="45px">
                    <Button onClick={handleOrderPlace} color="white" bg="blue.300">Place Order</Button>
                </Box>

    </Box>

</Box>
   )}
    </>

}