import Image from 'next/image'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
import ButtonHoverIcon from '@/components/ButtonHoverIcon'
export default function HeroSection() {
    return (
        <div className="hero-section ">
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
                    <ButtonHoverSplit classAdd="width-fit" typeEffect='textEffect1'>View Wine Brands</ButtonHoverSplit>
                  </div>
                  <div className="detail-hero--group-button flex-between">
                    <ButtonHoverIcon iconDirection="iconDirection-left" />
                    <ButtonHoverIcon iconDirection="iconDirection-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
}