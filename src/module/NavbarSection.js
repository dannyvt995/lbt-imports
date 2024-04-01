
import Image from "next/image";
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
export default function NavbarSection() {
    return (
        <div className="navbar">
        <div className="navbar-bg-dark"></div>
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
            <ButtonHoverUnderLine>Products</ButtonHoverUnderLine>
            <ButtonHoverUnderLine>Brands</ButtonHoverUnderLine>
            <ButtonHoverUnderLine>About&nbsp;us</ButtonHoverUnderLine>
          </div>
          <div className="menuItem2">
            <ButtonHoverUnderLine>Contact&nbsp;us</ButtonHoverUnderLine>
          </div>
        </div>

      </div>
    )
}