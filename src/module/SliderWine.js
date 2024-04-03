import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import $ from 'jquery'
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
export default function SliderWine() {
    const deomTriggleGsap = useRef(null)
    const deomEffectGsap = useRef(null)
    const firstSlideRef = useRef(null)
    let i_of_slider = 999
    const sliderItem = 1
    /*  gsap.to(deomEffectGsap.current, {
            y: -500,
            scrollTrigger: {
    
              trigger: deomTriggleGsap.current,
              start: `top ${window.innerHeight * 12 / 100}`,
              end: `bottom 800px`,
              scrub: true,
              // markers: true,
              pin: true,
              onUpdate: (self) => console.log(self.progress)
            }
          }) */
    useEffect(() => {
        if (firstSlideRef.current) {
            firstSlideRef.current.style.left = '0%';
        }
    }, [firstSlideRef]);


    function runSlider(what) {
        what.addClass("active").siblings("li, span").removeClass("active");
    }
    //slider gsap
    function gsapSlider(whose, left) {
        i_of_slider++;
        if (whose.hasClass("active")) {
            gsap.timeline({
                ease: "power2.in"
            }).fromTo(
                "#LIST_SLIDER_PRODUCTS ul li.active",
                sliderItem,
                { zIndex: i_of_slider, left: left },
                { left: 0 }
            );
        }
    }
    function handleClickIcon(e) {
        var start = $("#LIST_SLIDER_PRODUCTS ul li.active").index();
        var slide = $("#LIST_SLIDER_PRODUCTS ul li").eq($(e.target).index());
        console.log($(e.target).index())
        runSlider(slide);
        var end = $("#LIST_SLIDER_PRODUCTS ul li.active").index();
        if (start > end) {
            gsapSlider(slide, "100%");
        }
        if (start < end) {
            gsapSlider(slide, "-100%");
        }
    }
    return (
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
                        <div className="grid12-container  row2" ref={deomEffectGsap}>
                            <div className="image" id="LIST_SLIDER_PRODUCTS">
                                <ul>
                                    <li className="active" ref={firstSlideRef}></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>

                            </div>
                            <div className="detail flex-col flex-between">
                                <div className="top" id="MENU_SLIDER_PRODUCTS">
                                    <span>[ Wine brands ]</span>
                                    <ul>
                                        <li onClick={handleClickIcon}>
                                            <span>→</span>
                                            <ButtonHoverUnderLine>Pettavel</ButtonHoverUnderLine>
                                        </li>
                                        <li onClick={handleClickIcon}>
                                            <span>→</span>
                                            <ButtonHoverUnderLine>Dominic</ButtonHoverUnderLine>
                                        </li>
                                        <li onClick={handleClickIcon}>
                                            <span>→</span>
                                            <ButtonHoverUnderLine>Paxton</ButtonHoverUnderLine>
                                        </li>
                                        <li onClick={handleClickIcon}>
                                            <span>→</span>
                                            <ButtonHoverUnderLine>Berton Vineyard</ButtonHoverUnderLine>
                                        </li>
                                        <li onClick={handleClickIcon}>
                                            <span>→</span>
                                            <ButtonHoverUnderLine>Organic Wine</ButtonHoverUnderLine>
                                        </li>
                                        <li onClick={handleClickIcon}>
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

    )
}