'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import {
    FiSettings,
    FiTool,
    FiShield,
    FiTruck,
    FiZap,
    FiCpu
} from "react-icons/fi";

interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
}

interface ServiceItem {
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#contact" },
];

const SERVICE_ITEMS: ServiceItem[] = [
    {
        title: "Maschinenwartung",
        description: "Professionelle Wartung und Instandhaltung Ihrer Industriemaschinen",
        href: "#maschinenwartung",
        icon: <FiSettings className="w-6 h-6" />
    },
    {
        title: "Reparaturservice",
        description: "Schnelle und zuverlässige Reparaturen für alle Industrieanlagen",
        href: "#reparatur",
        icon: <FiTool className="w-6 h-6" />
    },
    {
        title: "Sicherheitsprüfungen",
        description: "Umfassende Sicherheitskontrollen nach aktuellen Standards",
        href: "#sicherheit",
        icon: <FiShield className="w-6 h-6" />
    },
    {
        title: "Logistik & Transport",
        description: "Sichere Transportlösungen für Ihre Industriegüter",
        href: "#logistik",
        icon: <FiTruck className="w-6 h-6" />
    },
    {
        title: "Elektrotechnik",
        description: "Elektrische Installationen und Wartungen",
        href: "#elektro",
        icon: <FiZap className="w-6 h-6" />
    },
    {
        title: "Automatisierung",
        description: "Moderne Automatisierungslösungen für Ihre Prozesse",
        href: "#automatisierung",
        icon: <FiCpu className="w-6 h-6" />
    }
];

export default function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showServices, setShowServices] = useState<boolean>(false);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setShowServices(false); // Schließe Services Menu beim Scrollen
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    const handleServiceClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowServices(!showServices);
    };

    const handleServiceHover = () => {
        setShowServices(true);
    };

    const handleServiceLeave = () => {
        // Verzögerung bevor das Menu schließt
        setTimeout(() => {
            setShowServices(false);
        }, 150);
    };

    return (
        <>
            <motion.header
                className="fixed top-0 z-50 w-full"
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                {/* Desktop floating navbar */}
                <div className="hidden md:flex justify-center pt-4 px-4">
                    <motion.div
                        className="bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-gray-200/50 px-6 py-3"
                        initial={{ scale: 1 }}
                        animate={{ scale: isVisible ? 1 : 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center gap-8">
                            {/* Brand */}
                            <div className="flex font-semibold">
                                <span className="text-lg tracking-tight text-black">Madani</span>
                            </div>

                            {/* Navigation */}
                            <nav className="flex items-center gap-1 text-black">
                                {NAV_ITEMS.map((item) => (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => {
                                            setHovered(item.label);
                                            if (item.hasDropdown) handleServiceHover();
                                        }}
                                        onMouseLeave={() => {
                                            setHovered(null);
                                        }}
                                    >
                                        <a
                                            href={item.href}
                                            className="relative px-4 py-2 text-sm font-medium hover:text-gray-700 transition-colors flex items-center gap-1"
                                            onClick={item.hasDropdown ? handleServiceClick : undefined}
                                        >
                                            <motion.span
                                                initial={false}
                                                animate={{ y: hovered === item.label ? -1 : 0 }}
                                                transition={{ type: "spring", stiffness: 600, damping: 30 }}
                                            >
                                                {item.label}
                                            </motion.span>
                                            {item.hasDropdown && (
                                                <motion.div
                                                    animate={{ rotate: showServices ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <FiChevronDown className="w-4 h-4" />
                                                </motion.div>
                                            )}
                                            <div className="pointer-events-none absolute inset-x-0 bottom-1 h-2">
                                                <AnimatePresence initial={false}>
                                                    {hovered === item.label && (
                                                        <motion.span
                                                            key="underline"
                                                            className="absolute left-1 right-1 bottom-0 h-0.5 origin-left rounded-full bg-black"
                                                            initial={{ scaleX: 0 }}
                                                            animate={{ scaleX: 1 }}
                                                            exit={{ scaleX: 0 }}
                                                            transition={{ type: "spring", stiffness: 700, damping: 40 }}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile navbar */}
                <div className="md:hidden bg-white/90 backdrop-blur-lg border-b border-gray-200/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between w-full">
                            <div className="flex font-semibold">
                                <span className="text-lg tracking-tight text-black">Madani</span>
                            </div>

                            <button
                                className="inline-flex items-center justify-center rounded-xl border border-gray-300 p-2 transition hover:bg-gray-100 active:scale-95 text-black"
                                aria-label={open ? "Close menu" : "Open menu"}
                                onClick={() => setOpen((v) => !v)}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {open ? (
                                        <motion.span
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            className="text-2xl"
                                        >
                                            <FiX />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            className="text-2xl"
                                        >
                                            <FiMenu />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Popover */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            key="mobile-popover"
                            initial={{ opacity: 0, scale: 0.9, x: 12, y: -8 }}
                            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: 12, y: -8 }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            className="absolute right-4 top-16 z-40 md:hidden"
                            style={{ transformOrigin: "top right" }}
                        >
                            <div className="w-72 max-w-[85vw] rounded-2xl border border-gray-300 bg-white/95 shadow-lg backdrop-blur">
                                <ul className="flex flex-col py-2 text-right text-black">
                                    {NAV_ITEMS.map((item) => (
                                        <li key={item.label}>
                                            <a
                                                href={item.href}
                                                className="block px-5 py-3 hover:text-gray-700"
                                                onClick={() => setOpen(false)}
                                                onMouseEnter={() => setHovered(item.label)}
                                                onMouseLeave={() => setHovered(null)}
                                            >
                                                <span className="relative inline-block">
                                                    {item.label}
                                                    <div className="absolute inset-x-0 -bottom-0.5 h-2">
                                                        <AnimatePresence initial={false}>
                                                            {hovered === item.label && (
                                                                <motion.span
                                                                    key="underline-mobile"
                                                                    className="absolute left-0 bottom-0 h-0.5 w-full origin-left rounded-full bg-black"
                                                                    initial={{ scaleX: 0 }}
                                                                    animate={{ scaleX: 1 }}
                                                                    exit={{ scaleX: 0 }}
                                                                />
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-end gap-3 px-5 pb-4 text-xl text-gray-600">
                                    <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-black">
                                        <FaTiktok />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-black">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Services Mega Menu */}
            <AnimatePresence>
                {showServices && (
                    <motion.div
                        key="services-megamenu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-20 left-0 right-0 z-40 hidden md:block"
                        onMouseEnter={() => setShowServices(true)}
                        onMouseLeave={() => setShowServices(false)}
                    >
                        <div className="mx-auto max-w-7xl px-4">
                            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {SERVICE_ITEMS.map((service, index) => (
                                        <motion.a
                                            key={service.title}
                                            href={service.href}
                                            className="group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                            onClick={() => setShowServices(false)}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                                                    {service.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Call to Action */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600 mb-4">
                                            Brauchen Sie eine individuelle Lösung?
                                        </p>
                                        <motion.a
                                            href="#contact"
                                            className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setShowServices(false)}
                                        >
                                            Jetzt beraten lassen
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}