'use client'
import FooterSection from "@/module/FooterSection";
import NavbarSection from "@/module/NavbarSection";
import Image from "next/image"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import $ from 'jquery'
import { useEffect,useRef } from 'react'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";

import FormContactSection from "@/module/FormContactSection";
import GridView from "@/module/GridView";
import BackgroundFixed from "@/components/BackgroundFixed";
import Link from 'next/link'
import ListStoneSection from "@/module/ListStoneSection";
import { animatePageIn } from "@/utils/animations_loading";
import SliderStone from "@/module/SliderStone";
import TitleSection from "@/components/TittleSection";
export default function page() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    const triggleSection = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const targetBg = $("#BACKGROUND_FIXED").find("#BannerNaturalStone")
        let ctx = gsap.context(() => {
            const timelineSection = gsap.timeline({
                scrollTrigger: {
                    trigger: triggleSection.current,
                    start: 'top 100%',
                    end: `bottom 100%`,
                    //markers:true,
                    scrub: true,
                    onEnter: () => gsap.set(targetBg, { opacity: 1 }),
                    onEnterBack: () => gsap.set(targetBg, { opacity: 1 }),
                    onLeave: () => gsap.set(targetBg, { opacity: 0 }),
                    onLeaveBack: () => gsap.set(targetBg, { opacity: 0 }),
                },
                ease: "power2.out",
            })
            timelineSection.to(targetBg, {
                backgroundPositionY: "150%"
            })

            return () => ctx.revert();
        })

    }, [triggleSection])
    return (
        <main>
            <GridView />
            <NavbarSection />
            <BackgroundFixed />
            <div ref={triggleSection}>
                <TitleSection onEffect={true} titleColor='#fffcf5'>Natural Stone Exporter</TitleSection>
                <div id="content_after-tittle_section" className="light-background">
                    <div className="content">
                        <div className="grid12-container">
                            <div className="des mutil-p">
                                <p>LBT is a leading manufacturer and exporter of granite, basalt, bluestone, and more, with our own quarries and processing plants. Equipped with advanced processing facilities and staffed by skilled professionals and experienced quality inspectors, we have implemented a comprehensive management and quality control system to meet industry standards and the expectations of customers worldwide. All our products are 100% exported to many countries around the world.</p>
                                <p>We specialize in a wide range of natural stone products, including slabs, tiles, kerbstones, wall cladding, countertops, vanity tops, mosaics, columns, sculptures, water fountain features, and garden stones. Widely used in construction and commercial projects.</p>
                                <p>Feel free to contact us to explore our extensive range of natural stone products and discuss how we can meet your specific requirements.</p>
                            </div>
                            <div className="tag">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                                <p>Mission</p>
                            </div>
                        </div>
                    </div>
                </div>
                <SliderStone />
            </div>
        
         
            <FormContactSection />
            <FooterSection />
        </main>
    )
}