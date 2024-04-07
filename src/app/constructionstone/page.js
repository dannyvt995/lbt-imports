'use client'
import FooterSection from "@/module/FooterSection";
import NavbarSection from "@/module/NavbarSection";
import Image from "next/image"
import gsap from 'gsap'
import {useEffect} from 'react'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import ButtonHoverIcon from "@/components/ButtonHoverIcon";
import FormContactSection from "@/module/FormContactSection";
import GridView from "@/module/GridView";
import BackgroundFixed from "@/components/BackgroundFixed";
import Link from 'next/link'
export default function ConstructionStone() {
    function handleClickNext() {
        console.log(handleClickNext)
    }
    function handleClickPrev() {
        console.log(handleClickPrev)
    }
    return (
        <>
            <GridView />
            <NavbarSection/>
            <BackgroundFixed/>
            <section id="tittle_product" className="light-background">
               <div className="content">
                    <h1>Construction Stone</h1>
               </div>
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
                            <Link href={'/constructionstone/blue'}>Blue Stone</Link>
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
            <FormContactSection/>
            <FooterSection/>
        </>
    )
}