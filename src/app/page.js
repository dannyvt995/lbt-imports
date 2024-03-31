"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'



export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const deomTriggleGsap = useRef(null)
  const deomEffectGsap = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(deomEffectGsap.current, {
        y: -500,
        scrollTrigger: {
     
          trigger: deomTriggleGsap.current,
          start: `top ${window.innerHeight*12/100}`,
          end: `bottom 800px`,
          scrub: true,
          markers: true,
          pin:true,
          onUpdate:(self) => console.log(self.progress)
        }
      })

     /*  ScrollTrigger.create({
        trigger: deomTriggleGsap.current,
        start: 'top top',
        end: `+=50%`,
        pin: '#pinbox',
        markers: true,
      }) */

      return () => ctx.revert(); 
    })
    
  }, [deomEffectGsap, deomTriggleGsap])


  return (
    <main>
      <div className="wrapper-content">
        <div className="grid">
          <div className="wrapperGrid" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar">
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
              <a className="pick-menu">Products</a>
              <a>Brands</a>
              <a>About&nbsp;us</a>
            </div>
            <div className="menuItem2">
              <a>Contact&nbsp;us</a>
            </div>
          </div>

        </div>

      </div>
      <div className="wrapper-content">
        <div className="hero-section">
          <div className="hero-background">

            <Image
               src="/hero-bg.png"
               alt="Hero Section"
               width={500}
               height={500}
               priority
               />
          </div>
          <div className="absolute-content">
            <div className="grid12-container  mtb-1p5rem">
              <div className="heading-hero">
                <h1>Wine Australian</h1>
              </div>
            </div>
            <div className="border-styled-top">
              <div className="grid12-container-nonmargin mtb-1p5rem" >
                <div className="detail-hero ">
                  <div className="grid12-container">
                    <div className="detail-hero--1 flex-row">
                      <span><svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg></span>
                      <p>Lakeside Daydream -  An elegant blend of function and form</p>
                    </div>
                    <div className="detail-hero--2">
                      <h2>Hard drawn designs insproed by the  landspaces</h2>
                      <button className="button-styled-effect width-fit">View Wine Brands</button>
                    </div>
                    <div className="detail-hero--group-button flex-between">
                      <button className="button-circle-l"><svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3536 3.64645C10.5488 3.84171 10.5488 4.15829 10.3536 4.35355L7.17157 7.53553C6.97631 7.7308 6.65973 7.7308 6.46447 7.53553C6.2692 7.34027 6.2692 7.02369 6.46447 6.82843L9.29289 4L6.46447 1.17157C6.2692 0.97631 6.2692 0.659728 6.46447 0.464466C6.65973 0.269203 6.97631 0.269203 7.17157 0.464465L10.3536 3.64645ZM-4.37114e-08 3.5L10 3.5L10 4.5L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="currentColor"></path></svg></button>
                      <button className="button-circle-r"><svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3536 3.64645C10.5488 3.84171 10.5488 4.15829 10.3536 4.35355L7.17157 7.53553C6.97631 7.7308 6.65973 7.7308 6.46447 7.53553C6.2692 7.34027 6.2692 7.02369 6.46447 6.82843L9.29289 4L6.46447 1.17157C6.2692 0.97631 6.2692 0.659728 6.46447 0.464466C6.65973 0.269203 6.97631 0.269203 7.17157 0.464465L10.3536 3.64645ZM-4.37114e-08 3.5L10 3.5L10 4.5L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="currentColor"></path></svg></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="welcome-section">
        <div className="welcome-section_content">
          <div className="grid-continer-4row">
            <div className="welcome-section_content_1 padding-tl-container row1">
              <div className="grid12-container-nonmargin">
                <div className="icon">"</div>
                <div className="text">Lorem Ipsum is  simply dummy printi ng and typesetting</div>
              </div>
            </div>
            <div className="welcome-section_content_2  padding-tl-container row2">
              <div className="grid12-container-nonmargin">
                <div className="tag">
                  <p>[ LBT COMPANY STORY ]</p>
                </div>
                <div className="text mutil-p">
                  <h3>Small text about lbt</h3>

                  <p>LBT Imports Pty Ltd is a Melbourne-based wine exporter, wholesaler, and agent. Drawing on many years in fine wine business, we was convinced of the increasing popularity of Australian wines and established LBT Imports to focus on introducing quality Australian wines to Asian Pacific including Indonesia, Thailand, Campodia, Viet Nam, Malaysia, Philippines, China, Japan, Taiwan and Korea, which is a new and upcoming market with lots of potential.</p>

                  <p>Our mission is to continue our growth and provide our clients with a diverse range of excellent quality products and to assist small to medium-boutique wineries export branded wine. We are always on the lookout for partners that are eager to enter into new and existing markets.</p>
                </div>
              </div>
            </div>
            <div className="welcome-section_content_3  padding-tl-container row3">
              <div className="grid12-container-nonmargin">
                <div className="tag">
                  <p>[ OUR ADVANTAGES ]</p>
                </div>
              </div>
            </div>
            <div className="welcome-section_content_4  padding-tl-container row4">
              <div className="grid12-container-nonmargin">
                <div>
                  <span>01.</span>
                  <h3>Advantage One</h3>
                  <p>Our mission is to continue our growth and provide our clients with a diverse range of excellent .</p>
                </div>
                <div>
                  <span>02.</span>
                  <h3>Advantage One</h3>
                  <p>Our mission is to continue our growth and provide our clients with a diverse range of excellent .</p>
                </div>
                <div>
                  <span>03.</span>
                  <h3>Advantage One</h3>
                  <p>Our mission is to continue our growth and provide our clients with a diverse range of excellent .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-section_gallery">

          <div className="background-gallery">
            <div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-products-section dark-background">
        <div className="list-products-section_1">
          <div className="grid12-container">
            <div className="tittle">
              <h2>Wine Australia</h2>
              <span className="tag">(07)</span>
            </div>
            <div className="btn-more">
              <a className="a-button-italic-underlineEffect">View all</a>
            </div>
          </div>
        </div>
        <div className="list-products-section_2">
          <div className="box margin-tl-container">
            <img src="/asset/wine-list.png" />
            <div className="content flex-row flex-between align-self-end">
              <div>
                <p>Why our products imports is wine ? must have 2-3 line</p>
              </div>
              <button className="button-styled-effect width-fit">Explore Brands</button>
            </div>
          </div>
        </div>
        <div className="border-betweem-section"></div>
        <div className="list-products-section_3" >
        
          <div className="grid12-container-row2" ref={deomTriggleGsap}>
            <div className="list-products-section_3_content row1" >
              <div className="grid12-container">
                <div className="tag">
                  <p>[ WINE AUSTRALIAN ]</p>
                </div>
                <div className="list-wine flex-col">
                  <h3>Wine brands from Australian</h3>

                </div>
                <div className="view-more">
                  <a className="a-button-italic-underlineEffect">View all</a>
                </div>
              </div>
            </div>

            <div className="layout-list-wine row1"  >
              <div className="grid-container-3row">
                <div className="grid12-container row1">
                  <div className="detail-willhidden mutil-p">
                    <p>LBT Imports Pty Ltd is a Melbourne-based wine exporter, wholesaler, and agent.</p>

                    <p>Drawing on many years in fine wine business, founder Long Tran was convinced of the increasing popularity of Australian wines and established LBT Imports to focus on introducing quality Australian wines to Vietnam, which is a new and upcoming market with lots of potential.</p>
                  </div>

                </div>
                <div className="grid12-container  row2"  ref={deomEffectGsap}>
                  <div className="image">
                    <img src="/asset/brand_wine/Paxton.png" />
                  </div>
                  <div className="detail flex-col flex-between">
                    <div className="top">
                      <span>[ Wine brands ]</span>
                      <ul>
                        <li>
                          <span>→</span>
                          <a>Pettavel</a>
                        </li>
                        <li>
                          <span>→</span>
                          <a>Dominic</a>
                        </li>
                        <li className="pick">
                          <span>→</span>
                          <a>Paxton</a>
                        </li>
                        <li>
                          <span>→</span>
                          <a>Berton Vineyard</a>
                        </li>
                        <li>
                          <span>→</span>
                          <a>Organic Wine</a>
                        </li>
                        <li>
                          <span>→</span>
                          <a>Ulupna</a>
                        </li>
                      </ul>
                    </div>
                    <div className="bot">

                      <h3>PAXTON WINES</h3>
                    </div>
                  </div>
                </div>
                <div className="grid12-container  row3">
                  <div className="note">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                    <p>Organic and Biodynamic</p>
                  </div>
                  <div className="detail">
                    <p>The Name Ulupna locates the vineyard, winery and cellar door. The name identifies the local Aboriginal clan of the Yorta Yorta tribe, and was also, historically, the name of the wider region that is Ulupna. Possessing a number of meanings, Ulupna most commonly translates as ‘strong women’.</p>
                    <a className="a-button-italic-underlineEffect">Explore more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-products-section light-background">
        <div className="list-products-section_1">
          <div className="grid12-container">
            <div className="tittle">
              <h2>Construction Stone</h2>
              <span className="tag">(03)</span>
            </div>
            <div className="btn-more">
              <a className="a-button-italic-underlineEffect">View all</a>
            </div>
          </div>
        </div>
        <div className="list-products-section_2">
          <div className="box margin-tl-container">
            <img src="/asset/stone/bazan.png" />
            <div className="content flex-row flex-between align-self-end">
              <div>
                <p>Why our products imports is wine ? must have 2-3 line</p>
              </div>
              <button className="button-styled-effect width-fit">Explore Brands</button>
            </div>
          </div>
        </div>
        <div className="border-betweem-section"></div>
        <div className="list-products-section_3 ">
          <div className="grid-container-2row">
            <div className="list-products-section_3_content  row1">
              <div className="grid12-container">
                <div className="tag">
                  <p>[CONSTRUCTION STONE]</p>
                </div>
                <div className="list-wine flex-col">
                  <h3>Stone Contrustion from Australian</h3>

                  <div className="list-wine flex-col">
                    <div>
                      <p>LBT IMPORTS PTY. LTD currently provides trusted basalt stone products in many domestic construction projects as well as exported to European, Asian, and Australian markets.</p>

                      <p>With the strength of basalt stone (laterite), it has the characteristics of hardness and good bearing capacity. The stone surface is sawed and cut without needing any treatment but has high roughness and is anti-slip. Widely used for indoor and outdoor wall cladding, sidewalk paving, campuses, courtyards in high-end residential projects,... With mastery of raw material sources and stone cutting saw processing factories . LBT IMPORTS is qualified to participate in signing and implementing contracts to supply basalt paving materials for large projects.</p>
                    </div>
                  </div>
                </div>
                <div className="view-more">
                  <a className="a-button-italic-underlineEffect">View all</a>
                </div>

              </div>
            </div>
            <div className="list-products-section_3_detail-products  layout-list-stone row2">
              <div className="grid12-container">
                <div className="image">
                  <img src="/asset/stone/bazan.png" />
                </div>
                <div className="detail flex-col flex-between">
                  <div className="top">
                    <span>[ STONE LIST ]</span>
                    <ul>
                      <li>
                        <span>→</span>
                        <a>Bazan Stone</a>
                      </li>
                      <li>
                        <span>→</span>
                        <a>BlueStone</a>
                      </li>
                      <li>
                        <span>→</span>
                        <a>Terrazzo Stone</a>
                      </li>
                    </ul>
                  </div>

                  <div className="bot">
                    <h3>BAZAN STONE</h3>
                    <p>The Name Ulupna locates the vineyard, winery and cellar door. The name identifies the local Aboriginal clan of the Yorta Yorta tribe, and was also, historically, the name of the wider region that is Ulupna. Possessing a number of meanings, Ulupna most commonly translates as ‘strong women’.</p>
                    <a>Explore more...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="footer">
        <div className="footer-content grid12-container grid12-container-row2 ">
          <div className="footer-content_1 grid12-container-nonmargin">
            <div className="logo">
              <img src="./asset/logo.png" />
              <div className="list-icon-social"></div>
            </div>
            <div className="menu">
              <a>Products</a>
              <a>Brands</a>
              <a>About us</a>
              <a>Contact</a>
              <a>Location</a>
            </div>
            <div className="info">
              <div className="item-info">
                <p>Email</p>
                <a>contact@lbt-imports.au</a>
              </div>
              <div className="item-info">
                <p>Phone</p>
                <a>(+12) 345.567.789</a>
              </div>
              <div className="group-button">
                <button className="button-styled-effect width-full">Contact Us</button>
              </div>
            </div>
          </div>
          <div className="footer-content_2">
            <div className="footer-author">© 2024 Copyright LBT imports of New Zealand</div>
            <div className="footer-design">Build by Weeb Flip</div>
          </div>
        </div>
      </div>
    </main>
  );
}
