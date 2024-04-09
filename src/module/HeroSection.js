"use client"
import Image from 'next/image'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import ButtonHoverIcon from '@/components/ButtonHoverIcon'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import $ from 'jquery'

export default function HeroSection() {
  gsap.registerPlugin(ScrollTrigger)
  const isRunningEffect = useRef(false)
  const heroRef = useRef(null)
  let i_of_slider = 999
  const durationEffect = 1.5

  function runSlider(what) {
    what.addClass("active").siblings("div").removeClass("active");

  }
  //slider gsap
  function gsapSlider(whose, target1, target2, target3) {

    i_of_slider++;

    if (whose.hasClass("active")) {

      const siblings = whose.siblings();
      gsap.timeline({
        ease: "power2.in",
        overwrite: true,
        onComplete: () => isRunningEffect.current = false
      }).set(
        whose, { zIndex: i_of_slider, clipPath: target1, backgroundPositionX: target2 }
      ).set(siblings,
        { backgroundPositionX: '0px' }
      ).set(
        "#HERO_SLIDER .heading-hero div", { opacity: 0 }
      ).set(
        "#HERO_SLIDER .heading-hero div.active", { zIndex: i_of_slider, opacity: 0 }
      ).to(
        whose,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", backgroundPositionX: 0, duration: durationEffect }
      ).to(siblings,
        { backgroundPositionX: target3, duration: durationEffect },
        "<"
      ).to(
        "#HERO_SLIDER .heading-hero div.active",
        { opacity: 1 },
        "<"
      )

    }
  }
  function handleClickPrev() {
    if (isRunningEffect.current) return
    isRunningEffect.current = true
    let slideBackgroundPrev = $("#HERO_SLIDER .hero-background div.active").is(":first-of-type")
      ? $("#HERO_SLIDER .hero-background div:last")
      : $("#HERO_SLIDER .hero-background div.active").prev("div");
    let slideTitle = $("#HERO_SLIDER .heading-hero div.active").is(":first-of-type")
      ? $("#HERO_SLIDER .heading-hero div:last")
      : $("#HERO_SLIDER .heading-hero div.active").prev("div");

    runSlider(slideBackgroundPrev);
    runSlider(slideTitle);
    gsapSlider(slideBackgroundPrev, "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "-100px", "100px");
  }
  function handleClickNext() {
    if (isRunningEffect.current) return
    isRunningEffect.current = true
    let slideBackgroundNext = $("#HERO_SLIDER .hero-background div.active").is(
      ":last-of-type"
    )
      ? $("#HERO_SLIDER .hero-background div:first")
      : $("#HERO_SLIDER .hero-background div.active").next("div");

    let slideTitle = $("#HERO_SLIDER .heading-hero div.active").is(
      ":last-of-type"
    )
      ? $("#HERO_SLIDER .heading-hero div:first")
      : $("#HERO_SLIDER .heading-hero div.active").next("div");
    runSlider(slideBackgroundNext);
    runSlider(slideTitle);
    gsapSlider(slideBackgroundNext, "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", "100px", "-100px");

  }

  
  useEffect(() => {
    let ctx = gsap.context(() => {

      const timeline1 = gsap.timeline({
          scrollTrigger: {
              trigger: heroRef.current,
              start: 'bottom bottom',
              end: `bottom top`,
              //markers: true,
              scrub:true,
             /*  onEnter:() => gsap.set(heroRef.current,{opacity:1}),
              onEnterBack:() => gsap.set(heroRef.current,{opacity:1}),
              onLeave:() => gsap.set(heroRef.current,{opacity:0}),
              onLeaveBack:() => gsap.set(heroRef.current,{opacity:0}) */
          },
          ease: "power2.out",
        })
        timeline1.to($("#HERO_SLIDER .hero-background div") , {
          backgroundPositionY: "80%"
        }).to(".absolute-content-onhero" , {
          yPercent: -120
        },"<")
      return () => ctx.revert();
    })
  }, [heroRef])


  return (
    <>

    <div className='wrapper-hero-section'>{/* it will be fixed , and near dom will top index */}
      <div className="hero-section " id="HERO_SLIDER" ref={heroRef}>
        <div className="hero-background" >
          <div className='active'></div>
          <div></div>
        </div>
        <div className="absolute-content-onhero">
          <div className="grid12-container  mtb-1p5rem">
            <div className="heading-hero">
              <h1>DEMOOO</h1>
              <div className='active'>
                <h1>Wine Australian</h1>
              </div>
              <div>
                <h1>Construction Stone</h1>
              </div>

            </div>
          </div>
          <div className="border-styled-top">
            <div className=" grid12-container-nonmargin " >
              <div className="detail-hero ">
                <div className="grid12-container">
                  <div className="detail-hero--1 flex-row">
                    <span><svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg></span>
                    <p>Lakeside Daydream -  An elegant blend of function and form</p>
                  </div>
                  <div className="detail-hero--2">
                    <h2>Hard drawn designs insproed by the  landspaces</h2>
                    <ButtonHoverSplit classAdd="width-fit" typeEffect='textEffect1'>View Wine Brands</ButtonHoverSplit>
                  </div>
                  <div className="detail-hero--group-button flex-between">
                    <ButtonHoverIcon eventPass={handleClickPrev} iconDirection="iconDirection-left" />
                    <ButtonHoverIcon eventPass={handleClickNext} iconDirection="iconDirection-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  

  )
}