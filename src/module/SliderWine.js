import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import $ from 'jquery'
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
export default function SliderWine() {
   
    const deomEffectGsap = useRef(null)
    const firstSlideRef = useRef(null)
    let i_of_slider = 999


    useEffect(() => {
        if (firstSlideRef.current) {
            firstSlideRef.current.style.left = '0%';
        }
    }, [firstSlideRef]);


    function runSlider(what) {
        what.addClass("active").siblings("li").removeClass("active");
    }
    //slider gsap
    function gsapSlider(whose,target, left) {

        i_of_slider++;
        if (whose.hasClass("active")) {
            gsap.timeline({
                ease: "power2.in"
            }).set(
                "#LIST_SLIDER_PRODUCTS ul li.active", { zIndex: i_of_slider, clipPath:target}
            ).set(
                "#ITEM_NAME_SLIDER_PRODUCTS ul li.active" , { zIndex: i_of_slider ,top:left, opacity: 0}
            ).set(
                "#DETAIL_ITEM_SLIDER_PRODUCTS ul li.active" , {zIndex: i_of_slider,opacity : 0}
            ).to(
                "#LIST_SLIDER_PRODUCTS ul li.active",
                { clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
            ).to(
                "#ITEM_NAME_SLIDER_PRODUCTS ul li.active",
                { top:0, opacity: 1},
                "<"
            ).to(
                "#DETAIL_ITEM_SLIDER_PRODUCTS ul li.active",
                {opacity:1},
                "<"
            );
        }
    }
    const handleClickIcon = (e) => {

        const start = $("#LIST_SLIDER_PRODUCTS ul li.active").index();
        const slideImage = $("#LIST_SLIDER_PRODUCTS ul li").eq($(e.currentTarget.parentElement).index());
        const slideIcon = $("#MENU_SLIDER_PRODUCTS ul li").eq($(e.currentTarget.parentElement).index());
        const slideNameItem = $("#ITEM_NAME_SLIDER_PRODUCTS ul li").eq($(e.currentTarget.parentElement).index());
        const slideDetailItem = $("#DETAIL_ITEM_SLIDER_PRODUCTS ul li").eq($(e.currentTarget.parentElement).index());
        runSlider(slideImage)
        runSlider(slideIcon)
        runSlider(slideNameItem)
        runSlider(slideDetailItem)
        const end = $("#LIST_SLIDER_PRODUCTS ul li.active").index();
        if (start > end) {
            gsapSlider(slideImage,"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "100%");
            
        }
        if (start < end) {
            gsapSlider(slideImage, "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", "-100%");
        }
    }
    const triggleTitle_PartAll = useRef(null)
    const triggleTitle_PartMain = useRef(null)
    const triggleTitle_PartGet = useRef(null)
    function enterTriggle() {
        gsap.set("html",{
            "--blackPercent_ofNavbar": "86%"
        })
    }
    function leaveTriggle() {
        gsap.set("html",{
            "--blackPercent_ofNavbar": "10%", /* defuat value */
        })
    }
    useEffect(() => {
            const heightTarget1 = triggleTitle_PartGet.current.offsetHeight 
      
            const heightTarget2 = triggleTitle_PartMain.current.offsetHeight 
            const alit_space_fix_triggleTitle_PartMain = heightTarget1 / 10
            console.log(heightTarget1,heightTarget2)
          let ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: triggleTitle_PartMain.current,
                  start: `top ${window.innerHeight*12/100}`,
                  end: `bottom ${heightTarget1 - heightTarget2  }px`,
                  pinSpacing: false,
                  //markers: true,
                  pin:true,
                },
                ease: "power2.out",
              })
              const timeline2 = gsap.timeline({
                scrollTrigger: {
                  trigger: triggleTitle_PartAll.current,
                  start: 'top top',
                  end: `bottom 10%`,
                 // markers: true,
                  onEnter: enterTriggle,
                  onEnterBack: enterTriggle,
                  onLeave: leaveTriggle,
                  onLeaveBack: leaveTriggle
                }
              })
            return () => ctx.revert();
          })
        
    }, [triggleTitle_PartMain,triggleTitle_PartGet,triggleTitle_PartAll]);
    
    return (
        <div className="list-products-section_3 dark-background" >

            <div className="grid12-container-row2" ref={triggleTitle_PartAll}>
                <div className="list-products-section_3_content row1" ref={triggleTitle_PartMain} style={{  background: "linear-gradient(180deg, rgba(37,35,36,1) 80%, rgba(255,252,245,0) 100%)"}}> {/*  that triggle will get height of ref={triggleTitle_PartGet}> */}
                    <div className="grid12-container">
                        <div className="tag">
                            <p>[ WINE AUSTRALIAN ]</p>
                        </div>
                        <div className="list-wine flex-col">
                            <h3>Wine brands from Australian</h3>

                        </div>
                        <div className="view-more">
                            <ButtonHoverUnderLine >View all</ButtonHoverUnderLine>
                        </div>
                    </div>
                </div>
                <div className="layout-list-wine row1"  >
                    <div className="grid-container-3row">
                        <div className="grid12-container row1" ref={triggleTitle_PartGet}>
                            <div className="detail-willhidden mutil-p">
                                <p>LBT Imports Pty Ltd is a Melbourne-based wine exporter, wholesaler, and agent.</p>

                                <p>Drawing on many years in fine wine business, founder Long Tran was convinced of the increasing popularity of Australian wines and established LBT Imports to focus on introducing quality Australian wines to Vietnam, which is a new and upcoming market with lots of potential.</p>
                            </div>

                        </div>
                        <div className="grid12-container  row2" ref={deomEffectGsap} >
                            <div className="image" id="LIST_SLIDER_PRODUCTS">
                                <ul>
                                    <li className="active"></li>
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
                                    <ul >
                                        <li className="active" >
                                            <span>→</span>
                                            <ButtonHoverUnderLine  eventPass={handleClickIcon}>Pettavel</ButtonHoverUnderLine>
                                        </li>
                                        <li>
                                            <span>→</span>
                                            <ButtonHoverUnderLine  eventPass={handleClickIcon}>Dominic</ButtonHoverUnderLine>
                                        </li>
                                        <li>
                                            <span>→</span>
                                            <ButtonHoverUnderLine  eventPass={handleClickIcon}>Paxton</ButtonHoverUnderLine>
                                        </li>
                                        <li>
                                            <span>→</span>
                                            <ButtonHoverUnderLine  eventPass={handleClickIcon}>Berton Vineyard</ButtonHoverUnderLine>
                                        </li>
                                        <li>
                                            <span>→</span>
                                            <ButtonHoverUnderLine  eventPass={handleClickIcon}>Organic Wine</ButtonHoverUnderLine>
                                        </li>
                                        <li>
                                            <span>→</span>
                                            <ButtonHoverUnderLine  eventPass={handleClickIcon}>Ulupna</ButtonHoverUnderLine>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bot" id="ITEM_NAME_SLIDER_PRODUCTS">
                                    <h3>DEMOOO</h3>
                                    <ul >
                                        <li  className="active"><div><h3>PETTAVEL</h3></div></li>
                                        <li><div><h3>DOMINIC</h3></div></li>
                                        <li><div><h3>PAXTON</h3></div></li>
                                        <li><div><h3>BERTON&nbsp;VINEYARD</h3></div></li>
                                        <li><div><h3>ORGANIC&nbsp;WINE</h3></div></li>
                                        <li><div><h3>ULUPNA</h3></div></li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="grid12-container  row3" >
                            <div className="note">
                                <div className='flex-row flex-center'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="currentColor"></circle></svg>
                                    <p>Organic and Biodynamic</p>
                                </div>
                                <ButtonHoverUnderLine >Explore more...</ButtonHoverUnderLine>
                            </div>
                            <div className="detail" id="DETAIL_ITEM_SLIDER_PRODUCTS">
                                <ul>
                                    <li className='active'>
                                        <p>Pettavel boasts historic roots dating back to 1842 when David Pettavel, the fourth generation of Swiss, pioneered professional viticulture in Victoria, Australia. Now with three vineyards under the brand, Pettavel has become a well-known brand as one of Australia's leading national banquet wine suppliers.</p>
                                        
                                    </li>
                                    <li>
                                        <p>Dominic Wines products – drawing on fruit from the company’s Riverland vineyards and complemented by grapes from 42 dedicated growers across South Australia – can be found in the UK, across Europe and in Canada and China.</p>
                                       
                                    </li>
                                    <li>
                                        <p>Paxton are leaders in both organic and biodynamic viticulture and winemaking. Fruit for all wines are sourced solely from estate vineyards in McLaren Vale, South Australia.<br></br>The Paxton family have nurtured their own vineyards in McLaren Vale for three decades. Internationally recognised as one of Australia’s leading wine regions, McLaren Vale is renowned for the production of super premium quality wines – particularly red wines.</p>
                                     
                                    </li>
                                    <li>
                                        <p>Berton Vineyards was established in 1996 by Bob and Cherie Berton when they purchased a block of land in High Eden, a subregion of the Barossa Valley, South Australia. This idyllic property sits 450m above sea level on gently rolling hills - except for the Chardonnay block which is anything but gentle!!</p>
                                    
                                    </li>
                                    <li>
                                        <p>We are an online wine retailer specialising in the areas of organic wine, biodynamic wine, preservative free wine, no added preservative or low preservative wine, vegan suitable wine and natural wine.
                                        <br></br>What we are passionate about is quality, uniqueness, and authenticity. We believe that organic, biodynamic, and minimal interference practices, when employed competently, lead to a naturally superior wine. A wine that is full of flavour, vibrancy, and personality for us to savour, and one that does less harm to our bodies and the environment.</p>
                                        
                                    </li>
                                    <li>
                                        <p>The Name Ulupna locates the vineyard, winery and cellar door. The name identifies the local Aboriginal clan of the Yorta Yorta tribe, and was also, historically, the name of the wider region that is Ulupna. Possessing a number of meanings, Ulupna most commonly translates as ‘strong women’.</p>
                                    
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}