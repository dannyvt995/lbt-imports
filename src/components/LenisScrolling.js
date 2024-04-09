"use client";
import React from 'react'
import gsap from 'gsap'
import Lenis from "@studio-freight/lenis";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function LenisScrolling({ children }) {

  const lenisRef = React.useRef(null)

  React.useEffect(() => {
    lenisRef.current.lenis = new Lenis({
      duration: 2.5,
      lerp: 0.045
    })


    const raf = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    setTimeout(() => {
      window.lenis = lenisRef.current.lenis
    }, 2000);
    gsap.ticker.add(raf)
    return () => {
      gsap.ticker.remove(raf)
      lenisRef.current?.lenis?.destroy()
    }
  }, [lenisRef])
  
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
}
