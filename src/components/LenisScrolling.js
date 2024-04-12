"use client";
import React from 'react'
import gsap from 'gsap'
import Lenis from "@studio-freight/lenis";
import { ReactLenis } from "@studio-freight/react-lenis";
function easeOutQuint(x) {
  return 1 - Math.pow(1 - x, 5);
  }
export default function LenisScrolling({ children }) {

  const lenisRef = React.useRef(null)
  const options = {
    //lerp:0.045,
     duration:1,
     easing:(t) => easeOutQuint(t)
  }
  React.useEffect(() => {
    //if(lenisRef.current) lenisRef.current?.destroy()
 
    lenisRef.current.lenis = new Lenis()
    const raf = (time) => {
      lenisRef.current.lenis?.raf(time * 1000);
    };
    setTimeout(() => {
      window.lenis = lenisRef.current.lenis
    }, 2000);
    gsap.ticker.add(raf)
    return () => {
      gsap.ticker.remove(raf)
    }
  }, [lenisRef])
  
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={options}>
      {children}
    </ReactLenis>
  );
}
