import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import './index.css'
export default function Root(){
    return(
<div className='bg-gray-800 h-screen w-screen'>
    
    <Nav/>

    <Outlet /> {/* */}
    <Footer/>
</div>
    )
}