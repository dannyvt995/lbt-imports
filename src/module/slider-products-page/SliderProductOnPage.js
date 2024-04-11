import Image from "next/image"
import ButtonHoverIcon from "@/components/ButtonHoverIcon";
export default function SliderProductOnPage() {
    function handleClickNext() {
        console.log("handleClickNext")
    }
    function handleClickPrev() {
        console.log("handleClickPrev")
    }
    return (
        <>
            <div className="img_large">
                <Image
                    src="/bg1.png"
                    alt="imgimg"
                    width={500}
                    height={500}
                />
                <div className="gr-icon">
                    <ButtonHoverIcon eventPass={handleClickPrev} iconDirection="iconDirection-left" />
                    <ButtonHoverIcon eventPass={handleClickNext} iconDirection="iconDirection-right" />
                </div>
            </div>
            <div className="img_small">
                <div className="absolute-content-slider">
                    <div>
                        <Image
                            src="/bg1.png"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div>
                        <Image
                            src="/bg1.png"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div>
                        <Image
                            src="/bg1.png"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div>
                        <Image
                            src="/bg1.png"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div>
                        <Image
                            src="/bg1.png"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div>
                        <Image
                            src="/bg1.png"
                            alt="imgimg"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>


            </div>
        </>
    )
}