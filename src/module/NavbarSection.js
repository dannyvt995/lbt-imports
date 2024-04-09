
import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";

const NavbarSection = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="navbar-bg-dark" id="Navbar_Background_Dark"></div>
      <div className="navbar-list-item grid12-container">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Logo Lbt"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="menuItem1">
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/">About&nbsp;us</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/wineautralian">Wine&nbsp;Australian</ButtonHoverUnderLine>
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/constructionstone">Construction&nbsp;Stone</ButtonHoverUnderLine>
        </div>
        <div className="menuItem2">
          <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/contactus">Contact&nbsp;us</ButtonHoverUnderLine>
        </div>
      </div>

    </div>
  )
}
export default NavbarSection