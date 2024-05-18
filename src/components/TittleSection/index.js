"use client"
import { usePathname } from "next/navigation";
import ButtonHoverSplit from "@/Interactive/ButtonHoverSplit";
import './style.css'
export default function TitleSection({ onEffect, titleColor, children }) {
    const pathName = usePathname()
    return (
        <section className={`tittle_section ${onEffect === true ? '' : 'effect_tittle_section'}`} >
            <div className="background"></div>
            <div className="content">
                <h1 style={titleColor ? { color: titleColor } : {}}>{children}</h1>
            </div>
            {onEffect && (
                <div className="content_more">
                    {pathName === '/natural-stone' ? (
                        <>
                            <div className="text">
                                <span><svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" ></circle></svg></span>
                                <p>Specializing in importing and exporting natural stones for construction</p>
                            </div>
                            <div className="btn">
                                <ButtonHoverSplit classAdd="width-fit" typeEffect='textEffect1'>Gallery</ButtonHoverSplit>
                            </div>
                        </>

                    ) : (
                        <>
                            <div className="text">
                                <span><svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" ></circle></svg></span>
                                <p>Below are some images from our projects using natural stone</p>
                            </div>
                            <div className="btn">
                                <ButtonHoverSplit classAdd="width-fit" typeEffect='textEffect1'>Natural Stone</ButtonHoverSplit>
                            </div>
                        </>

                    )}
                </div>
            )}

        </section>
    );
}
