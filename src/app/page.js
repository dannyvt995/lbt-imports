"use client"

import HeroSection from "@/module/HeroSection";
import GridView from "@/module/GridView";
import NavbarSection from "@/module/NavbarSection";
import WelcomeSection from "@/module/WelcomeSection";
import ListWineSection from "@/module/ListWineSection";
import FooterSection from "@/module/FooterSection";
import ListStoneSection from "@/module/ListStoneSection";


export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const deomTriggleGsap = useRef(null)
  const deomEffectGsap = useRef(null)


  const asdasd = document.getElementById('parallax-background-target')
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(deomEffectGsap.current, {
        y: -500,
        scrollTrigger: {
     
          trigger: deomTriggleGsap.current,
          start: `top ${window.innerHeight*12/100}`,
          end: `bottom 10%`,
          scrub: true,
          markers: true,
          pin:true,
          onUpdate:(self) => console.log(self.progress)
        }
      })
      
 
      gsap.to("html", {
        "--grid-margin-des_clone": "0px", 
        scrollTrigger: {
          trigger: '.list-products-section_2',
          start: 'top top',
          end: `bottom bottom`,
          markers: true,
          scrub:true,
          onUpdate:(self) => {
            console.log(self.progress)
          }
        }
      });
      return () => ctx.revert(); 
    })
    
  }, [deomEffectGsap, deomTriggleGsap,asdasd])


  return (
    <main>
      <div className="wrapper-content">
        <GridView />
        <NavbarSection />
      </div>
      <div className="wrapper-content">
        <HeroSection />
      </div>
      <WelcomeSection />
      <ListWineSection />
      <ListStoneSection />
      <FooterSection />
    </main>
  );
}
