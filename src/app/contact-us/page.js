'use client'
import BackgroundFixed from "@/components/BackgroundFixed";
import FooterSection from "@/module/FooterSection";
import FormContactSection from "@/module/FormContactSection";
import MapGoogleSection from "@/module/MapGoogleSection/MapGoogleSection";
import NavbarSection from "@/module/NavbarSection";
import gsap from 'gsap'
import {useEffect} from 'react'

export default function page() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    // useEffect(() => {
    //     gsap.to("#LOADING_SCENE", {
    //         clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    //         delay: .4,
    //         duration: .6
    //       })
    // }, []);
    console.log('d')
    return (
        <>
            <BackgroundFixed/>
            <NavbarSection />
            <div style={{paddingTop:'12vh'}}>
                <MapGoogleSection />
                <FormContactSection/>
            </div>
            <FooterSection/>
        </>
    )
}