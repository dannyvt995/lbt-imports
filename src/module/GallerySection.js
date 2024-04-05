"use client"
import {useRef,useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import Image from 'next/image'
export default function GallerySection() {
    gsap.registerPlugin(ScrollTrigger)
    const triggleGallerySection = useRef(null)
    const moveGallerySection = useRef(null)
    // useEffect(() => {
    //     const timeline = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: triggleGallerySection.current,
    //         start: 'top top',
    //         end: `bottom bottom`,
    //         markers: true,
    //         scrub: .9,
    //         pin:true
    //       },
    //       ease: "power2.out",
    //     })
    //     const listItem = Array.prototype.slice.call(triggleGallerySection.current.children)
      
    //     let ctx = gsap.context(() => {
    //         // timeline.to(moveGallerySection.current,{
    //         //     yPercent:-120
    //         // })
    //         // timeline.to(listItem[0],{
    //         //     yPercent:-150
    //         // }).to(listItem[1],{
    //         //     yPercent:-250
    //         // },'<')
    //         // .to(listItem[2],{
    //         //     yPercent:-350
    //         // })
    //         //  .to(listItem[3],{
    //         //     yPercent:-450
    //         // },'<')
    //         return () => ctx.revert();
    //     })
    // },[moveGallerySection,triggleGallerySection])
    return (
        <div className='gallery-section'>
            <div className='background'>
                <div className='logo'>
                    <Image
                        src="/logo.png"
                        alt="1"
                        width={700}
                        height={700}
                        />
                </div>
                <div className='btn'>
                    <ButtonHoverSplit classAdd="width-full flex-center" typeEffect='textEffect1'>Explore</ButtonHoverSplit>
                </div>
            </div>
            <div className='gallery' ref={triggleGallerySection}>
                <div className='wrapper-gallery-move '  ref={moveGallerySection}>
                    <div className=' grid12-container grid-continer-4row' >
                    <div className='box row1'>
                        <Image
                        src="/list-wine.jpg"
                        alt="1"
                        width={700}
                        height={700}
                        />
                        <div className='name-image'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                            <p>Name products</p>
                        </div>
                    </div>
                    <div className='box row2' >
                        <Image
                        src="/hero-bg.png"
                        alt="1"
                        width={700}
                        height={700}
                        />
                        <div className='name-image'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                            <p>Name products</p>
                        </div>
                    </div>
                    <div className='box row3'>
                        <Image
                        src="/hero-bg.jpg"
                        alt="1"
                        width={700}
                        height={700}
                        />
                        <div className='name-image'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                            <p>Name products</p>
                        </div>
                    </div>
                    <div className='box row4'>
                        <Image
                        src="/bg1.png"
                        alt="1"
                        width={700}
                        height={700}
                        />
                        <div className='name-image'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                            <p>Name products</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}