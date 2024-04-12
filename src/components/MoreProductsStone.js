import CircleIcon from "./iconsvg/CircleIcon"
import Image from 'next/image'
import Link from 'next/link'
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
export default function MoreProductsStone() {
    return (
        <section id="more-product" className="light-background">
        <div className="grid12-container">
            <div className="tag">
                <CircleIcon />
                <p>Feel free to contact us to explore our extensive range of natural stone products and discuss how we can meet your specific requirements.</p>
            </div>
            <div className="item-product more1">
                <div className="img">
                    <Image
                        src="/stone/bazan/bazan.png"
                        alt="imgimg"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="info">
                    <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/natural-stone/basalt-stone">Bazan Stone</ButtonHoverUnderLine>
                </div>
            </div>
            <div className="item-product more2">
                <div className="img">
                    <Image
                        src="/stone/bluestone/bluestone1.png"
                        alt="imgimg"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="info">
                <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/natural-stone/blue-stone">Blue Stone</ButtonHoverUnderLine>
                </div>
            </div>
            <div className="item-product more3">
                <div className="img">
                    <Image
                        src="/stone/terrazzo/terrazzo1.png"
                        alt="imgimg"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="info">
                    <ButtonHoverUnderLine eventLink={'handleNavigation'} datalink="/natural-stone/terrazzo-stone">Terrazzo Stone</ButtonHoverUnderLine>
                </div>
            </div>
        </div>
    </section>
    )
}