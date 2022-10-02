
 import {Link} from "react-router-dom"
 import "../Style/Footer.css"
 import {Box,Image,Text} from "@chakra-ui/react"

export default function Footer(){
    let style={marginBottom:"25px", display:"flex" ,
    gap:"2rem", marginLeft:"4rem"  }
    

    return(
        <>
        <div style={{background:"black", color:"white" }}>
            <ul style={style}>
                <Link to="#">About Us</Link>
                <li>UC Impact</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>

                <li style={{width:"15%"}}>Interest-Based Advertising</li>
                <li>Anti Discrimination Policy</li>
                <li>Blog</li>
                <li>Reviews</li> 
                <li>Near Me</li>
                <li>Careers</li>
                <li>Gift Cards</li>
                <li>Contact Us</li>
                <li>Quick Links</li>

            </ul>
            <hr />

            <div style={{width:"90%",margin:"auto"}}>
                <h4 style={{marginBottom:"25px"}}>Serving In</h4>
                <span >Aus</span>
              <ul style={style}>
                <Link to="#">Melbourne</Link>
                <li>Sydney</li>
              </ul>

              <span >IND</span>
              <ul className="footerList" >
                <Link to="#">Agra</Link>
                <li>Ahmedabad</li>
                <li>Amritsar</li>
                <li>Bangalore</li>
                <li>Bhopal</li>
                <li>Chennai</li>
                <li>Cuttack</li>
                <li>Delhi NCR</li>
                <li>Gwalior</li>
                <li>Jabalpur</li>
                <li>Jaipur</li>
                <li>Jodhpur</li>
                <li>Kochi</li>
                <li>Kota</li>
                <li>Mumbai</li>
                <li>Nagpur</li>
                <li>Surat</li>
                <li>Varanasi</li>
                <li>Vijayawada</li>
                <li>Warangal</li>


              </ul>
            </div>

          <br />
        <hr />
        <Box display="flex" justifyContent="space-around">

            <Box display="flex">
                <Image w="240px" h="150px" src="https://thetechportal.com/wp-content/uploads/2020/01/Screenshot_20200130-145621.png" alt="img" />
                <Text mt="64px">2014-22 UrbanClap Technologies India Pvt Ltd.</Text>
            </Box>
                 <Box display="flex" mt="5%" gap="2rem">
                            <Image src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png" alt="img" w="140px" h="50px" />
                            <Image  src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png" alt="img" w="140px" h="50px" />
                         </Box>
     </Box>
        </div>

        </>
    )
}