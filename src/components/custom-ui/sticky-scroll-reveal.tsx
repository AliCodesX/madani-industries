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

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            if (isMobile) {
                mobileImageRefs.current.forEach((img, index) => {
                    gsap.set(img, { opacity: index === 0 ? 1 : 0, scale: index === 0 ? 1 : 0.95 });
                });

                contentRefs.current.forEach((content, index) => {
                    ScrollTrigger.create({
                        trigger: content,
                        start: "top bottom-=100px",
                        end: "bottom top+=100px",
                        onEnter: () => {
                            gsap.to(mobileImageRefs.current[index], {
                                opacity: 1,
                                scale: 1,
                                duration: 0.8,
                                ease: "power2.out"
                            });
                            mobileImageRefs.current.forEach((img, i) => {
                                if (i !== index) {
                                    gsap.to(img, {
                                        opacity: 0,
                                        scale: 0.95,
                                        duration: 0.6
                                    });
                                }
                            });
                        },
                        onEnterBack: () => {
                            gsap.to(mobileImageRefs.current[index], {
                                opacity: 1,
                                scale: 1,
                                duration: 0.8,
                                ease: "power2.out"
                            });
                            mobileImageRefs.current.forEach((img, i) => {
                                if (i !== index) {
                                    gsap.to(img, {
                                        opacity: 0,
                                        scale: 0.95,
                                        duration: 0.6
                                    });
                                }
                            });
                        }
                    });

                    // Text disappear Animation für Mobile
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
                                end: "top top-=50px",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });
            } else {
                imageRefs.current.forEach((img, index) => {
                    gsap.set(img, { opacity: index === 0 ? 1 : 0 });
                });

                contentRefs.current.forEach((content, index) => {
                    ScrollTrigger.create({
                        trigger: content,
                        start: "top bottom-=200px",
                        end: "bottom top+=200px",
                        onEnter: () => {
                            gsap.to(imageRefs.current[index], {
                                opacity: 1,
                                duration: 0.7,
                                ease: "power2.out"
                            });
                            imageRefs.current.forEach((img, i) => {
                                if (i !== index) {
                                    gsap.to(img, { opacity: 0, duration: 0.5 });
                                }
                            });
                        },
                        onEnterBack: () => {
                            gsap.to(imageRefs.current[index], {
                                opacity: 1,
                                duration: 0.7,
                                ease: "power2.out"
                            });
                            imageRefs.current.forEach((img, i) => {
                                if (i !== index) {
                                    gsap.to(img, { opacity: 0, duration: 0.5 });
                                }
                            });
                        }
                    });
                });

                contentRefs.current.forEach((content) => {
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
                                end: "top top+=50px",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });
            }
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, [items.length, isMobile]);

    // Mobile Darstellung
    if (isMobile) {
        return (
            <div ref={containerRef} className="bg-white">
                {/* Mobile Header - Sticky und näher am Container */}
                <div className="sticky top-0 z-50 bg-white pt-4 pb-2 px-6">
                    <p className="text-base sm:text-lg uppercase text-black font-bold font-sans text-center">
                        {headerTitle}
                    </p>
                </div>

                <div className="relative">
                    <div className="sticky top-16 z-20 px-6 py-2">
                        <div className="relative w-full max-w-xs mx-auto h-56">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        if (el) mobileImageRefs.current[index] = el;
                                    }}
                                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg bg-gray-50"
                                    style={{ transformOrigin: 'center center' }}
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
            {/* Desktop Header - Sticky und näher am Container */}
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
                        <div className="relative w-full max-w-lg h-96">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        if (el) imageRefs.current[index] = el;
                                    }}
                                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-xl bg-gray-50"
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