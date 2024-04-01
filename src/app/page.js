"use client"

import HeroSection from "@/module/HeroSection";
import GridView from "@/module/GridView";
import NavbarSection from "@/module/NavbarSection";
import WelcomeSection from "@/module/WelcomeSection";
import ListWineSection from "@/module/ListWineSection";
import FooterSection from "@/module/FooterSection";
import ListStoneSection from "@/module/ListStoneSection";


export default function Home() {


  return (
    <main>
      <div className="wrapper-content">
        <GridView />
        <NavbarSection />
      </div>
      <div className="wrapper-content">
        <HeroSection />
      </div>
      <WelcomeSection />
      <ListWineSection />
      <ListStoneSection />
      <FooterSection />
    </main>
  );
}
