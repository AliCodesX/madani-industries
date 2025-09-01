import {StickyScroll} from "@/components/custom-ui/sticky-scroll-reveal";
import React from "react";


export const Services = () => {
    const items = [
        {
            title: "Event Personal",
            description:
                "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
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
                "Work together seamlessly with your team. Our collaborative editing feature allows multiple users to work on the same project simultaneously without conflicts.",
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
                "Gain insights from your data with our advanced analytics tools. Understand user behavior, track performance metrics, and make data-driven decisions.",
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
                "Integrate with your favorite tools and services. Our platform supports a wide range of integrations to streamline your workflow.",
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
                "Secure your data with our robust security measures. We prioritize your privacy and ensure that your information is protected at all times.",
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
        <div className="bg-white">
            <div className="relative" style={{ marginTop: '-2rem' }}> {/* Negativer Margin für Überlappung */}
                <StickyScroll items={items} headerTitle="Unsere Dienstleistungen" />
            </div>
        </div>
    );
};

