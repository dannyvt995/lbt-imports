
"use client"
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import $ from 'jquery'
export default function  FormContactSection() {
    const formContactParallaxRef = useRef(null)
    const tittleFix = useRef(null)
   

    useEffect(() => {
        const targetBg = $("#BACKGROUND_FIXED").find("#FormContactSection")
        
        function hiddenNavbar() {
            gsap.timeline({overwrite:true}).set("#navbar",{pointerEvents:"none"}).to("#navbar" , {opacity: 0,duration:0.5})
        }
        function showNavbar() {
            gsap.timeline({overwrite:true}).set("#navbar",{pointerEvents:"auto"}).to("#navbar" , {opacity: 1,duration:0.5})
        }
        let ctx = gsap.context(() => {
          
            const timeline1 = gsap.timeline({
                scrollTrigger: {
                    trigger: formContactParallaxRef.current,
                    start: 'top 40%',
                    end: `bottom 5%`,
                    //markers: true,
                    onEnter:() => hiddenNavbar(),
                    onEnterBack:() => hiddenNavbar(),
                    onLeave:() => showNavbar(),
                    onLeaveBack:() => showNavbar(),
                },
                ease: "power2.out",
              })
              const timelineSection = gsap.timeline({
                scrollTrigger: {
                    trigger: formContactParallaxRef.current,
                    start: 'top 100%',
                    end: `bottom 0%`,
                   // markers: true,
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
              const timeline2 = gsap.timeline({
                scrollTrigger: {
                    trigger: tittleFix.current,
                    start: 'top 50px',
                    end: `bottom -32%`,
                    //markers: true,
                    pin:true
                }
              })
          return () => ctx.revert();
        })
    },[tittleFix,formContactParallaxRef])    
    return (
        <div className="form-contact-section" ref={formContactParallaxRef}>

            <div className="content">
                <div className="top row1  grid12-container-nonmargin ">
                    <div className="text" ref={tittleFix}>
                        <h3>Let touch with us</h3>
                    </div>
                </div>
                <div className="bot row2 grid12-container-nonmargin ">
                    <div className="input">
                        <input className="input-style-hover" placeholder="Enter your mail here..." />
                        </div>
                    <div className="submit">
                        <ButtonHoverSplit classAdd="width-full flex-center" typeEffect='textEffect1'>Submit</ButtonHoverSplit>
                    </div>
                </div>
            </div>
        </div>
    )
}