import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import ButtonHoverSplit from '@/components/ButtonHoverSplit'

import {useRef,useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
export default function ListStoneSection() {

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

    return(
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
                        <ButtonHoverUnderLine color="#252324">Bazan Stone</ButtonHoverUnderLine>
                      </li>
                      <li>
                        <span>→</span>
                        <ButtonHoverUnderLine color="#252324">BlueStone</ButtonHoverUnderLine>
                      </li>
                      <li>
                        <span>→</span>
                        <ButtonHoverUnderLine color="#252324">Terrazzo Stone</ButtonHoverUnderLine>
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
    )
}