
"use client"
import ButtonHoverSplit from '@/Interactive/ButtonHoverSplit'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import './style.css'
export default function  FormContactSection() {
   
   
    const formContactParallaxRef = useRef(null)
    const tittleFix = useRef(null)
    const triggleBgFormcontact = useRef(null)

  /*   useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        function hiddenNavbar() {
            gsap.timeline({overwrite:true}).set("#navbar",{pointerEvents:"none"}).to("#navbar" , {opacity: 0,duration:0.5})
        }
        function showNavbar() {
            gsap.timeline({overwrite:true}).set("#navbar",{pointerEvents:"auto"}).to("#navbar" , {opacity: 1,duration:0.5})
        }
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: formContactParallaxRef.current,
                    start: 'top 40%',
                    end: `bottom 5%`,
                   // markers: true,
                    onEnter:() => hiddenNavbar(),
                    onEnterBack:() => hiddenNavbar(),
                    onLeave:() => showNavbar(),
                    onLeaveBack:() => showNavbar(),
                }
              })
         
          return () => ctx.revert();
        })
    },[tittleFix,formContactParallaxRef,triggleBgFormcontact])    */ 
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
                        <h3>Contact us</h3>
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