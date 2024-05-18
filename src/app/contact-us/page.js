'use client'
import BackgroundFixed from "@/components/BackgroundFixed";
import FooterSection from "@/components/FooterSection";
import FormContactSection from "@/components/FormContactSection";
import MapGoogleSection from "@/components/MapGoogleSection";
import NavbarSection from "@/components/NavbarSection";

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