'use client'
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ContentItem {
    title: string;
    description: string;
    content: React.ReactNode;
}

interface StickyScrollProps {
    items: ContentItem[];
    headerTitle?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
                                                              items,
                                                              headerTitle = "Unsere Dienstleistungen"
                                                          }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRefs = useRef<HTMLDivElement[]>([]);
    const imageRefs = useRef<HTMLDivElement[]>([]);
    const mobileImageRefs = useRef<HTMLDivElement[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const updateCardStack = (refs: HTMLDivElement[], currentIndex: number) => {
        refs.forEach((card, index) => {
            if (!card) return;

            if (index < currentIndex) {
                // Karten, die bereits vorbei sind - komplett verschwinden lassen
                gsap.to(card, {
                    y: isMobile ? -200 : -400,
                    rotation: -45,
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.6,
                    ease: "power2.out",
                    transformOrigin: "bottom left",
                    zIndex: 1
                });
            } else if (index === currentIndex) {
                // Aktuelle Karte - voll sichtbar
                gsap.to(card, {
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    transformOrigin: "center",
                    zIndex: 50
                });
            } else {
                // Karten, die noch kommen - im Stack, leicht versetzt
                gsap.to(card, {
                    y: 0,
                    rotation: 0,
                    opacity: index === currentIndex + 1 ? 0.5 : 0.1, // Nächste Karte etwas sichtbarer
                    scale: 1 - (index - currentIndex) * 0.05,
                    duration: 0.4,
                    ease: "power2.out",
                    transformOrigin: "center",
                    zIndex: items.length - index
                });
            }
        });
    };

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Initiale Stack-Setup - alle Karten übereinander
            if (isMobile) {
                mobileImageRefs.current.forEach((card, index) => {
                    gsap.set(card, {
                        opacity: index === 0 ? 1 : index === 1 ? 0.5 : 0.1,
                        y: 0,
                        rotation: 0,
                        scale: 1 - index * 0.05,
                        zIndex: items.length - index
                    });
                });
            } else {
                imageRefs.current.forEach((card, index) => {
                    gsap.set(card, {
                        opacity: index === 0 ? 1 : index === 1 ? 0.5 : 0.1,
                        y: 0,
                        rotation: 0,
                        scale: 1 - index * 0.05,
                        zIndex: items.length - index
                    });
                });
            }

            contentRefs.current.forEach((content, index) => {
                ScrollTrigger.create({
                    trigger: content,
                    start: isMobile ? "top center" : "top center",
                    end: isMobile ? "bottom center" : "bottom center",
                    onEnter: () => {
                        setActiveIndex(index);
                        if (isMobile) {
                            updateCardStack(mobileImageRefs.current, index);
                        } else {
                            updateCardStack(imageRefs.current, index);
                        }
                    },
                    onEnterBack: () => {
                        setActiveIndex(index);
                        if (isMobile) {
                            updateCardStack(mobileImageRefs.current, index);
                        } else {
                            updateCardStack(imageRefs.current, index);
                        }
                    }
                });

                // Text Animation
                gsap.fromTo(content,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: content,
                            start: "top bottom-=50px",
                            end: isMobile ? "top top-=50px" : "top top+=50px",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, [items.length, isMobile]);

    // Mobile Darstellung
    if (isMobile) {
        return (
            <div ref={containerRef} className="bg-white">
                {/* Mobile Header */}
                <div className="sticky top-0 z-50 bg-white pt-4 pb-2 px-6">
                    <p className="text-base sm:text-lg uppercase text-black font-bold font-sans text-center">
                        {headerTitle}
                    </p>
                </div>

                <div className="relative">
                    {/* Mobile Sticky Stack Container */}
                    <div className="sticky top-16 z-20 px-6 py-2">
                        <div className="relative w-full max-w-xs mx-auto h-64 flex items-center justify-center">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        if (el) mobileImageRefs.current[index] = el;
                                    }}
                                    className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg"
                                    style={{
                                        transformOrigin: 'center center',
                                        willChange: 'transform, opacity'
                                    }}
                                >
                                    {item.content}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="px-6">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) contentRefs.current[index] = el;
                                }}
                                className="min-h-[90vh] flex items-center justify-center py-8"
                            >
                                <div className="max-w-sm text-center relative z-10">
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
                                        {item.title}
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="h-32"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Desktop Darstellung
    return (
        <div ref={containerRef} className="bg-white">
            {/* Desktop Header */}
            <div className="sticky top-0 z-50 bg-white pt-6 pb-4">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-base sm:text-lg uppercase text-black font-bold font-sans text-center">
                        {headerTitle}
                    </p>
                </div>
            </div>

            <div className="flex flex-row max-w-7xl mx-auto bg-transparent">
                <div className="w-1/2">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) contentRefs.current[index] = el;
                            }}
                            className="min-h-screen flex items-center justify-center p-12"
                        >
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-bold mb-6 text-black">
                                    {item.title}
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-1/2">
                    <div className="sticky top-16 h-screen flex items-center justify-center p-8">
                        {/* Desktop Stack Container */}
                        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        if (el) imageRefs.current[index] = el;
                                    }}
                                    className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl"
                                    style={{
                                        willChange: 'transform, opacity'
                                    }}
                                >
                                    {item.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};