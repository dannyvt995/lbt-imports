'use client'
import BackgroundFixed from "@/components/BackgroundFixed";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";
import TitleSection from "@/components/TittleSection";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import $ from 'jquery'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import FormContactSection from "@/components/FormContactSection";
import ProductsWine from "@/components/ProductsWine";
import FixedBannerBackground from "@/components/FixedBannerBackground";
import useAnimationBanner from "@/hook/useAnimationBanner";

export default function WineAutralian() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const triggleSection = useRef(null)
    useEffect(() => {
        const targetBg = $("#fixed_banner_background")
        const targetHead = $("#contentTargetToMove")
        useAnimationBanner(triggleSection.current,targetBg,targetHead)
    }, [triggleSection])
    return (
        <main>
            <FixedBannerBackground backgroundImage={"/wine-list.png"} backgroundSize={"auto 120%"}/>
            <NavbarSection />
            <section ref={triggleSection} id="view100vh_relative">
                <TitleSection onEffect={true} titleColor='#fffcf5'>Australian Wines</TitleSection>
            
               
            </section>
            <section id="content_after-tittle_section" className="dark-background">
                    <div className="content">
                        <div className="grid12-container">
                            <div className="des mutil-p">
                                <p>LBT Imports Pty Ltd is a Melbourne-based wine exporter, wholesaler, and agent.</p>
                                <p>Drawing on many years in fine wine business, founder Long Tran was convinced of the increasing popularity of Australian wines and established LBT Imports to focus on introducing quality Australian wines to Vietnam, which is a new and upcoming market with lots of potential.</p>
                                {/*  <p>Feel free to contact us to explore our extensive range of natural stone products and discuss how we can meet your specific requirements.</p> */}
                            </div>
                            <div className="tag">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                                <p>Mission</p>
                            </div>
                        </div>
                    </div>
                </section>
            <ProductsWine/>
            <FormContactSection />
            <FooterSection />
        </main>
    )
}