"use client"
import './style.css'
import ButtonHoverSplit from '@/Interactive/ButtonHoverSplit'
import ButtonHoverIcon from '@/Interactive/ButtonHoverIcon'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import $ from 'jquery'

export default function HeroSection() {
    gsap.registerPlugin(ScrollTrigger)
    const isRunningEffect = useRef(false)
    const heroRef = useRef(null)
    let i_of_slider = 999
    const durationEffect = 1

    function runSlider(what) {
        what.addClass("active").siblings("div").removeClass("active");

    }
    //slider gsap
    function gsapSlider(whose,dir, target1, target2, target3) {

        i_of_slider++;

        if (whose.hasClass("active")) {

            const siblings = whose.siblings();
            gsap.timeline({
                ease: "power2.in",
                overwrite: true,
                onComplete: () => isRunningEffect.current = false
            }).set(
                whose, { zIndex: i_of_slider, clipPath: target1, backgroundPositionX:  `${100 * dir}px` }
            ).set(siblings,
                { backgroundPositionX: '0px' }
            ).set(
                "#HERO_SLIDER .heading-hero div", { opacity: 0 }
            ).set(
                "#HERO_SLIDER .heading-hero div.active", { zIndex: i_of_slider, opacity: 0 }
            ).set(
                "#info_banner > div", { opacity: 0 }
            ).set(
                "#info_banner > div.active", { zIndex: i_of_slider, opacity: 0 }
            ).to(
                whose,
                { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", backgroundPositionX: 0, duration: durationEffect }
            ).to(siblings,
                { backgroundPositionX: `${-100 * dir}px`, duration: durationEffect },
                "<"
            ).to(
                "#HERO_SLIDER .heading-hero div.active",
                { opacity: 1 },
                "<"
            ).to(
                "#info_banner > div.active",
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
        let slideInfo = $("#info_banner > div.active").is(":first-of-type")
            ? $("#info_banner > div:last")
            : $("#info_banner > div.active").prev("div");

        runSlider(slideBackgroundPrev);
        runSlider(slideTitle);
        runSlider(slideInfo);
        gsapSlider(slideBackgroundPrev,-1, "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "-100px", "100px");
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
        let slideInfo = $("#info_banner > div.active").is(
                ":last-of-type"
            )
                ? $("#info_banner > div:first")
                : $("#info_banner > div.active").next("div");
        runSlider(slideBackgroundNext);
        runSlider(slideTitle);
        runSlider(slideInfo);
        gsapSlider(slideBackgroundNext,1, "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", "100px", "-100px");

    }


    useEffect(() => {
        let ctx = gsap.context(() => {

            const timeline1 = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'bottom bottom',
                    end: `bottom top`,
                    //markers: true,
                    scrub: true,
                    /*  onEnter:() => gsap.set(heroRef.current,{opacity:1}),
                     onEnterBack:() => gsap.set(heroRef.current,{opacity:1}),
                     onLeave:() => gsap.set(heroRef.current,{opacity:0}),
                     onLeaveBack:() => gsap.set(heroRef.current,{opacity:0}) */
                },
                ease: "power2.out",
            })
            timeline1.to($("#HERO_SLIDER .hero-background div"), {
                backgroundPositionY: "80%"
            }).to(".absolute-content-onhero", {
                yPercent: -120
            }, "<")
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
                        <div className="grid12-container ">
                            <div className="heading-hero">

                                <div className='active'>
                                    <h1>Wine Australian</h1>
                                </div>
                                <div>
                                    <h1>Natural Stone</h1>
                                </div>

                            </div>
                        </div>
                        <div className="border-styled-top">
                            <div className="detail-hero ">
                                <div className="grid12-container" >
                                    <div id="info_banner">
                                        <div className='active'>
                                            <div className="grid12-container-nonmargin">
                                                <div className="detail-hero--1 flex-row">
                                                    <span><svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" ></circle></svg></span>
                                                    <p>Organic and Biodynamic</p>
                                                </div>
                                                <div className="detail-hero--2">
                                                    <h2>LBT Imports Pty Ltd is a Melbourne-based wine exporter, wholesaler, and agent</h2>
                                                    <ButtonHoverSplit eventLink="handleNavigation" targetId="section_wine_products" classAdd="width-fit" typeEffect='textEffect1'>View&nbsp;Wine&nbsp;Brands</ButtonHoverSplit>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="grid12-container-nonmargin">
                                                <div className="detail-hero--1 flex-row">
                                                    <span><svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" ></circle></svg></span>
                                                    <p>All our products are 100% exported to many countries around the world.</p>
                                                </div>
                                                <div className="detail-hero--2">
                                                    <h2>Feel free to contact us to explore our extensive range of natural stone products and discuss how we can meet your specific requirements.</h2>
                                                    <ButtonHoverSplit eventLink="handleNavigation"  targetId="section_stone_products" classAdd="width-fit" typeEffect='textEffect1'>View&nbsp;Natural&nbsp;Stone</ButtonHoverSplit>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    
                                    <div className="background"></div>
                                    <div className="detail-hero--group-button flex-evenly">
                                        <ButtonHoverIcon eventPass={handleClickPrev} iconDirection="iconDirection-left" />
                                        <ButtonHoverIcon eventPass={handleClickNext} iconDirection="iconDirection-right" />
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