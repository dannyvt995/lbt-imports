
import gsap from "gsap"
//import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime" //type 

export const animatePageIn = () => {
  const bannerOne = document.getElementById("LOADING_SCENE")
  
  if (bannerOne) {
    const tl = gsap.timeline()
    window.scrollTo(0,0)
    
    tl.to(bannerOne, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: .5,
    })
  }
}

export const animatePageOut = (href,router) => {
  const bannerOne = document.getElementById("LOADING_SCENE")
  router.push(href, { scroll: true }) 
  // if (bannerOne) {
  //   const tl2 = gsap.timeline()
  //   console.log('animatePageOut')
  //   tl2.to(bannerOne, {
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     duration: .5,
  //     onComplete: () => {
   
  //       router.push(href, { scroll: false }) // set for window.scrollTo run with NO conflic
  //     },
  //   })
  // }
}