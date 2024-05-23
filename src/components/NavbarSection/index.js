"use client"
import Image from "next/image";
import ButtonHoverUnderLine from "@/Interactive/ButtonHoverUnderLine";
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { animatePageOut } from "@/utils/animations_loading";
import { useEffect, useRef } from "react";
import MenuIcon from "@/components/iconsvg/MenuIcon";
import './style.css'
const NavbarSection = () => {
  const router = useRouter()
  const pathname = usePathname()
  const navbar_mobiRef_view = useRef(null)
  const iconnavbar_mobiRef_view = useRef(null)
  const handleActiveMenu = (e) => {
    e.preventDefault()

    const navbarMobiRef = navbar_mobiRef_view.current;
    const iconNavbarMobi = iconnavbar_mobiRef_view.current;
    if (navbarMobiRef.classList.contains('active_view_navmobi') && iconNavbarMobi.classList.contains('active_icon_navbar')) {
      navbarMobiRef.classList.remove('active_view_navmobi');
      iconNavbarMobi.classList.remove('active_icon_navbar');
    } else {

      navbarMobiRef.classList.add('active_view_navmobi');
      iconNavbarMobi.classList.add('active_icon_navbar');
    }
    //  console.log(navbarMobiRef,iconNavbarMobi)
  }
  const handleNavigation = (e) => {

    e.preventDefault()
    const targetUrl = e.currentTarget.getAttribute('datalink')
    if (pathname == targetUrl) {
      //console.log('dup')
    } else {
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
            <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/wine-autralia">Wine&nbsp;Australian</ButtonHoverUnderLine>
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
          <MenuIcon color={"white"} />
        </a>
      </div>
      <div className="navbar_mobi_view" ref={navbar_mobiRef_view}>
        <div className="btn">
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/construction-gallery">Projects</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/">About&nbsp;us</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/wine-autralia">Wine&nbsp;Australian</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/natural-stone">Natural&nbsp;Stone</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/contact-us">Contact&nbsp;us</ButtonHoverUnderLine>
        </div>
        <div className="btn_2">
          <a href="tel:+61400526898">
            <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Capa_1" viewBox="0 0 473.806 473.806" stroke="#ffffff">

              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

              <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z" /> <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z" /> <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z" /> </g> </g> </g>

            </svg>
          </a>
          <a href="mailto:lbtimportservices@gmail.com">
            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="#252324" >

              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

              <g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

            </svg>

          </a>
        </div>
      </div>

    </section>
  )
}
export default NavbarSection