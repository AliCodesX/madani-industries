import { ButtonAnimation } from "@/components/text-animation/button-animation";
import { TextPopUpOrDown } from "@/components/text-animation/text-popup-or-popdown";
import Link from "next/link";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaXing } from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="bg-black py-16 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo div */}
          <div className="space-y-4 md:space-y-6 font-sans">
            <div className="flex items-center space-x-2">
              <TextPopUpOrDown
                  as="h2"
                  className="text-2xl font-medium"
              >
                Logo
              </TextPopUpOrDown>
            </div>
            <TextPopUpOrDown as="p">
              Madani-Industries
              <br />
                Ihr Partner für Industrielle Dienstleistungen
            </TextPopUpOrDown>
          </div>

          {/* Services div */}
          <div className="font-sans">
            <TextPopUpOrDown
                as="h2"
                className="text-2xl font-medium mb-8"
            >
              Dienstleistungen
            </TextPopUpOrDown>
            <ul className="space-y-2 md:space-y-5">
              {[
                "Event Personal",
                "Fördertechnik",
                "Montage",
                "Facility Management",
                "Lagerlogistik",
              ].map((item) => (
                  <li key={item}>
                    <Link
                        href="#"
                        className="text-white hover:text-white transition-colors"
                    >
                      <TextPopUpOrDown>{item}</TextPopUpOrDown>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Resources div */}
          <div className="font-sans">
            <TextPopUpOrDown
                as="h2"
                className="text-2xl font-medium mb-8"
            >
              Rechtliches
            </TextPopUpOrDown>
            <ul className="space-y-2 md:space-y-5">
              {["Über uns", "Kontakt", "Impressum", "Datenschutz", "AGB"].map((item) => (
                  <li key={item}>
                    <Link
                        href="#"
                        className="text-white hover:text-white transition-colors"
                    >
                      <TextPopUpOrDown>{item}</TextPopUpOrDown>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Contact div */}
          <div className="font-sans">
            <TextPopUpOrDown
                as="h2"
                className="text-2xl font-medium mb-8"
            >
              Kontakt
            </TextPopUpOrDown>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MdLocationOn className="text-white w-5 h-5 mt-1 flex-shrink-0" />
                <TextPopUpOrDown as="p" className="text-white text-sm">
                  Parkallee 117<br />
                  28209 Bremen
                </TextPopUpOrDown>
              </div>

              <div className="flex items-center space-x-3">
                <MdPhone className="text-white w-5 h-5 flex-shrink-0" />
                <Link
                    href="tel:04234756270"
                    className="text-white hover:text-white transition-colors text-sm"
                >
                  <TextPopUpOrDown>04234 756270</TextPopUpOrDown>
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <MdMail className="text-white w-5 h-5 flex-shrink-0" />
                <Link
                    href="mailto:info@example.de"
                    className="text-white hover:text-white transition-colors text-sm"
                >
                  <TextPopUpOrDown>info@example.de</TextPopUpOrDown>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Social Media Icons - Centered */}
        <div className="max-w-7xl mx-auto mt-12 pt-8">
          <div className="flex justify-center space-x-6">
            <Link
                href="#"
                className="text-white hover:text-white transition-colors"
                aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6 text-white" />
            </Link>
            <Link
                href="#"
                className="text-white hover:text-white transition-colors"
                aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </Link>
            <Link
                href="#"
                className="text-white hover:text-white transition-colors"
                aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6 text-white" />
            </Link>
            <Link
                href="#"
                className="text-white hover:text-white transition-colors"
                aria-label="Xing"
            >
              <FaXing className="w-6 h-6 text-white" />
            </Link>
            <Link
                href="#"
                className="text-white hover:text-white transition-colors"
                aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <TextPopUpOrDown as="p" className="text-white text-sm">
              Copyright 2025 © Ihr Unternehmen. Alle Rechte vorbehalten.
            </TextPopUpOrDown>
            <div className="flex space-x-6">
              <Link
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
              >
                <TextPopUpOrDown>Impressum</TextPopUpOrDown>
              </Link>
              <Link
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
              >
                <TextPopUpOrDown>Datenschutz</TextPopUpOrDown>
              </Link>
              <Link
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
              >
                <TextPopUpOrDown>AGB</TextPopUpOrDown>
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
