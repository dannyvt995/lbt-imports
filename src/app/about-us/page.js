"use client"
import HeroSection from "@/components/HeroSection";
import NavbarSection from "@/components/NavbarSection";
import WelcomeSection from "@/components/WelcomeSection";
import ListWineSection from "@/components/ListWineSection";
import FooterSection from "@/components/FooterSection";
import ListStoneSection from "@/components/ListStoneSection";

import { useRef, useEffect } from "react";
import FormContactSection from "@/components/FormContactSection";

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