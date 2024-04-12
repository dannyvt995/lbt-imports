"use client"
import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { animatePageOut } from "@/utils/animations_loading";
import { useEffect } from "react";
const NavbarSection = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (e) => {
  
    e.preventDefault()
    const targetUrl = e.currentTarget.getAttribute('datalink')
    if (!targetUrl || pathname === targetUrl) return;
    animatePageOut(targetUrl, router);

}
  return (
    <div className="navbar" id="navbar">
      <div className="navbar-bg-dark" id="Navbar_Background_Dark"></div>
      <div className="navbar-list-item grid12-container">
        <div className="logo">
          <a onClick={handleNavigation} datalink="/">
            <Image
              src="/logo.png"
              alt="Logo Lbt"
              width={500}
              height={500}
              priority
            />
          </a>
        </div>
        <div className="menuItem1">
          <ButtonHoverUnderLine  eventLink={'handleNavigation'} datalink="/projects">Projects</ButtonHoverUnderLine>
          <ButtonHoverUnderLine  eventLink={'handleNavigation'} datalink="/">About&nbsp;us</ButtonHoverUnderLine>
          <ButtonHoverUnderLine  eventLink={'handleNavigation'} datalink="/wine-autralia">Wine&nbsp;Australian</ButtonHoverUnderLine>
          <ButtonHoverUnderLine  eventLink={'handleNavigation'} datalink="/natural-stone">Natural&nbsp;Stone</ButtonHoverUnderLine>
        </div>
        <div className="menuItem2">
          <ButtonHoverUnderLine  eventLink={'handleNavigation'} datalink="/contact-us">Contact&nbsp;us</ButtonHoverUnderLine>
        </div>
      </div>

    </div>
  )
}
export default NavbarSection