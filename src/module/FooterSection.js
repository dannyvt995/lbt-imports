import Image from 'next/image'
import ButtonHoverUnderLine from '@/components/ButtonHoverUnderLine'
import ButtonHoverSplit from '@/components/ButtonHoverSplit'
export default function FooterSection() {
    return (
        <div className="footer dark-background">
        <div className="footer-content grid12-container grid12-container-row2 ">
          <div className="footer-content_1 grid12-container-nonmargin">
            <div className="logo">
            {/* <Image
             src="/logo.png"
             alt="Logo Lbt"
             width={500}
             height={500}
             
             priority
             /> */}
              <div className="list-icon-social"></div>
            </div>
            <div className="menu">
              <ButtonHoverUnderLine>Products</ButtonHoverUnderLine>
              <ButtonHoverUnderLine>Brands</ButtonHoverUnderLine>
              <ButtonHoverUnderLine>About us</ButtonHoverUnderLine>
              <ButtonHoverUnderLine>Contact</ButtonHoverUnderLine>
              <ButtonHoverUnderLine>Location</ButtonHoverUnderLine>
            </div>
            <div className="info">
              <div className="item-info">
                <p>Email</p>
                <ButtonHoverUnderLine color="#868686">contact@lbt-imports.au</ButtonHoverUnderLine>
              </div>
              <div className="item-info">
                <p>Phone</p>
                <ButtonHoverUnderLine color="#868686">(+12) 345.567.789</ButtonHoverUnderLine>
              </div>
              <div className="group-button">
                <ButtonHoverSplit classAdd="width-full flex-center" typeEffect='textEffect1'>Contact Us</ButtonHoverSplit>
            </div>
            </div>
          </div>
          <div className="footer-content_2">
            <p className="footer-author">© 2024 Copyright LBT imports of New Zealand</p>
            <p className="footer-design">Build by Weeb Flip</p>
          </div>
        </div>
      </div>
    )
}