import {StickyScroll} from "@/components/custom-ui/sticky-scroll-reveal";
import React from "react";


export const Services = () => {
    const items = [
        {
            title: "Event Personal",
            description:
                "Wir bieten erstklassiges Event-Personal für Ihre Veranstaltungen. Unser erfahrenes Team sorgt für einen reibungslosen Ablauf und unvergessliche Erlebnisse.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white">
                    <img
                        src="/event.jpg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Fördertechnik",
            description:
                "Unsere Fördertechnik-Lösungen sind maßgeschneidert, um Ihre Logistikprozesse zu optimieren. Von der Planung bis zur Installation bieten wir umfassenden Service.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white">
                    <img
                        src="/fordertechnik.jpg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="collaborative editing"
                    />
                </div>
            ),
        },
        {
            title: "Montage",
            description:
                "Unser Montageteam besteht aus qualifizierten Fachkräften, die präzise und effizient arbeiten. Wir garantieren höchste Qualität bei der Montage Ihrer Anlagen.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white">
                    <img
                        src="/montage.jpg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="analytics dashboard"
                    />
                </div>
            ),
        },
        {
            title: "Facility Management",
            description:
                "Wir bieten umfassendes Facility Management, um Ihre Gebäude und Anlagen optimal zu betreiben. Unser Service umfasst Wartung, Reinigung und Sicherheitsmanagement.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white">
                    <img
                        src="/facility.jpg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="integrations"
                    />
                </div>
            ),
        },
        {
            title: "Lagerlogistik",
            description:
                "Unsere Lagerlogistik-Lösungen sind darauf ausgelegt, Ihre Lagerprozesse zu optimieren. Wir bieten effiziente Lagerverwaltung und schnelle Distribution.",
            content: (
                <div className="flex h-full w-full items-center justify-center text-white">
                    <img
                        src="/logistik.jpg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="security features"
                    />
                </div>
            ),
        },
    ];

    return (
        <div  id="services" className="bg-white">
            <div className="relative" style={{ marginTop: '-2rem' }}> {/* Negativer Margin für Überlappung */}
                <StickyScroll items={items} headerTitle="Unsere Dienstleistungen" />
            </div>
        </div>
    );
};

