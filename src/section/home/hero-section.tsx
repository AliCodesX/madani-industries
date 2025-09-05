"use client";
import { ButtonAnimation } from "@/components/text-animation/button-animation";
import TextReveal from "@/components/text-animation/text-reveal";

const HeroSection = () => {
  return (
      <div className="relative w-full min-h-screen bg-[#0a0a0a]">
        {/* Hintergrundbild mit Opacity */}
        <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-fixed opacity-60"
            style={{ backgroundImage: "url('/hero-section/hero-image.jpg')" }}
        />

        {/* Inhalt */}
        <div className="relative flex flex-col justify-center items-center min-h-[90vh] px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-screen-xl mx-auto w-full">
            <div className="text-center space-y-20 font-sans">
              <TextReveal as="h1" variant="heroTitle">
                Madani - Industries ihr Partner für zuverlässige industrielle Dienstleistungen
              </TextReveal>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ButtonAnimation variant="heroSectionButton">Mehr erfahren</ButtonAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;