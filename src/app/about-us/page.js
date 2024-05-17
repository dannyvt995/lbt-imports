"use client"
import HeroSection from "@/module/HeroSection";
import GridView from "@/module/GridView";
import NavbarSection from "@/module/NavbarSection";
import WelcomeSection from "@/module/WelcomeSection";
import ListWineSection from "@/module/ListWineSection";
import FooterSection from "@/module/FooterSection";
import ListStoneSection from "@/module/ListStoneSection";

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import FormContactSection from "@/module/FormContactSection";
import GallerySection from "@/module/GallerySection";

/* https://github.com/danielhult/practice/tree/main */
export default function page() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    //gsap.registerPlugin(ScrollTrigger)
    // const deomTriggleGsap = useRef(null)
    // const deomEffectGsap = useRef(null)

    // useEffect(() => {
    //     console.log('Page enter => LOADING_SCENE fade')
    //     gsap.to("#LOADING_SCENE", {
    //         clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    //         delay: .4,
    //         duration: .6
    //       })
    // }, []);

    return (
        <>

            <NavbarSection />
            <HeroSection />
            <WelcomeSection />
    
            <ListWineSection />
            <ListStoneSection />
        
     {/*       <GallerySection/>
           <div style={{width:'100vw',height:'50vh',position:'relative',background:"black"}}>
                TESING 
               </div> */}
            <FormContactSection/>
            <FooterSection />
        </>
    )
}