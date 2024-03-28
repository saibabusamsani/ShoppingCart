import React,{ useState } from "react"
import Header from "../components/Header"
import Banner from "../components/banner"
import Collections from "../components/collections"
import Footer from "../components/footer"
import { Gents, Ladies } from "../data"
import WomenCollection from "../components/womenCollection"
const MainPage=()=>{
    const [gentsFashoin,setGentFashoin]=useState(Gents);
    const [ladiesFashoin,setLadiesFashoin]=useState(Ladies);
    return(
        <div>
            <Header/>
            <Banner/>
            <Collections gentsFashoin={gentsFashoin}/>
            <WomenCollection ladiesFashoin={ladiesFashoin}/>
            <Footer/>
        </div>
    )
}
export default MainPage