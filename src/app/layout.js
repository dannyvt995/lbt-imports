
import "@/styles/config.css";
import "@/styles/main.css";
import "@/styles/home.css";
import "@/styles/grid.css";
import "@/styles/lenis.css";
import "@/styles/footer.css";
import "@/styles/navbar.css";
import "@/styles/reponsive.css";
import "@/styles/gallery-section.css";
import "@/styles/form-contact-section.css";
import "@/styles/list-product-stone.css";
import "@/styles/list-product-wine.css";
import LenisScrolling from "@/components/LenisScrolling";
import Loading from "./loading";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loading/>
        <LenisScrolling>
          {children}
        </LenisScrolling>
      </body>
    </html>
  );
}
