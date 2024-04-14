
import gsap from "gsap"
//import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime" //type 

export const animatePageIn = () => {
  const loadingScene = document.getElementById("LOADING_SCENE")
  console.log("FIREEEE ENTER PAGE")
  
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

    console.log('animatePageOut')
    gsap.to(loadingScene, {
      opacity:1,
     // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: .2,
      onComplete: () => {
        console.log('animatePageOut gooooo ',href)
        router.push(href, { scroll: false }) // set for window.scrollTo run with NO conflic
      },
    })
  }
}