"use client"
import BackgroundFixed from "@/components/BackgroundFixed";
import GalleryStone from "@/components/GalleryStone";
import FooterSection from "@/module/FooterSection";
import FormContactSection from "@/module/FormContactSection";
import NavbarSection from "@/module/NavbarSection";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import $ from 'jquery'
import TittleSection from "@/components/TittleSection";
export default function ProjectsPage() {
  
const triggleSection = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const targetBg = $("#BACKGROUND_FIXED").find("#ProjectTitlePage") 
    let ctx = gsap.context(() => {
      const timelineSection = gsap.timeline({
        scrollTrigger: {
          trigger: triggleSection.current,
          start: 'top 100%',
          end: `bottom 100%`,
          //markers:true,
          scrub:true,
          onEnter:() => gsap.set(targetBg,{opacity:1}),
          onEnterBack:() => gsap.set(targetBg,{opacity:1}),
          onLeave:() => gsap.set(targetBg,{opacity:0}),
          onLeaveBack:() => gsap.set(targetBg,{opacity:0}),
        },
        ease: "power2.out",
      })
      timelineSection.to(targetBg, {
        backgroundPositionY: "40%"
      })
  
      return () => ctx.revert();
    })

  }, [triggleSection])
    return(
        <>
        <BackgroundFixed/>
        <NavbarSection />
        <div ref={triggleSection}>
            <TittleSection onEffect={true} titleColor='#fffcf5'>Our projects</TittleSection>
            <GalleryStone />
        </div>
        <FormContactSection />
        <FooterSection/>
        </>
    )
}