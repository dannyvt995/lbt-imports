"use client";
import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import Lenis from "@studio-freight/lenis";
import { ReactLenis } from "@studio-freight/react-lenis";


const easing = (x) => {
  return 1 - Math.pow(1 - x, 4);
};

function LenisScrolling({ children }) {
  const lenisRef = React.useRef()
  gsap.registerPlugin(ScrollTrigger)
  React.useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 2,
      lerp: 0.05,
      easing: easing,
    })

  

  
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }
 
  
    gsap.ticker.add(update)

    return gsap.ticker.remove(update)
  },[])

  return (
    <ReactLenis root >
      {children}
    </ReactLenis>
  );
}

export default LenisScrolling;