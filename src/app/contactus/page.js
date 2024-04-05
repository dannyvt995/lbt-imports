'use client'
import FooterSection from "@/module/FooterSection";
import FormContactSection from "@/module/FormContactSection";
import NavbarSection from "@/module/NavbarSection";
import gsap from 'gsap'
import {useEffect} from 'react'
export default function ContactUs() {
    useEffect(() => {
        gsap.to("#LOADING_SCENE", {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            delay: .4,
            duration: .6
          })
    }, []);
    return (
        <>
            <NavbarSection navbarbg="black"/>
            <div style={{paddingTop:'12vh'}}>
            <FormContactSection/>
            </div>
            <FooterSection/>
        </>
    )
}