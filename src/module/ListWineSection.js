import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import ButtonHoverSplit from '@/components/ButtonHoverSplit'

import {useRef,useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
export default function ListWineSection() {

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
  
        return () => ctx.revert(); 
      })
      
    }, [deomEffectGsap, deomTriggleGsap])

    return (
        <div className="list-products-section dark-background">
        <div className="list-products-section_1">
          <div className="grid12-container">
            <div className="tittle">
              <h2>Wine Australia</h2>
              <span className="tag">(07)</span>
            </div>
            <div className="btn-more">
            <ButtonHoverUnderLine>View all</ButtonHoverUnderLine>
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
              <ButtonHoverSplit typeEffect='textEffect1'>Explore Brands</ButtonHoverSplit>
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
                  <ButtonHoverUnderLine>View all</ButtonHoverUnderLine>
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
                          <ButtonHoverUnderLine>Pettavel</ButtonHoverUnderLine>
                        </li>
                        <li>
                          <span>→</span>
                          <ButtonHoverUnderLine>Dominic</ButtonHoverUnderLine>
                        </li>
                        <li>
                          <span>→</span>
                          <ButtonHoverUnderLine>Paxton</ButtonHoverUnderLine>
                        </li>
                        <li>
                          <span>→</span>
                          <ButtonHoverUnderLine>Berton Vineyard</ButtonHoverUnderLine>
                        </li>
                        <li>
                          <span>→</span>
                          <ButtonHoverUnderLine>Organic Wine</ButtonHoverUnderLine>
                        </li>
                        <li>
                          <span>→</span>
                          <ButtonHoverUnderLine>Ulupna</ButtonHoverUnderLine>
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
    )
}