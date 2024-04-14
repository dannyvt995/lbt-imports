import CircleIcon from "./iconsvg/CircleIcon"
import Image from 'next/image'
import Link from 'next/link'
import ButtonHoverUnderLine from "@/components/ButtonHoverUnderLine";
export default function MoreProductsStone({more_production}) {
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
                        src="/stone/basalt/IMG_6237.jpg"
                        alt="imgimg"
                    
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{height:"100%",width:"auto"}}
                        priority={false}
                    />
                </div>
                <div className="info">
                    <ButtonHoverUnderLine color={'black'} eventLink={'handleNavigation'} datalink="/natural-stone/basalt-stone">Basalt Stone</ButtonHoverUnderLine>
                </div>
            </div>
            <div className="item-product more2">
                <div className="img">
                    <Image
                        src="/stone/bluestone/2.jpg"
                        alt="imgimg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{height:"auto",width:"100%"}}
                        priority={false}
                    />
                </div>
                <div className="info">
                <ButtonHoverUnderLine color={'black'} eventLink={'handleNavigation'} datalink="/natural-stone/blue-stone">Blue Stone</ButtonHoverUnderLine>
                </div>
            </div>
            <div className="item-product more3">
                <div className="img">
                    <Image
                        src="/stone/granite/4.jpg"
                        alt="imgimg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{height:"100%",width:"auto"}}
                        priority={false}
                    />
                </div>
                <div className="info">
                    <ButtonHoverUnderLine color={'black'} eventLink={'handleNavigation'} datalink="/natural-stone/granite-stone">Granite Stone</ButtonHoverUnderLine>
                </div>
            </div>
        </div>
    </section>
    )
}