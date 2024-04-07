"use client"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import Image from 'next/image'
export default function GallerySection() {
    const gallerySectionRef = useRef(null)
    const triggleGalleryRef = useRef(null)
    const moveGalleryRef = useRef(null)
    useEffect(() => {
        const listimg = Array.prototype.slice.call( moveGalleryRef.current.children )
        // const timeline = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: triggleGalleryRef.current,
        //         start: 'top top',
        //         end: `bottom 50%`,  /* transform:translateY(100%) on css */
        //         markers: true,
        //         pin: true,
        //         pinSpacing: false,
        //         //scrub:true
        //     },
        //     ease: "power2.out",
        // })
     
        const timelineShow = gsap.timeline({
            scrollTrigger: {
                trigger: triggleGalleryRef.current,
                start: 'top 100%',
                end: `bottom 0%`,  /* transform:translateY(100%) on css */
                markers: true,
                scrub:.4,
                /* pinSpacing: false, */
                onEnter: () => gsap.set(gallerySectionRef.current, { opacity: 1 }),
                onEnterBack: () => gsap.set(gallerySectionRef.current, { opacity: 1 }),
                onLeave: () => gsap.set(gallerySectionRef.current, { opacity: 0 }),
                onLeaveBack: () => gsap.set(gallerySectionRef.current, { opacity: 0 }),
            }
        })
        const listPercent = [20,50,70,90]
        let ctx = gsap.context(() => {
            timelineShow.to(listimg, {
              //yPercent : (index) => listPercent[index]
            })
            return () => ctx.revert();
        })
    }, [triggleGalleryRef, moveGalleryRef, gallerySectionRef])
    return (
        <>
            <div className='wrapper-gallery-section'ref={triggleGalleryRef}>
    
            </div>
            <div className='gallery-section' ref={gallerySectionRef}>
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
                <div className='demo_wrapper_gallery' ref={moveGalleryRef}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
              {/*   <div className='gallery' >
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
                </div> */}
            </div>
        </>

    )
}