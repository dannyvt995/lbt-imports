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
export default function page() {
  useEffect(() => {
    window.scrollTo(0,0)
},[])
const triggleSection = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const targetBg = $("#BACKGROUND_FIXED").find("#BannerProjectPage") 
    let ctx = gsap.context(() => {
      const timelineSection = gsap.timeline({
        scrollTrigger: {
          trigger: triggleSection.current,
          start: 'top 50%',
          end: `bottom -10%`,
        // markers:true,
          scrub:true,
          onEnter:() => {
            console.log("run")
            gsap.set(targetBg,{opacity:1})
          },
          onEnterBack:() => gsap.set(targetBg,{opacity:1}),
          onLeave:() => gsap.set(targetBg,{opacity:0}),
          onLeaveBack:() => gsap.set(targetBg,{opacity:0}),
        },
        ease: "power2.out",
      })
      timelineSection.to(targetBg, {
        backgroundPositionY: "150%"
      })
  
      return () => ctx.revert();
    })

  }, [triggleSection])
    return(
        <main>
        <BackgroundFixed/>
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