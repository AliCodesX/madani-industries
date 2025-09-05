'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import  TextHover  from "@/components/custom-ui/TextHover";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export const navbarItems = [
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
        id: 3,
        title: "Kontakt",
        href: "/",
    },

];


export const navVariants = {
    hidden: { y: "-100%" },
    vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 }, }
};

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={navVariants}
                className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between lg:flex hidden"
                animate={hidden ? "hidden" : "vissible"}>
                <div className="w-[50%]">
               <p className="font-bold">Madani Industries</p>
                </div>
                <div className="flex gap-x-[20px] w-[50%] justify-end">
                    {navbarItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}>
                            <TextHover
                                title1={item.title}
                                title2={item.title}
                            />
                        </Link>
                    ))}
                </div>
            </motion.nav>
            <MobileNav />
        </>
    );
}
