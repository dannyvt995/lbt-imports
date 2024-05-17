"use client"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import $ from 'jquery'
import Image from 'next/image'
import Link from 'next/link'
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
export default function SliderStone() {

    const triggleTitle_PartAll = useRef(null)
    const layoutStoneRef = useRef(null)
    let i_of_slider = 999
    const isRunningEffect = useRef(false)

    function runSlider(what) {
        what.addClass("active").siblings("li").removeClass("active");
    }
    //slider gsap
    function gsapSlider(whose, target, left) {

        i_of_slider++;
        if (whose.hasClass("active")) {
            gsap.timeline({
                ease: "power2.in",
                onComplete: () => setTimeout(() => {
                    isRunningEffect.current = false
                }, 500)
            }).set(
                "#LIST_SLIDER_STONE_PRODUCTS ul.img_parent li.active,#LIST_SLIDER_STONE_PRODUCTS ul.img_child li.active", { zIndex: i_of_slider, clipPath: target }
            ).set(
                "#DETAIL_ITEM_SLIDER_STONE_PRODUCTS ul li.active", { zIndex: i_of_slider, opacity: 0 }
            ).set(
                "#DETAIL_ITEM_SLIDER_STONE_PRODUCTS ul li:not(.active)", { opacity: 0 }
            ).to(
                "#LIST_SLIDER_STONE_PRODUCTS ul.img_parent li.active,#LIST_SLIDER_STONE_PRODUCTS ul.img_child li.active",
                { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
            ).to(
                "#DETAIL_ITEM_SLIDER_STONE_PRODUCTS ul li.active",
                { opacity: 1 },
                "<"
            );
        }
    }

    const handleClickIcon = (e) => {
        // Prevents the default action associated with the event

        if (isRunningEffect.current === true) return;
        isRunningEffect.current = true;
        handleScrollTo(layoutStoneRef.current)
        const slideIndex = $(e.currentTarget.parentElement).index();
        const slideSelectors = [
            $("#LIST_SLIDER_STONE_PRODUCTS ul.img_parent li"),
            $("#LIST_SLIDER_STONE_PRODUCTS ul.img_child li"),
            $("#MENU_SLIDER_STONE_PRODUCTS ul li"),
            $("#ITEM_NAME_SLIDER_PRODUCTS ul li"),
            $("#DETAIL_ITEM_SLIDER_STONE_PRODUCTS ul li")
        ];

        const start = slideSelectors.map(selector => selector.filter('.active').index());
        const slideElements = slideSelectors.map(selector => selector.eq(slideIndex));
        slideElements.forEach(runSlider);

        const end = slideSelectors.map(selector => selector.filter('.active').index());

        slideElements.forEach((slideElement, index) => {
            if (start[index] > end[index]) {
                gsapSlider(slideElement, "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "100%");
            }
            if (start[index] < end[index]) {
                gsapSlider(slideElement, "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", "-100%");
            }
        });
    };

    const handleScrollTo = (target) => {
        window.lenis?.scrollTo(target, {
            offset: -window.innerHeight / 100 * 5,
            duration: .5,
        
            force: true,
            lock: true,

        })
    }

    return (
        <section className="layout-list-stone row2  light-background" ref={layoutStoneRef}>
            <div className="grid12-container">
                <div className="image" id="LIST_SLIDER_STONE_PRODUCTS">
                    <ul className='img_parent'>
                        <li className="active">
                            
                        </li>
                        <li>
                           
                        </li>
                        <li>
                          
                        </li>
                    </ul>
                    <ul className='img_child'>
                        <li className="active">
                           
                        </li>
                        <li>
                        
                        </li>
                        <li>
                           
                        </li>
                    </ul>
                </div>
                <div className="detail flex-col flex-between">
                    <div className="top" id="MENU_SLIDER_STONE_PRODUCTS">
                        <span>[ STONE LIST ]</span>
                        <ul>
                            <li className='active'>
                                <span>→</span>
                                <ButtonHoverUnderLine eventPass={handleClickIcon} color="#252324">Basalt Stone</ButtonHoverUnderLine>
                            </li>
                            <li>
                                <span>→</span>
                                <ButtonHoverUnderLine eventPass={handleClickIcon} color="#252324">BlueStone</ButtonHoverUnderLine>
                            </li>
                            <li>
                                <span>→</span>
                                <ButtonHoverUnderLine eventPass={handleClickIcon} color="#252324">Granite Stone</ButtonHoverUnderLine>
                            </li>
                        </ul>
                    </div>

                    <div className="bot" id="DETAIL_ITEM_SLIDER_STONE_PRODUCTS">
                        <ul>
                            <li className="active">
                                <div>
                                    <h3>BASALT STONE</h3>
                                    <p>Basalt stone is a type of natural stone originating from volcanoes and formed through the cooling process of molten lava. The main characteristic of basalt stone is its dark or deep gray color, often with a dense crystal structure and rough surface.</p>
                                    <ButtonHoverUnderLine color="#252324" eventLink={'handleNavigation'} datalink='/natural-stone/basalt-stone'>Explore more...</ButtonHoverUnderLine>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>BLUE STONE</h3>
                                    <p>Blue stone, also known as bluestone, is a type of natural stone characterized by its distinctive blue-gray coloration. It is formed from sedimentary rock, typically sandstone or limestone, that has undergone intense pressure and heat over millions of years</p>
                                    <ButtonHoverUnderLine color="#252324" eventLink={'handleNavigation'} datalink='/natural-stone/blue-stone'>Explore more...</ButtonHoverUnderLine>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>GRANITE STONE</h3>
                                    <p>The Name Ulupna locates the vineyard, winery and cellar door. The name identifies the local Aboriginal clan of the Yorta Yorta tribe, and was also, historically, the name of the wider region that is Ulupna. Possessing a number of meanings, Ulupna most commonly translates as ‘strong women’.</p>
                                    <ButtonHoverUnderLine color="#252324" eventLink={'handleNavigation'} datalink='/natural-stone/granite-stone'>Explore more...</ButtonHoverUnderLine>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>


    )
}