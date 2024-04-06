
import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from "react";
import $ from 'jquery'
import gsap from 'gsap'
const NavbarSection = (navbarbg) => {
  const router = useRouter()
  const currentPage = usePathname()
  const listPage = ["/", "/wineautralian", "/constructionstone", "/contactus"] // 4a on nav


  const handleNavigation = (e) => {
    e.preventDefault()
    console.log('Page ready => LOADING_SCENE show')
    gsap.timeline({ onComplete: () => router.push(e.target.getAttribute('datalink')) }).to("#LOADING_SCENE", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: .7
    })
  
  }
  useEffect(() => {

    if (navbarbg.navbarbg === 'black') $('#navbar').addClass('blackBackgroundNavbar')
    for (let i = 0; i < listPage.length; i++) {
      if (currentPage === listPage[i]) {
        $("#navbar a")[i].classList.add('this_pick')
      }
    }
  }, [])
  return (
    <div className="navbar" id="navbar">
      <div className="navbar-bg-dark"></div>
      <div className="navbar-list-item grid12-container">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Logo Lbt"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="menuItem1">
          <ButtonHoverUnderLine eventPass={handleNavigation} datalink="/">About&nbsp;us</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventPass={handleNavigation} datalink="/wineautralian">Wine&nbsp;Australian</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventPass={handleNavigation} datalink="/constructionstone">Construction&nbsp;Stone</ButtonHoverUnderLine>
        </div>
        <div className="menuItem2">
          <ButtonHoverUnderLine eventPass={handleNavigation} datalink="/contactus">Contact&nbsp;us</ButtonHoverUnderLine>
        </div>
      </div>

    </div>
  )
}
export default NavbarSection