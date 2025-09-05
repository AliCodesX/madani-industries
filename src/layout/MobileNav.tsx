"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuToggleText from "@/components/custom-ui/MenuToggleText";



export const footernavbarItems = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "Services",
        href: "/services",
    },
    {
        id: 3,
        title: "Über uns",
        href: "/ueber-uns",
    },
    {
        id: 4,
        title: "Kontakt",
        href: "/kontakt",
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
                    textColor="text-black"
                />
            </div>
            <AnimatePresence mode="wait">
                {toggle && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 1, ease: [0.3, 0.86, 0.36, 0.95] }}
                        className="fixed top-0 bottom-0 right-0 z-50 w-full min-h-screen flex justify-end items-end flex-col bg-black backdrop-blur-md">
                        <div className="w-full flex justify-between items-center h-[8vh]  padding-x">
                           <h1>
                               Madani
                           </h1>
                            <MenuToggleText 
                                isOpen={toggle}
                                onClick={() => setToggle(false)}
                                textColor="text-white"
                            />
                        </div>
                        <ul className="h-full w-full flex justify-center text-left flex-col gap-[10px] padding-x">
                            {footernavbarItems.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.id}
                                    onClick={() => setToggle(false)}
                                    className="text-[40px] md:text-[60px] lg:text-[80px] leading-[1.2] font-bold uppercase tracking-tight text-white hover:text-gray-300 transition-colors">
                                    {item.title}
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}