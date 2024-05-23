import Image from 'next/image'
import ButtonHoverUnderLine from '@/Interactive/ButtonHoverUnderLine'
import './style.css'
export default function FooterSection() {
    return (
        <div className="footer light-background">
        <div className="footer-content grid12-container grid12-container-row2 ">
          <div className="footer-content_1 grid12-container-nonmargin">
            <div className="logo">
              <Image
              src="/logo_black.png"
              alt="Logo Lbt"
              width={500}
              height={500}
              
              priority
              />
              <div className='info-company'>
                <br></br>
                <p>LBT Distributor of Australian & International Wine</p>
              
                <p>ACN 635 911 983</p>
                <p>ABN 43 635 911 983</p>
                <p>58 Auburn Avenue, Sunshine North, VIC 3020, Australia</p>
              </div>
              <div className="list-icon-social"></div>
            </div>
            <div className="menu">
            <ButtonHoverUnderLine color="#252324" eventLink={'handleNavigation'} datalink="/construction-gallery">Construction</ButtonHoverUnderLine>
              <ButtonHoverUnderLine color="#252324" eventLink={'handleNavigation'} datalink="/wine-autralia">Wine Australia</ButtonHoverUnderLine>
              <ButtonHoverUnderLine color="#252324"eventLink={'handleNavigation'} datalink="/natural-stone">Natural Stone</ButtonHoverUnderLine>
              <ButtonHoverUnderLine color="#252324"eventLink={'handleNavigation'} datalink="/">About us</ButtonHoverUnderLine>
              <ButtonHoverUnderLine color="#252324"eventLink={'handleNavigation'} datalink="/contact-us">Contact us</ButtonHoverUnderLine>
            </div>
            <div className="info">
              <div className="item-info">
                <p>Email</p>
                <ButtonHoverUnderLine color="#868686">lbtimportservices@gmail.com</ButtonHoverUnderLine>
              </div>
              <div className="item-info">
                <p>Telephone/Fax</p>
                <ButtonHoverUnderLine color="#868686">+61 400 526 898</ButtonHoverUnderLine>
              </div>
              <div className="item-info">
                <p>Location</p>
                <p style={{color:'#868686'}}>58 Auburn Avenue, Sunshine North, VIC 3020, Australia</p>
                <div className='map'>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.6016170542666!2d144.83834257569168!3d-37.75248937199099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65e580893cb3f%3A0x6cc2b558c1c2d51f!2s58%20Auburn%20Ave%2C%20Sunshine%20North%20VIC%203020%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1712300009984!5m2!1svi!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
              </div>
           {/*    <div className="group-button">
                <ButtonHoverSplit classAdd="width-full flex-center" typeEffect='textEffect1' this_call={true}>Contact Us</ButtonHoverSplit>
            </div> */}
            </div>
          </div>
          <div className="footer-content_2">
            <p className="footer-author">© 2024 Copyright LBT Imports</p>
        
           {/*  <p className="footer-design">Build by Weeb Flip</p> */}
          </div>
        </div>
      </div>
    )
}