'use client'
import FooterSection from "@/module/FooterSection";
import NavbarSection from "@/module/NavbarSection";

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from 'react'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'

import FormContactSection from "@/module/FormContactSection";

import BackgroundFixed from "@/components/BackgroundFixed";
import SliderProductOnPage from "@/module/slider-products-page/SliderProductOnPage";

import { animatePageIn } from '@/utils/animations_loading';

import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import MoreProductsStone from "@/components/MoreProductsStone";
import GalleryStone from "@/components/GalleryStone";
import TitleSection from "@/components/TittleSection";


import {usePathname} from "next/navigation";
import dataProducts from '@/data/products.json'; 
import ListOfSliderProductOnPage from "@/module/slider-products-page/ListOfSliderProductOnPage";
export default function page() {
    const pathName = usePathname()
 
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        console.log("FIRST LOADING ...")
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





    return (
        <main>
            <NavbarSection />
            <BackgroundFixed />
            <section style={{ marginTop: '10vh' }} id="back_tolistpage" className="light-background">
                <div className="content">
                    <ButtonHoverUnderLine disEffect={true} color="#252324" eventLink={'handleNavigation'} datalink="/natural-stone">Back to catalogue</ButtonHoverUnderLine>
                </div>
            </section>
          
            <section id="detail_product" className="light-background">

                <div ref={sectionAll} id="sectionAll" style={{ height: "fit-content", position: "relative" }}>

                    <div className="grid12-container">
                        <div className="slider-img" ref={sectionToTrack1} id="sectionToTrack1" >
                            <SliderProductOnPage 
                            main_image_slider={dataProducts[pathName]["main_image_slider"]}
                            thumb_image_slider={dataProducts[pathName]["thumb_image_slider"]}
                            />
                        </div>
                        <div className="info-product" ref={sectionToTrack2} id="sectionToTrack2"  >
                        

                        <ListOfSliderProductOnPage 
                            name={dataProducts[pathName]["name"]}
                            des={dataProducts[pathName]["des"]}
                            des_more={dataProducts[pathName]["des_more"]}
                            type_props={dataProducts[pathName]["type_props"]}
                            detail_props={dataProducts[pathName]["detail_props"]}
                        />
                        
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

   
