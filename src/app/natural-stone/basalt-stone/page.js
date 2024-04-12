'use client'
import FooterSection from "@/module/FooterSection";
import NavbarSection from "@/module/NavbarSection";
import Image from "next/image"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'

import FormContactSection from "@/module/FormContactSection";
import GridView from "@/module/GridView";
import BackgroundFixed from "@/components/BackgroundFixed";
import SliderProductOnPage from "@/module/slider-products-page/SliderProductOnPage";
import ListOfSliderProductOnPage from "@/module/slider-products-page/ListOfSliderProductOnPage";
import CircleIcon from "@/components/iconsvg/CircleIcon";
import { animatePageIn } from '@/utils/animations_loading';
import PlusIcon from "@/components/iconsvg/PlusIcon";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import MoreProductsStone from "@/components/MoreProductsStone";
import GalleryStone from "@/components/GalleryStone";
import TitleSection from "@/components/TittleSection";
export default function BazanStonePage() {
    const [listenTriggleRefesh, setListenTriggleRefesh] = useState(null)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        console.log("This_run")
        animatePageIn()
    }, []);
    const triggleAll = useRef(null)
    const sectionAll = useRef(null)
    const sectionToTrack1 = useRef(null)
    const sectionToTrack2 = useRef(null)
    const calcVal = useRef(null)
    const countClick = useRef(0)
    const scrollTriggerRef = useRef(null)
    // function calcDom() {
    //     const a = document.getElementById("sectionAll")
    //     const b = document.getElementById("sectionToTrack1")
    //     const c = document.getElementById("sectionToTrack2")
    //     const parentProsp = a.getBoundingClientRect()
    //     const child1Prosp = b.getBoundingClientRect()
    //     const child2Prosp = c.getBoundingClientRect()

    //     console.log(child2Prosp)
    //     if(parentProsp.height < child1Prosp.height || parentProsp.height < child2Prosp.height) console.log("parent must large than child height !!!!!!!!!!!!!!!!")
    //     const targetForChild1 = parentProsp.height + countClick * 200 - child1Prosp.height
    //     const targetForChild2 = parentProsp.height + countClick * 200 - child2Prosp.height

    //     const target = {
    //         parentHeight : parentProsp.height,
    //         child1Height : child1Prosp.height,
    //         child2Prosp : child2Prosp.height,
    //         targetForChild1: targetForChild1,
    //         targetForChild2: targetForChild2
    //     } 
    //     return target
    // }

    const handleClickWhenTriggle = (e) => {
        // countClick.current += 1

        // const target = e.target.children[1]
        // console.log()
        // gsap.timeline({
        //     onComplete:() => { console.log(document.getElementById("sectionAll").getBoundingClientRect().height)}
        // }).to(target,{
        //     height:200,
        //     duration:1
        // })
        // calcVal.current = calcDom()
        // gsap.delayedCall(0.01, function() {
        //     console.log('refresh',triggleAll.current)

        //     ScrollTrigger.refresh(true)
        // })
    }

    // useEffect(() => {

    //     //set will-change for 3dom
    //     calcVal.current = calcDom(sectionAll,sectionToTrack1,sectionToTrack2)
    //     triggleAll.current = ScrollTrigger.create({
    //         trigger:sectionAll.current,
    //         start:`top ${window.innerHeight/100*12 + 50}`,
    //         end:() => `bottom bottom`, 
    //         pin:true,
    //         pinSpacing:false, // absolute move on it
    //         markers:true,
    //         scrub:false, // it down spped scroll val base lenis
    //         onUpdate:(self) => {
    //             console.log(self.progress)
    //             gsap.to(sectionToTrack1.current, { y:calcVal.current.targetForChild1 * (self.progress)  });

    //             gsap.to(sectionToTrack2.current, { y:calcVal.current.targetForChild2 * (self.progress) });
    //         }
    //     })

    //     return () => {
    //         //triggleAll.current.kill(); 
    //     };
    // },[sectionAll,sectionToTrack1,sectionToTrack2,triggleAll,calcVal])



    const handleClick = (e) => {e.target.classList.toggle('active')};


    return (
        <main>
            <NavbarSection />
            <BackgroundFixed />
            <section style={{ marginTop: '12vh' }} id="back_tolistpage" className="light-background">
                <div className="content">
                    <ButtonHoverUnderLine disEffect={true} color="#252324"  eventLink={'handleNavigation'} datalink="/natural-stone">Back to catalogue</ButtonHoverUnderLine>
                </div>
            </section>
            <section id="detail_product" className="light-background">

                <div ref={sectionAll} id="sectionAll" style={{ height: "fit-content", position: "relative" }}>

                    <div className="grid12-container">
                        <div className="slider-img" ref={sectionToTrack1} id="sectionToTrack1" >
                            <SliderProductOnPage />
                        </div>
                        <div className="info-product" ref={sectionToTrack2} id="sectionToTrack2"  >
                            <h1>Basalt Stone</h1>

                            <div className="mutil-p">
                                <p>Basalt stone is a type of natural stone originating from volcanoes and formed through the cooling process of molten lava. The main characteristic of basalt stone is its dark or deep gray color, often with a dense crystal structure and rough surface.</p>
                                <p>Here are some highlights when introducing basalt stone:</p>
                                <br></br>
                            </div>
                            <div className="gr-dropdown" id="dropdown_info_onDetailProduct">
                                <ul>
                                    <li onClick={handleClick}>
                                        <div className="title">
                                            <span className="text">Sustainability<span className="underline-effect-styles"></span></span>
                                            <PlusIcon />
                                        </div>
                                        <div className="info">

                                            <p>Basalt stone is known for its durability and high load-bearing capacity, making it a popular choice for construction, landscaping, and decoration projects.</p>
                                        </div>
                                    </li>
                                    <li onClick={handleClick}>
                                        <div className="title">
                                            <span className="text">Unique Color<span className="underline-effect-styles"></span></span>
                                            <PlusIcon />
                                        </div>
                                        <div className="info">
                                            <p>The black or deep gray color of basalt stone creates a striking and elegant appearance in any space it is used.</p>
                                        </div>
                                    </li>
                                    <li onClick={handleClick}>
                                        <div className="title">
                                            <span className="text">Versatile Applications<span className="underline-effect-styles"></span></span>
                                            <PlusIcon />
                                        </div>
                                        <div className="info">
                                            <p>Basalt stone can be used for various purposes, from constructing walls, pathways, flooring, to interior and exterior decoration.</p>
                                        </div>
                                    </li>
                                    <li onClick={handleClick}>
                                        <div className="title">
                                            <span className="text">Easy Maintenance<span className="underline-effect-styles"></span></span>
                                            <PlusIcon />
                                        </div>
                                        <div className="info">
                                            <p>With its rough surface, basalt stone is often less prone to slipping and easy to maintain.</p>
                                        </div>
                                    </li>
                                    <li onClick={handleClick}>
                                        <div className="title">
                                            <span className="text">High Aesthetic Value<span className="underline-effect-styles"></span></span>
                                            <PlusIcon />
                                        </div>
                                        <div className="info">
                                            <p>With its natural beauty and uniqueness, basalt stone is often used to create focal points or highlights in architectural and decorative designs.</p>
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
            <TitleSection onEffect={false}>Beautiful solutions</TitleSection>
            <GalleryStone />
            <TitleSection onEffect={false}>Similar solutions</TitleSection>
            <MoreProductsStone />
            <FormContactSection />
            <FooterSection />
        </main>
    )
}