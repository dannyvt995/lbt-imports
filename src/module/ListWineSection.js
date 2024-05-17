"use client"
import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import ButtonHoverSplit from '@/components/ButtonHoverSplit'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

import SliderWine from "./SliderWine";
import $ from 'jquery'
export default function ListWineSection() {

  const wrapperParralaxBox = useRef(null)
  const triggleSection = useRef(null)
  useEffect(() => {
    const targetBg = $("#BACKGROUND_FIXED").find("#ListWineSection")
    if(window.innerWidth < 568) {
      gsap.set("html",{
        "--grid-margin-des_clone_forwine" : 0
      })
      wrapperParralaxBox.current.classList.add('activeBackgroundBannerListWine')
    }else{
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperParralaxBox.current,
          start: 'top 95%',
          end: `bottom 10%`,
          //markers: true,
          scrub: true,
        },
        ease: "power2.out",
      })
      const timelineSection = gsap.timeline({
       
        scrollTrigger: {
          trigger: triggleSection.current,
          start: 'top 80%',
          end: `bottom 100%`,
         // markers:true,
          scrub:true,
          onEnter:() => gsap.set(targetBg,{opacity:1}),
          onEnterBack:() => gsap.set(targetBg,{opacity:1}),
          onLeave:() => gsap.set(targetBg,{opacity:0}),
          onLeaveBack:() => gsap.set(targetBg,{opacity:0}),
        },
        ease: "power2.out",
      })
      let ctx = gsap.context(() => {
       
     
        timelineSection.to(targetBg, {
          backgroundPositionY: "0%"
        })
        timeline.to(":root", {
          "--grid-margin-des_clone_forwine": "0px",
        })
        return () => ctx.revert();
      })
    }
   

  }, [wrapperParralaxBox,triggleSection])


  return (
    <div className="list-products-section " ref={triggleSection}id="helo">
      <div className="list-products-section_1 dark-background">
        <div className="grid12-container">
          <div className="tittle">
            <h2>Wine&nbsp;Australia</h2>
            <span className="tag" style={{color:"#fffcf5"}}>(07)</span>
          </div>
          <div className="btn-more">
         {/*    <ButtonHoverUnderLine>View all</ButtonHoverUnderLine> */}
          </div>
        </div>
      </div>
      <div className="list-products-section_2 wine-list" ref={wrapperParralaxBox}>
        <div className="box">
          <div className="content">
            <div className="grid12-container" >
              <div className="text">
                <p>Why our products imports is wine ? must have 2-3 line</p>
              </div>
          {/*     <div className="btn">
                <ButtonHoverSplit typeEffect='textEffect1' classAdd="width-full">Explore Brands</ButtonHoverSplit>
              </div> */}
            
            </div>
           
          </div>
        </div>
      </div>
     {/*  <div className="border-betweem-section"></div> */}
      <SliderWine/>
    </div>
  )
}