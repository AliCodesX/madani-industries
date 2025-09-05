"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuToggleText from "@/components/custom-ui/MenuToggleText";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";



export const mobileNavbarItems = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "Services",
        href: "/",
    },
    {
        id: 3,
        title: "Über uns",
        href: "/",
    },
    {
        id: 4,
        title: "Kontakt",
        href: "/",
    },
];

export default function MobileNav() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="w-full flex justify-between items-center h-[8vh] padding-x lg:hidden md:flex sm:flex fixed top-0 left-0 z-50 backdrop-blur-[7px]">

                <h1 className="font-bold">Madani</h1>
                <MenuToggleText 
                    isOpen={toggle}
                    onClick={() => setToggle(!toggle)}
                    textColor="text-white !important "
                />
            </div>
            <AnimatePresence mode="wait">
                {toggle && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100vh" }}
                        exit={{ height: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            ease: [0.4, 0, 0.2, 1],
                        }}
                        className="fixed top-0 left-0 z-40 w-full overflow-hidden bg-black backdrop-blur-md"
                        style={{ originY: 0 }}
                    >
                        <motion.div 
                            className="w-full h-full flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <motion.div 
                                className="w-full flex justify-between items-center h-[8vh] padding-x"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                            >
                               <h1 className="text-white font-bold">
                                   Madani
                               </h1>
                                <MenuToggleText 
                                    isOpen={toggle}
                                    onClick={() => setToggle(false)}
                                    textColor="text-white"
                                />
                            </motion.div>
                            <ul className="h-full w-full flex justify-center text-left flex-col gap-[10px] padding-x">
                                {mobileNavbarItems.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 50, opacity: 0 }}
                                        transition={{ 
                                            delay: 0.5 + (index * 0.1), 
                                            duration: 0.6,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                        className="relative group"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setToggle(false)}
                                            className="block text-[40px] md:text-[60px] lg:text-[80px] leading-[1.2] font-bold uppercase tracking-tight text-white hover:text-gray-300 transition-all duration-500 ease-out hover:translate-y-[-8px] transform relative inline-block"
                                        >
                                            <span className="relative">
                                                {item.title}
                                                <span className="absolute bottom-0 left-0 w-0 h-[2px] md:h-[3px] lg:h-[4px] bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
                                            </span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            
                            {/* Social Media Icons */}
                            <motion.div 
                                className="w-full padding-x pb-8 pt-4"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ 
                                    delay: 0.5 + (mobileNavbarItems.length * 0.1) + 0.2, 
                                    duration: 0.6,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <div className="border-t border-gray-700 pt-6 mb-4">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Folgen Sie uns</p>
                                    <div className="flex gap-6">
                                        <motion.a
                                            href="https://facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-500 transition-all duration-300 hover:scale-110 transform"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaFacebookF className="w-6 h-6" />
                                        </motion.a>
                                        
                                        <motion.a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-pink-500 transition-all duration-300 hover:scale-110 transform"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaInstagram className="w-6 h-6" />
                                        </motion.a>
                                        
                                        <motion.a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaLinkedinIn className="w-6 h-6" />
                                        </motion.a>
                                        
                                        <motion.a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-sky-400 transition-all duration-300 hover:scale-110 transform"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaTwitter className="w-6 h-6" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}