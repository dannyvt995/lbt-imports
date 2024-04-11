'use client'
import FooterSection from "@/module/FooterSection";
import NavbarSection from "@/module/NavbarSection";
import Image from "next/image"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link'
import { useEffect,useRef } from 'react'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'

import FormContactSection from "@/module/FormContactSection";
import GridView from "@/module/GridView";
import BackgroundFixed from "@/components/BackgroundFixed";
import SliderProductOnPage from "@/module/slider-products-page/SliderProductOnPage";
import ListOfSliderProductOnPage from "@/module/slider-products-page/ListOfSliderProductOnPage";
export default function BazanStonePage() {
    
    gsap.registerPlugin(ScrollTrigger)

    const triggleAll = useRef(null)
    const sectionAll = useRef(null)
    const sectionToTrack1 = useRef(null)
    const sectionToTrack2 = useRef(null)   
    const calcVal = useRef(null)
    const countClick = useRef(0)
    function calcDom() {
        const a = document.getElementById("sectionAll")
        const b = document.getElementById("sectionToTrack1")
        const c = document.getElementById("sectionToTrack2")
        const parentProsp = a.getBoundingClientRect()
        const child1Prosp = b.getBoundingClientRect()
        const child2Prosp = c.getBoundingClientRect()

        console.log(child2Prosp)
        if(parentProsp.height < child1Prosp.height || parentProsp.height < child2Prosp.height) console.log("parent must large than child height !!!!!!!!!!!!!!!!")
        const targetForChild1 = parentProsp.height + countClick * 200 - child1Prosp.height
        const targetForChild2 = parentProsp.height + countClick * 200 - child2Prosp.height
       
        const target = {
            parentHeight : parentProsp.height,
            child1Height : child1Prosp.height,
            child2Prosp : child2Prosp.height,
            targetForChild1: targetForChild1,
            targetForChild2: targetForChild2
        } 
        return target
    }
   
    const handleClick = (e) => {
        countClick.current += 1
      
        const target = e.target.children[1]
        console.log()
        gsap.timeline({
            onComplete:() => { console.log(document.getElementById("sectionAll").getBoundingClientRect().height)}
        }).to(target,{
            height:200,
            duration:1
        })
        calcVal.current = calcDom()
        gsap.delayedCall(0.01, function() {
            console.log('refresh',triggleAll.current)
        
            ScrollTrigger.refresh(true)
        })
    }
    
    useEffect(() => {
   
        //set will-change for 3dom
        calcVal.current = calcDom(sectionAll,sectionToTrack1,sectionToTrack2)
        triggleAll.current = ScrollTrigger.create({
            trigger:sectionAll.current,
            start:`top ${window.innerHeight/100*12 + 50}`,
            end:() => `bottom bottom`, 
            pin:true,
            pinSpacing:false, // absolute move on it
            markers:true,
            scrub:false, // it down spped scroll val base lenis
            onUpdate:(self) => {
                console.log(self.progress)
                gsap.to(sectionToTrack1.current, { y:calcVal.current.targetForChild1 * (self.progress)  });
        
                gsap.to(sectionToTrack2.current, { y:calcVal.current.targetForChild2 * (self.progress) });
            }
        })

        return () => {
            //triggleAll.current.kill(); 
        };
    },[sectionAll,sectionToTrack1,sectionToTrack2,triggleAll,calcVal])


    return (
        <>
            <GridView />
            <NavbarSection />
            <BackgroundFixed />
            <section id="tittle_product" className="light-background">
                <div className="content">
                    <h1>Aesthetics & Applicability</h1>
                </div>
            </section>
            <section id="detail_product" className="light-background">
                <div ref={sectionAll} id="sectionAll" style={{height:"fit-content",border:"2px solid green",position:"relative"}}>
                    <div style={{position:"absolute",width:"100%",height:"100vh",display:"flex"}}><h1 style={{margin:"auto",color:"black"}}></h1></div>
                    <div className="grid12-container">
                        <div className="slider-img" ref={sectionToTrack1} id="sectionToTrack1" style={{border:"2px solid red"}}>
                            <SliderProductOnPage />
                        </div>
                        <div className="info-product" ref={sectionToTrack2} id="sectionToTrack2"  style={{border:"2px solid blue"}}>
                              <h1>Basalt Stone</h1>
            {/*    <div className="tag">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                                <p>Organic and Biodynamic</p>
                            </div> */}
            <div className="mutil-p">
                <p>Basalt stone is a type of natural stone originating from volcanoes and formed through the cooling process of molten lava. The main characteristic of basalt stone is its dark or deep gray color, often with a dense crystal structure and rough surface.</p>
                <p>Here are some highlights when introducing basalt stone:</p>
            </div>
            <div className="gr-dropdown" id="dropdown_info_onDetailProduct">
                <ul>
                    <li onClick={handleClick}>
                        <div className="title">
                            <span>Sustainability</span>
                            <span><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M 5.6264 3.8953 C 5.3396 3.8953 5.1071 3.6628 5.1071 3.3761 V 0 L 3.8929 0 V 3.3761 C 3.8929 3.6628 3.6604 3.8953 3.3737 3.8953 H 0 L 0 5.1047 H 3.3737 C 3.6604 5.1047 3.8929 5.3372 3.8929 5.6239 V 9 H 5.1071 L 5.1071 5.6239 C 5.1071 5.3372 5.3396 5.1047 5.6264 5.1047 L 9 5.1047 V 3.8953 H 5.6264 Z" fill="currentColor"></path></svg>
                            </span>
                        </div>
                        <div className="info">
                            <p>Loreone is a type of natural sone is a type of natural sm</p>
                        </div>
                    </li>
                    <li onClick={handleClick}>
                        <div className="title">
                            <span>Unique Color</span>
                            <span><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M 5.6264 3.8953 C 5.3396 3.8953 5.1071 3.6628 5.1071 3.3761 V 0 L 3.8929 0 V 3.3761 C 3.8929 3.6628 3.6604 3.8953 3.3737 3.8953 H 0 L 0 5.1047 H 3.3737 C 3.6604 5.1047 3.8929 5.3372 3.8929 5.6239 V 9 H 5.1071 L 5.1071 5.6239 C 5.1071 5.3372 5.3396 5.1047 5.6264 5.1047 L 9 5.1047 V 3.8953 H 5.6264 Z" fill="currentColor"></path></svg>
                            </span>
                        </div>
                        <div className="info">
                            <p>Loreone is a type of natural sone is a type of natural sm</p>
                        </div>
                    </li>
                    <li onClick={handleClick}>
                        <div className="title">
                            <span>Versatile Applications</span>
                            <span><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M 5.6264 3.8953 C 5.3396 3.8953 5.1071 3.6628 5.1071 3.3761 V 0 L 3.8929 0 V 3.3761 C 3.8929 3.6628 3.6604 3.8953 3.3737 3.8953 H 0 L 0 5.1047 H 3.3737 C 3.6604 5.1047 3.8929 5.3372 3.8929 5.6239 V 9 H 5.1071 L 5.1071 5.6239 C 5.1071 5.3372 5.3396 5.1047 5.6264 5.1047 L 9 5.1047 V 3.8953 H 5.6264 Z" fill="currentColor"></path></svg>
                            </span>
                        </div>
                        <div className="info">
                            <p>Loreone is a type of natural sone is a type of natural sm</p>
                        </div>
                    </li>
                    <li onClick={handleClick}>
                        <div className="title">
                            <span>Easy Maintenance</span>
                            <span><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M 5.6264 3.8953 C 5.3396 3.8953 5.1071 3.6628 5.1071 3.3761 V 0 L 3.8929 0 V 3.3761 C 3.8929 3.6628 3.6604 3.8953 3.3737 3.8953 H 0 L 0 5.1047 H 3.3737 C 3.6604 5.1047 3.8929 5.3372 3.8929 5.6239 V 9 H 5.1071 L 5.1071 5.6239 C 5.1071 5.3372 5.3396 5.1047 5.6264 5.1047 L 9 5.1047 V 3.8953 H 5.6264 Z" fill="currentColor"></path></svg>
                            </span>
                        </div>
                        <div className="info">
                            <p>Loreone is a type of natural sone is a type of natural sm</p>
                        </div>
                    </li>
                    <li onClick={handleClick}>
                        <div className="title">
                            <span>High Aesthetic Value</span>
                            <span><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M 5.6264 3.8953 C 5.3396 3.8953 5.1071 3.6628 5.1071 3.3761 V 0 L 3.8929 0 V 3.3761 C 3.8929 3.6628 3.6604 3.8953 3.3737 3.8953 H 0 L 0 5.1047 H 3.3737 C 3.6604 5.1047 3.8929 5.3372 3.8929 5.6239 V 9 H 5.1071 L 5.1071 5.6239 C 5.1071 5.3372 5.3396 5.1047 5.6264 5.1047 L 9 5.1047 V 3.8953 H 5.6264 Z" fill="currentColor"></path></svg>
                            </span>
                        </div>
                        <div className="info">
                            <p>Loreone is a type of natural sone is a type of natural sm</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="gr-btn">
                <ButtonHoverSplit classAdd="width-full flex-center" typeEffect='textEffect1'>Contact Us</ButtonHoverSplit>
            </div>
                        </div>
                    </div>
                </div>
              

            </section>
            <section id="tittle_product" className="light-background">
                <div className="content">
                    <h1>Aesthetics & Applicability</h1>
                </div>
            </section>
            <section id="gallery-stone" className="light-background">

            </section>
            <section id="tittle_product" className="light-background">
                <div className="content">
                    <h1>Similar solutions</h1>
                </div>
            </section>
            <section id="more-product" className="light-background">
                <div className="grid12-container">
                    <div className="tag">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                        <p>Organic and Biodynamic</p>
                    </div>
                    <div className="item-product more1">
                        <div className="img">
                            <Image
                                src="/stone/bazan/bazan.png"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="info">
                            <Link href={'/constructionstone/bazan'}>Bazan Stone</Link>
                        </div>
                    </div>
                    <div className="item-product more2">
                        <div className="img">
                            <Image
                                src="/stone/bluestone/bluestone1.png"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="info">
                            <Link href={'/constructionstone/blue'}>Terrazzo Stone</Link>
                        </div>
                    </div>
                    <div className="item-product more3">
                        <div className="img">
                            <Image
                                src="/stone/terrazzo/terrazzo1.png"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="info">
                            <Link href={'/constructionstone/terrazzo'}>Terrazzo Stone</Link>
                        </div>
                    </div>
                </div>
            </section>
            <FormContactSection />
            <FooterSection />
        </>
    )
}