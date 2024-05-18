
"use client"
import ButtonHoverSplit from '@/Interactive/ButtonHoverSplit'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import $ from 'jquery'
import Image from 'next/image'
import './style.css'
export default function  FormContactSection() {
   
   
    const formContactParallaxRef = useRef(null)
    const tittleFix = useRef(null)
    const triggleNavbar = useRef(null)
    const triggleBgFormcontact = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        function hiddenNavbar() {
            gsap.timeline({overwrite:true}).set("#navbar",{pointerEvents:"none"}).to("#navbar" , {opacity: 0,duration:0.5})
        }
        function showNavbar() {
            gsap.timeline({overwrite:true}).set("#navbar",{pointerEvents:"auto"}).to("#navbar" , {opacity: 1,duration:0.5})
        }
        let ctx = gsap.context(() => {
            const timelineNavbar = gsap.timeline({
                scrollTrigger: {
                    trigger: formContactParallaxRef.current,
                    start: 'top 40%',
                    end: `bottom 5%`,
                    //markers: true,
                    onUpdate: self => self.refresh(),
                    onEnter:() => hiddenNavbar(),
                    onEnterBack:() => hiddenNavbar(),
                    onLeave:() => showNavbar(),
                    onLeaveBack:() => showNavbar(),
                },
                ease: "power2.out",
              })
            //   const timelineSection = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: formContactParallaxRef.current,
            //         start: 'top 100%',
            //         end: `bottom 0%`,
            //        // markers: true,
            //         scrub:true,
            //         onUpdate: self => self.refresh(),
            //         onEnter:() => gsap.set(targetBg,{opacity:1}),
            //         onEnterBack:() => gsap.set(targetBg,{opacity:1}),
            //         onLeave:() => gsap.set(targetBg,{opacity:0}),
            //         onLeaveBack:() => gsap.set(targetBg,{opacity:0}),
            //     },
            //     ease: "power2.out",
            //   })
            //   timelineSection.to(targetBg, {
            //     backgroundPositionY: "40%"
            //   })
              triggleNavbar.current = ScrollTrigger.getById(timelineNavbar.scrollTrigger.id);
              //triggleBgFormcontact.current = ScrollTrigger.getById(timelineSection.scrollTrigger.id);
            //   const timelineTitleFix = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: tittleFix.current,
            //         start: 'top 50px',
            //         end: `bottom -32%`,
            //         //markers: true,
            //         pin:true,
            //         pinSpacing:false,
            //         onUpdate: self => self.refresh(),
            //     }
            //   })
          return () => ctx.revert();
        })
    },[tittleFix,formContactParallaxRef,triggleBgFormcontact,triggleNavbar])    
    return (
        <section className="form-contact-section" ref={formContactParallaxRef}>
            <div className='background'>
                <div className='fillter'></div>
                <div className='image'>
                    <Image src="/NewsletterDark.webp" alt="backgorund_foo" fill />
                </div>
            </div>
            <div className="content">
                <div className="top row1  grid12-container-nonmargin ">
                    <div className="text" ref={tittleFix}  id='fixTitleOnFormContactComponent'>
                        <h3>Let touch with us</h3>
                    </div>
                </div>
                <div className="bot row2 grid12-container-nonmargin ">
                    <div className="input">
                        <input className="input-style-hover" placeholder="Enter your mail here..." />
                        </div>
                    <div className="submit">
                        <ButtonHoverSplit textColor="white" classAdd="width-full flex-center" typeEffect='textEffect2'>Submit</ButtonHoverSplit>
                    </div>
                </div>
            </div>
        </section>
    )
}