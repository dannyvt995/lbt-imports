import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import ButtonHoverSplit from '@/components/ButtonHoverSplit'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import SliderWine from "./SliderWine";
import $ from 'jquery'
export default function ListWineSection() {
  gsap.registerPlugin(ScrollTrigger)

  const wrapperParralaxBox = useRef(null)
  const bgParalaxRef = useRef(null)
  const triggleSection = useRef(null)
  useEffect(() => {
    const targetBg = $("#BACKGROUND_FIXED").find("#ListWineSection")

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperParralaxBox.current,
          start: 'top 95%',
          end: `bottom 10%`,
          //markers: true,
          scrub: .9,
        },
        ease: "power2.out",
      })
      const timelineSection = gsap.timeline({
        scrollTrigger: {
          trigger: triggleSection.current,
          start: 'top 100%',
          end: `bottom 100%`,
          markers:true,
          scrub:true,
          onEnter:() => gsap.set(targetBg,{opacity:1}),
          onEnterBack:() => gsap.set(targetBg,{opacity:1}),
          onLeave:() => gsap.set(targetBg,{opacity:0}),
          onLeaveBack:() => gsap.set(targetBg,{opacity:0}),
        },
        ease: "power2.out",
      })
      timelineSection.to(targetBg, {
        backgroundPositionY: "0%"
      })
      timeline.to("html", {
        "--grid-margin-des_clone_forwine": "0px",
      }).to(bgParalaxRef.current, {
        backgroundSize: 105,
        backgroundPosition: "0px -500px",
      }, '<');
      return () => ctx.revert();
    })

  }, [wrapperParralaxBox,bgParalaxRef,triggleSection])


  return (
    <div className="list-products-section " ref={triggleSection}>
      <div className="list-products-section_1 dark-background">
        <div className="grid12-container">
          <div className="tittle">
            <h2>Wine Australia</h2>
            <span className="tag">(07)</span>
          </div>
          <div className="btn-more">
            <ButtonHoverUnderLine>View all</ButtonHoverUnderLine>
          </div>
        </div>
      </div>
      <div className="list-products-section_2 wine-list" ref={wrapperParralaxBox}>
        <div className="box" ref={bgParalaxRef}>
          <div className="content">
            <div className="grid12-container" >
              <div className="text">
                <p>Why our products imports is wine ? must have 2-3 line</p>
              </div>
              <div className="btn">
                <ButtonHoverSplit typeEffect='textEffect1' classAdd="width-full">Explore Brands</ButtonHoverSplit>
              </div>
            
            </div>
           
          </div>
        </div>
      </div>
      <div className="border-betweem-section"></div>
      <SliderWine/>
    </div>
  )
}