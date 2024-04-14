
import "@/styles/config.css";
import "@/styles/main.css";
import "@/styles/home.css";
import "@/styles/grid.css";
import "@/styles/lenis.css";
import "@/styles/footer.css";
import "@/styles/navbar.css";
import "@/styles/reponsive.css";
import "@/styles/layout_page/stone.css"
import "@/styles/gallery-section.css";
import "@/styles/component/background_fixed.css";

import "@/styles/form-contact-section.css";
import "@/styles/list-product-stone.css";
import "@/styles/list-product-wine.css";
import LenisScrolling from "@/components/LenisScrolling";


export const metadata = {
  title: "LBT Imports Pty Ltd",
  description: "Hello from LBT Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/lbt_company.ico" />
      </head>
      <body>
        <LenisScrolling>
          {children}
        </LenisScrolling>
      </body>
    </html>
  );
}
