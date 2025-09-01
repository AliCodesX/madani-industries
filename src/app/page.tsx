import ContactUs from "@/section/home/contact-us";
import HeroSection from "@/section/home/hero-section";
import OurClient from "@/section/home/our-client";
import WhoWeAre from "@/section/home/who-we-are";
import {Services} from "@/section/home/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre/>
        <Services />
      <OurClient/>
      <ContactUs />
    </>
  );
}
