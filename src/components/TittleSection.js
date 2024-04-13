"use client"
import { useEffect } from "react";
export default function TitleSection({ onEffect,titleColor,children}) {
    useEffect(() => {
        // Code to run when dependencies change
    }, [onEffect, titleColor, children]); // Add all relevant dependencies here

    return (
        <section className={`tittle_section ${onEffect === true ? '' : 'effect_tittle_section'}`} >
            <div className="background"></div>
            <div className="content">
                <h1 style={titleColor ? { color: titleColor } : {}}>{children}</h1>
            </div>
        </section>
    );
}
