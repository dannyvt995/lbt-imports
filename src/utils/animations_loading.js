
import gsap from "gsap"
//import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime" //type 

export const animatePageIn = () => {
  const loadingScene = document.getElementById("LOADING_SCENE")
  
  if (loadingScene) {
    const tl = gsap.timeline()
    window.scrollTo(0,0)
    
    tl.to(loadingScene, {
        opacity:0,
       // clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: 1,
    })
  }
}

export const animatePageOut = (href,router) => {
  const loadingScene = document.getElementById("LOADING_SCENE")
  
  if (loadingScene) {
    const tl2 = gsap.timeline()
    console.log('animatePageOut')
    tl2.to(loadingScene, {
      opacity:1,
     // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: .5,
      onComplete: () => {
        console.log('animatePageOut gooooo ',href)
        router.push(href, { scroll: false }) // set for window.scrollTo run with NO conflic
      },
    })
  }
}