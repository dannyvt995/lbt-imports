'use client'
import FooterSection from "@/module/FooterSection";
import FormContactSection from "@/module/FormContactSection";
import NavbarSection from "@/module/NavbarSection";

export default function ContactUs() {
    return (
        <main>
            <NavbarSection navbarbg="black"/>
            <div style={{paddingTop:'12vh'}}>
            <FormContactSection/>
            </div>
            <FooterSection/>
        </main>
    )
}