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
export default function Aboutus() {
    gsap.registerPlugin(ScrollTrigger)
    const deomTriggleGsap = useRef(null)
    const deomEffectGsap = useRef(null)

    useEffect(() => {
        gsap.to("#LOADING_SCENE", {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            delay: .4,
            duration: .6
          })
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(deomEffectGsap.current, {
                y: -500,
                scrollTrigger: {

                    trigger: deomTriggleGsap.current,
                    start: `top ${window.innerHeight * 12 / 100}`,
                    end: `bottom 10%`,
                    scrub: true,
                    //markers: true,
                    pin: true,
                    //onUpdate:(self) => console.log(self.progress)
                }
            })

            return () => ctx.revert();
        })

    }, [deomEffectGsap, deomTriggleGsap])

    return (
        <>
            <div className="wrapper-content">
                <GridView />
                <NavbarSection />
            </div>
            <div className="wrapper-content">
                <HeroSection />
            </div>
          
            <WelcomeSection />
            <ListWineSection />
            <ListStoneSection />
            <GallerySection/>
            <FormContactSection/>
            <FooterSection />
        </>
    )
}