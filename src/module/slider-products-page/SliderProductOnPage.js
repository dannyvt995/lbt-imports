"use client"
import Image from "next/image"
import ButtonHoverIcon from "@/components/ButtonHoverIcon";
import gsap from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'
import $ from 'jquery'
import { useEffect, useRef } from "react";
export default function SliderProductOnPage() {



    let i_of_slider = 999
    const isRunningEffect = useRef(false)

    function runSlider(what) {
        what.addClass("active").siblings("li").removeClass("active");

    }
    //slider gsap
    function gsapSlider(whose, target1, target2, target3) {

        i_of_slider++;

        if (whose.hasClass("active")) {

            const siblings = whose.siblings();
            gsap.timeline({
                ease: "power2.in",
                overwrite: true,
                onComplete: () => isRunningEffect.current = false
            }).set(
                whose, { zIndex: i_of_slider, clipPath: target1 }
            ).to(
                whose,
                { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", backgroundPositionX: 0, duration: 1.5 }
            )

        }
    }
    function handleClickPrev() {

        let slideImgLarge = $("#large-image-slider li.active").is(":first-of-type")
            ? $("#large-image-slider li:last")
            : $("#large-image-slider li.active").prev("li");

        runSlider(slideImgLarge);

        gsapSlider(slideImgLarge, "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "-100px", "100px");
    }
    function handleClickNext() {

        let slideImgLarge = $("#large-image-slider li.active").is(
            ":last-of-type"
        )
            ? $("#large-image-slider li:first")
            : $("#large-image-slider li.active").next("li");

        runSlider(slideImgLarge);

        gsapSlider(slideImgLarge, "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", "100px", "-100px");

    }






    useEffect(() => {
        gsap.registerPlugin(Draggable)

        var sliderHolder = $("#slider-holder");
        var slider = $("#sliderss");
        var slide = $(".slide");
        var slidesLength = slide.length;

        var slideWidth = sliderHolder.width();
        var activeSlide = 0;

        Draggable.create(slider, {
            type: "x",
         // bounds: slide,
            inertia: true,
          //  throwProps: true,
            //snap: snapX
        });
    })

    function snapX(value) {
        var snapValue = Math.round(value / slideWidth) * slideWidth;
        activeSlide = snapValue / slideWidth;
        console.log(activeSlide);
        return snapValue;
    }
    return (
        <>
            <div className="img_large">
                <ul id="large-image-slider">
                    <li className="active">
                        <Image
                            src="/stone/bazan/IMG_6224.jpg"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </li>
                    <li>
                        <Image
                            src="/stone/bazan/IMG_6225.jpg"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </li>
                    <li>
                        <Image
                            src="/stone/bazan/IMG_6226.jpg"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </li>
                    <li>
                        <Image
                            src="/stone/bazan/IMG_6227.jpg"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </li>
                    <li>
                        <Image
                            src="/stone/bazan/IMG_6228.jpg"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </li>
                    <li>
                        <Image
                            src="/stone/bazan/IMG_6229.jpg"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </li>

                </ul>
                <div className="gr-icon">
                    <ButtonHoverIcon eventPass={handleClickPrev} iconDirection="iconDirection-left" />
                    <ButtonHoverIcon eventPass={handleClickNext} iconDirection="iconDirection-right" />
                </div>
            </div>
            <div className="img_small">
                <div id="slider-holder">
                    <ul id="sliderss">
                        <li className="active slide">
                            <Image
                                src="/stone/bazan/IMG_6224.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6225.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6226.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6227.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6228.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6229.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6228.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6229.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6228.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                        <li className="slide">
                            <Image
                                src="/stone/bazan/IMG_6229.jpg"
                                alt="imgimg"
                                width={500}
                                height={500}
                            />
                        </li>
                    </ul>

                </div>


            </div>
        </>
    )
}