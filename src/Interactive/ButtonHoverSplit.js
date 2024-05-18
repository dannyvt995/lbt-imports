"use client"

import React from "react"
import gsap from 'gsap'
import { usePathname, useRouter } from "next/navigation"

export default function ButtonHoverSplit({ eventLink,targetId,targetUrl,children, typeEffect , classAdd,textColor,this_call,this_mailto}) {
    const aRef = React.useRef(null)
    const aBgRef = React.useRef(null)
    const aTextRef = React.useRef(null)
    const router = useRouter()
    
    const options = {
        textEffect1: {
            props: {
                borderRadius: '50px'
            },
            current: {
                color: '#fffcf5',
                duration: .2
            },
            next: {
                color: '#252324',
                duration: .2
            }
        },
        textEffect2: {
            props: {
                borderRadius: '50px'
            },
            current: {
                color: '#252324',
                duration: .2
            },
            next: {
                color: '#fffcf5',
                duration: .2
            }
        }
    }

    const handleNavigation = (e) => {

        e.preventDefault()
        if (targetId) {
            const target = document.getElementById(`${targetId}`)
     
            window.lenis?.scrollTo(target,{  
                offset: 0,
                duration: 1,
                lerp: 0.05,
                force: true,
                lock: true,
            })
        }else if(targetUrl) {
            router.push(targetUrl, { scroll: false })
        }
       

    }
    React.useEffect(() => {
        if (!aRef.current && !aBgRef.current && !aTextRef.current) return;
        let rls

        switch (typeEffect) {
            case "textEffect1":
                rls = options.textEffect1
                break;
            case "textEffect2":
                rls = options.textEffect2
                break;
        }
        aRef.current.className = aRef.current.className + ' ' + classAdd
        aRef.current.tl = gsap.timeline({ paused: true }); // auto save timline for each dom
        aRef.current.tl.fromTo(aBgRef.current, {
            y: `101%`
        }, {
            y: 0,
            duration: .5,
        }).to(aTextRef.current, rls.current, '<')

        aRef.current.tl.add("midway");

        aRef.current.tl.fromTo(aBgRef.current, {
            y: 0
        }, {
            y: `-101%`,
            duration: .5,
            immediateRender: false
        }).to(aTextRef.current, rls.next, '<')

        const enterAnimation = (e) => {
            aRef.current.tl.tweenFromTo(0, "midway");

        };

        const leaveAnimation = (e) => {
            aRef.current.tl.play();
        };



        // Mouseenter
        aRef.current.addEventListener("mouseenter", enterAnimation);

        // Mouseleave
        aRef.current.addEventListener("mouseleave", leaveAnimation);

        // Cleanup event listeners on component unmount
        return () => {
            if (aRef.current) {
                aRef.current.removeEventListener("mouseenter", enterAnimation);
                aRef.current.removeEventListener("mouseleave", leaveAnimation);
            }
        };

    }, [aRef,aTextRef,aBgRef]);


    return (
        <a 
        onClick={
            eventLink === "handleNavigation" ? handleNavigation : null
        }
        ref={aRef} 
        className="button-styled-effect button-hover-split"  
        href={this_call ? "tel:+61 400 526 893" : (this_mailto ? "mailto:lbtimportsservices@gmail.com" : null)}>
            <span ref={aTextRef} className="split-eff-text">{children}</span>
            {/* <span className="split-eff-btt-next">{children}</span> */}
            <span ref={aBgRef} className="split-eff-background"></span>
        </a>
    )
}