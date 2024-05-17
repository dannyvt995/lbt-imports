
"use client"
 
import { useEffect } from "react";
import Aboutus from "./about-us/page";
import BackgroundFixed from "@/components/BackgroundFixed"


export default function Home() {
  useEffect(() => {
    window.scrollTo(0,0)
},[])
  return (
    <main>
      <Aboutus />
      <BackgroundFixed/>
    </main>
  );
}
