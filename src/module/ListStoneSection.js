import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
import ButtonHoverSplit from '@/components/ButtonHoverSplit'

import {useRef,useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
export default function ListStoneSection() {

  gsap.registerPlugin(ScrollTrigger)

  const wrapperParralaxBox = useRef(null)
  const bgParalaxRef = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperParralaxBox.current,
        start: 'top 90%',
        end: `bottom 50%`,
        //markers: true,
        scrub: true,
      },
      ease: "power2.out",
    })
    let ctx = gsap.context(() => {
      timeline.to("html", {
        "--grid-margin-des_clone_forstone": "0px",
      }).to(bgParalaxRef.current, {
        backgroundSize: 105,
        backgroundPosition: "0px -400px",
      }, '<');
      return () => ctx.revert();
    })

  }, [wrapperParralaxBox,bgParalaxRef])

    return(
        <div className="list-products-section light-background">
        <div className="list-products-section_1">
          <div className="grid12-container">
            <div className="tittle">
              <h2>Construction Stone</h2>
              <span className="tag">(03)</span>
            </div>
            <div className="btn-more">
              <ButtonHoverUnderLine color="#252324">View all</ButtonHoverUnderLine>
            </div>
          </div>
        </div>
        <div className="list-products-section_2 stone-list" ref={wrapperParralaxBox}>
        <div className="box" ref={bgParalaxRef}>
          <div className="content">
            <div className="grid12-container" >
              <div className="text">
                <p>Why our products imports is wine ? must have 2-3 line</p>
              </div>
              <div className="btn">
                <ButtonHoverSplit typeEffect='textEffect1' classAdd="width-full">Explore Brands</ButtonHoverSplit>
              </div>
            
            </div>
           
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
                    <div className="detail-willhidden mutil-p" style={{padding: "var(--fz2) 0"}}>
                      <p>LBT IMPORTS PTY. LTD currently provides trusted basalt stone products in many domestic construction projects as well as exported to European, Asian, and Australian markets.</p>

                      <p>With the strength of basalt stone (laterite), it has the characteristics of hardness and good bearing capacity. The stone surface is sawed and cut without needing any treatment but has high roughness and is anti-slip. Widely used for indoor and outdoor wall cladding, sidewalk paving, campuses, courtyards in high-end residential projects,... With mastery of raw material sources and stone cutting saw processing factories . LBT IMPORTS is qualified to participate in signing and implementing contracts to supply basalt paving materials for large projects.</p>
                    </div>
                  </div>
                </div>
                <div className="view-more">
                  <ButtonHoverUnderLine color="#252324">View all</ButtonHoverUnderLine>
                </div>

              </div>
            </div>
            <div className="list-products-section_3_detail-products  layout-list-stone row2">
              <div className="grid12-container">
                <div className="image">
               
                  <Image src={'/stone/bazan.png'} width={700} height={800} priority />
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