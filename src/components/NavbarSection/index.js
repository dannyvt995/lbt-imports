"use client"
import Image from "next/image";
import ButtonHoverUnderLine from "@/Interactive/ButtonHoverUnderLine";
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { animatePageOut } from "@/utils/animations_loading";
import { useEffect, useRef } from "react";
import MenuIcon from "@/components/IconSvg/MenuIcon";
import './style.css'
const NavbarSection = () => {
  const router = useRouter()
  const pathname = usePathname()
  const navbar_mobiRef_view = useRef(null)
  const iconnavbar_mobiRef_view = useRef(null)
  const handleActiveMenu = (e) => {
    e.preventDefault()
   
    const navbarMobiRef = navbar_mobiRef_view.current;
    const iconNavbarMobi= iconnavbar_mobiRef_view.current;
    if (navbarMobiRef.classList.contains('active_view_navmobi') && iconNavbarMobi.classList.contains('active_icon_navbar')) {
      navbarMobiRef.classList.remove('active_view_navmobi');
      iconNavbarMobi.classList.remove('active_icon_navbar');
    } else {

      navbarMobiRef.classList.add('active_view_navmobi');
      iconNavbarMobi.classList.add('active_icon_navbar');
    }
    console.log(navbarMobiRef,iconNavbarMobi)
  }
  const handleNavigation = (e) => {

    e.preventDefault()
    const targetUrl = e.currentTarget.getAttribute('datalink')
    if(pathname == targetUrl) {
      console.log('dup')
    }else{
      router.push(targetUrl, { scroll: false })
    }

  }
  return (
    <section>
      <div className="navbar" id="navbar">
        <div className="navbar-bg-dark" id="Navbar_Background_Dark"></div>
        <div className="navbar-list-item grid12-container">
          <div className="logo">
            <a onClick={handleNavigation} datalink="/">
              <Image
                src="/logo_outdes.png"
                alt="Logo Lbt"
                width={500}
                height={500}
                priority
              />
            </a>
          </div>
          <div className="menuItem1">
            <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/construction-gallery">Construction</ButtonHoverUnderLine>
            <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/">About&nbsp;us</ButtonHoverUnderLine>
         {/*    <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/wine-autralia">Wine&nbsp;Australian</ButtonHoverUnderLine> */}
            <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/natural-stone">Natural&nbsp;Stone</ButtonHoverUnderLine>
          </div>
          <div className="menuItem2">
            <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/contact-us">Contact&nbsp;us</ButtonHoverUnderLine>
          </div>
        </div>
      </div>
      <div className="navbar_mobi_controls">
          <a className="logo_navbar" onClick={handleNavigation} datalink="/">
            <Image
              src="/logo_outdes.png"
              alt="Logo Lbt"
              width={500}
              height={500}
              priority
            />
          </a>
          <a className="btn_navbar" onClick={handleActiveMenu} ref={iconnavbar_mobiRef_view}>
            <MenuIcon color={"white"}/>
          </a>
        </div>
        <div className="navbar_mobi_view" ref={navbar_mobiRef_view}>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/construction-gallery">Projects</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/">About&nbsp;us</ButtonHoverUnderLine>
        {/*   <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/wine-autralia">Wine&nbsp;Australian</ButtonHoverUnderLine> */}
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/natural-stone">Natural&nbsp;Stone</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/contact-us">Contact&nbsp;us</ButtonHoverUnderLine>
        </div>
    </section>
  )
}
export default NavbarSection