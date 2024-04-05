'use client'
import FooterSection from "@/module/FooterSection";
import NavbarSection from "@/module/NavbarSection";
import gsap from 'gsap'
import {useEffect} from 'react'

export default function WineAutralian() {
    useEffect(() => {
        gsap.to("#LOADING_SCENE", {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            delay: .4,
            duration: .6
          })
    }, []);
    return (
        <>
            <NavbarSection/>
            <div style={{position:'relative',width:'100%',height:'100vh',paddingTop:'12vh',display:'flex'}}>
                <h1 style={{margin:'auto'}}>WineAutralian</h1>
            </div>
            <FooterSection/>
        </>
    )
}