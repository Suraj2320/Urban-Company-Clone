
import {Route,Routes} from "react-router-dom"
import Hygienic from "../Pages/Hygienic"
import Home from "../Pages/Home"
import LoginVerification from "../Pages/LoginVerificatoin"
import MensGrooming from "../Pages/MensGrooming"
import AddToCart from "../Pages/AddToCart"
function Allroutes(){

    return(
        <Routes>
            <Route path="/" element={<Hygienic/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/LoginVerification" element={< LoginVerification/>} />
            <Route path="/MensGrooming" element ={<MensGrooming/>} />
            <Route path="/AddToCart" element={<AddToCart/>} />
        </Routes>
    )
}
export default Allroutes