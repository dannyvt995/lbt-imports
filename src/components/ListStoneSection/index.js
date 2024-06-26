

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import $ from 'jquery'
import SliderStoneSection from "./SliderStoneSection";
import './style.css'
export default function ListStoneSection() {
  const wrapperParralaxBox = useRef(null)
  const triggleSection = useRef(null)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const targetBg = $("#BACKGROUND_FIXED").find("#ListStoneSection") 
    let ctx = gsap.context(() => {

      if(window.innerWidth < 568) {
        gsap.set("html",{
          "--grid-margin-des_clone_forstone" : 0
        })
        wrapperParralaxBox.current.classList.add('activeBackgroundBannerListStone')
      }else{
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperParralaxBox.current,
            start: 'top 90%',
            end: `bottom 50%`,
            //markers: true,
            scrub: true,
          },
          ease: "power2.out",
        })
        timeline.to(":root", {
          "--grid-margin-des_clone_forstone": "0px",
        })
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
      }
    
      
      return () => ctx.revert();
    })

  }, [wrapperParralaxBox,triggleSection])

  return (
    <div className="list-products-section " ref={triggleSection} id="section_stone_products">
      <div className="list-products-section_1 light-background">
        <div className="grid12-container">
          <div className="tittle">
            <h2>Natural&nbsp;Stone</h2>
            <span className="tag" style={{color:"#252324"}}>(03)</span>
          </div>
          <div className="btn-more">
           {/*  <ButtonHoverUnderLine color="#252324">View all</ButtonHoverUnderLine> */}
          </div>
        </div>
      </div>
      <div className="list-products-section_2 stone-list" ref={wrapperParralaxBox}>
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
{/*       <div className="border-betweem-section"></div> */}

      
      <SliderStoneSection/>
    </div>
  )
}