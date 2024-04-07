"use client"
import {useRef,useEffect} from 'react'
import gsap from 'gsap'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import Image from 'next/image'
export default function GallerySection() {

    const triggleGalleryRef = useRef(null)
    const moveGalleryRef = useRef(null)
    useEffect(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: triggleGalleryRef.current,
            start: 'top top',
            end: `+=200%`,  /* transform:translateY(100%) on css */
            markers: true,
            scrub: true,
            pin:true
          },
          ease: "power2.out",
        })
        let ctx = gsap.context(() => {
            timeline.to(moveGalleryRef.current,{
                yPercent:-250
            })
            return () => ctx.revert();
        })
    },[triggleGalleryRef,moveGalleryRef])
    return (
        <div className='gallery-section' ref={triggleGalleryRef}>
            <div className='background'>
                <div className='logo'>
                    <Image
                        src="/logo.png"
                        alt="this is image"
                        width={700}
                        height={700}
                        />
                </div>
                
            </div>
            <div className='gallery' >
                <div className='wrapper-gallery-move' ref={moveGalleryRef} >
                    <div className=' grid12-container grid-continer-4row'>
                        <div className='box row1'>
                            <Image
                            src="/list-wine.jpg"
                            alt="this is image"
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
                            alt="this is image"
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
                            alt="this is image"
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
                            alt="this is image"
                            width={700}
                            height={700}
                            />
                            <div className='name-image'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                                <p>Name products</p>
                            </div>
                            <div className='btn'>
                                <ButtonHoverSplit classAdd="width-full flex-center" typeEffect='textEffect1'>Explore</ButtonHoverSplit>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}