import Image from 'next/image'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import ButtonHoverIcon from '@/components/ButtonHoverIcon'
import React from 'react'
import gsap from 'gsap'
import $ from 'jquery'
export default function HeroSection() {

  const firstSlideRef = React.useRef(null)
  let i_of_slider = 999
  const sliderItem = 1

  React.useEffect(() => {
    if (firstSlideRef.current) {
      firstSlideRef.current.style.left = '0%';
    }
  }, [firstSlideRef]);


  function runSlider(what) {
    what.addClass("active").siblings("div").removeClass("active");

  }
  //slider gsap
  function gsapSlider(whose, target) {
    i_of_slider++;
    if (whose.hasClass("active")) {
      gsap.timeline({
        ease: "power2.in"
      }).set(
        "#HERO_SLIDER .hero-background div.active",{ zIndex: i_of_slider,clipPath:target}
      ).to(
        "#HERO_SLIDER .hero-background div.active",
        {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
      )

    }
  }
  function handleClickPrev() {
    let slideBackground = $("#HERO_SLIDER .hero-background div.active").is(":first-of-type")
      ? $("#HERO_SLIDER .hero-background div:last")
      : $("#HERO_SLIDER .hero-background div.active").prev("div");
    let slideTitle = $("#HERO_SLIDER .heading-hero div.active").is(":first-of-type")
      ? $("#HERO_SLIDER .heading-hero div:last")
      : $("#HERO_SLIDER .heading-hero div.active").prev("div");
  
    runSlider(slideBackground);
    //runSlider(slideTitle);
    gsapSlider(slideBackground, "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)");
  }
  function handleClickNext() {
    
    let slideBackground = $("#HERO_SLIDER .hero-background div.active").is(
      ":last-of-type"
    )
      ? $("#HERO_SLIDER .hero-background div:first")
      : $("#HERO_SLIDER .hero-background div.active").next("div");

    let slideTitle = $("#HERO_SLIDER .heading-hero div.active").is(
      ":last-of-type"
    )
      ? $("#HERO_SLIDER .heading-hero div:first")
      : $("#HERO_SLIDER .heading-hero div.active").next("div");
    runSlider(slideBackground);
    //runSlider(slideTitle);
    gsapSlider(slideBackground, "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)");
    console.log('next',slideBackground)
  }

  return (
    <div className="hero-section " id="HERO_SLIDER">
      <div className="hero-background" >
        <div className='active'>
          <Image
            src="/hero-bg.png"
            alt="Hero Section"
            layout='fill'
            priority
          />
        </div>
        <div>
          <Image
            src="/stone/bazan.png"
            alt="Hero Section"
            layout='fill'
            priority
          />
        </div>
      </div>
      <div className="absolute-content">
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
  )
}