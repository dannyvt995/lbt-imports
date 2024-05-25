'use client'
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";

import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import $ from 'jquery'
import { useEffect,useRef } from 'react'


import FormContactSection from "@/components/FormContactSection";
import GridView from "@/components/GridView";

import SliderStone from "@/components/ListStoneSection/SliderStoneSection/SliderStone";
import TitleSection from "@/components/TittleSection";
import useAnimationBanner from "@/hook/useAnimationBanner";
import FixedBannerBackground from "@/components/FixedBannerBackground";
import ProductsStone from "@/components/ProductsStone";

export default function page() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    const triggleSection = useRef(null)
    useEffect(() => {
        const targetBg = $("#fixed_banner_background")
        const targetHead = $("#contentTargetToMove")

        useAnimationBanner(triggleSection.current,targetBg,targetHead)
    }, [triggleSection])
    return (
        <main>
        
            <NavbarSection />
            <FixedBannerBackground backgroundImage={"/stone/banner-stone.jpg"} backgroundSize={"auto 130%"} backgroundPosY={"100%"}/>
            <section ref={triggleSection} id="view100vh_relative">
                <TitleSection onEffect={true} titleColor='#fffcf5'>Natural Stone Exporter</TitleSection>
                
            </section>
        
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
               {/*  <SliderStone /> */}
               <ProductsStone/>
            <FormContactSection />
            <FooterSection />
        </main>
    )
}