"use client"
import BackgroundFixed from "@/components/BackgroundFixed";
import FooterSection from "@/components/FooterSection";
import FormContactSection from "@/components/FormContactSection";
import NavbarSection from "@/components/NavbarSection";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import $ from 'jquery'
import TittleSection from "@/components/TittleSection";
import GalleryPage from "@/components/GalleryPage";
import useAnimationBanner from "@/hook/useAnimationBanner";
import FixedBannerBackground from "@/components/FixedBannerBackground";

export default function page() {
  useEffect(() => {
    window.scrollTo(0,0)
},[])
const triggleSection = useRef(null)
  useEffect(() => {
    const targetBg = $("#fixed_banner_background")
    const targetHead = $("#contentTargetToMove")

     setTimeout(() => {
            //useAnimationBanner(triggleSection,targetBg,targetHead)
        }, 1000);
  }, [triggleSection])
    return(
        <main>
        <FixedBannerBackground backgroundImage={"/construction/3.jpg"} backgroundSize={"auto 120%"}/>
        <NavbarSection />
        <div ref={triggleSection}>
            <TittleSection onEffect={true} titleColor='#fffcf5'>Construction Gallery</TittleSection>
        </div>
        <GalleryPage/>
        <FormContactSection />
        <FooterSection/>
        </main>
    )
}