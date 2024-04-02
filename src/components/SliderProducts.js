"use client"
import '@/styles/slider-products.css'
import gsap from 'gsap'
import $ from 'jquery';
import React from 'react';
/* https://codepen.io/Em-An/pen/LyxZaR */
const SliderProducts = () => {
    const controllPrev = React.useRef(null)
    const controllNext = React.useRef(null)
    const firstSlideRef = React.useRef(null)
    React.useEffect(() => {
        if (firstSlideRef.current) {
          firstSlideRef.current.style.left = '0%';
        }
      }, [firstSlideRef]);
    React.useEffect(()=>{
        const aaa = document.querySelectorAll(".slider ol li")
    
    const sliderItem = 1
    const zIndexShow = 999
    const actived = document.querySelectorAll(".slider .controll")
        const asdfsdv = $(".slider ul li.active, .slider ol li.active")
        asdfsdv.addClass("active").siblings("li, span").removeClass("active")
        console.log(asdfsdv)
        
    // Run Slider
    function runSlider(what) {
        what.addClass("active").siblings("li, span").removeClass("active");
    }
    // slider gsap
    // function gsapSlider(whose, left) {
    //     i++;
    //     if (whose.hasClass("active")) {
    //         gsap.timeline().fromTo(
    //             ".slider ul li.active",
    //             sliderItem,
    //             { zIndex: zIndexShow, left: left },
    //             { left: 0 }
    //         );
    //     }
    // }
    // Active
    // actived.on("click", function () {
    //     runSlider($(this));
    // });
    // Arrow left
//    (controllPrev.current).on("click", function () {
//     console.log('sdasdasdasd')
//         var slide = $(".slider ul li.active, .slider ol li.active").is(
//             ":first-of-type"
//         )
//             ? $(".slider ul li:last, .slider ol li:last")
//             : $(".slider ul li.active, .slider ol li.active").prev("li");
//         runSlider(slide);
//         gsapSlider(slide, "100%");
//     });
    // Arrow right
  
    // controllNext.current.on("click", function () {
    //     var slide = $(".slider ul li.active, .slider ol li.active").is(
    //         ":last-of-type"
    //     )
    //         ? $(".slider ul li:first, .slider ol li:first")
    //         : $(".slider ul li.active, .slider ol li.active").next("li");
    //     runSlider(slide);
    //     gsapSlider(slide, "-100%");
    // });
    // Point
    // $(".slider ol li").on("click", function () {
    //     var start = $(".slider ul li.active").index();
    //     var slide = $(".slider ul li").eq($(this).index());
    //     runSlider(slide);
    //     var end = $(".slider ul li.active").index();
    //     if (start > end) {
    //         gsapSlider(slide, "100%");
    //     }
    //     if (start < end) {
    //         gsapSlider(slide, "-100%");
    //     }
    // });
    },[controllPrev,controllNext])
  
    function handleClickPrev() {
        console.log('prev')
    }
    function handleClickNext() {
        console.log('next')
    }
    return (


        <div class="slider">

            <ul>
                <li class="active" ref={firstSlideRef}></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ol>

                <li class="active" ><i class="fa fa-circle-o"></i></li>
                <li><i class="fa fa-circle-o"></i></li>
                <li><i class="fa fa-circle-o"></i></li>
                <li><i class="fa fa-circle-o"></i></li>
                <li><i class="fa fa-circle-o"></i></li>

                <i class="fa playpause fa-pause-circle-o" title="pause"></i>
            </ol>

            <span class="controll active" ref={controllPrev} onClick={handleClickPrev}></span>
            <span class="controll" ref={controllNext} onClick={handleClickNext}></span>
        </div>
    )
}

export default SliderProducts