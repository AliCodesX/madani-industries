import Image from "next/image";

const logos = [
  { src: "/logo-list/lv.png", alt: "lv", width: 388, height: 130 },
  { src: "/logo-list/zara.png", alt: "zara", width: 225, height: 225 },
  { src: "/logo-list/patagonia.png", alt: "patagonia", width: 256, height: 256 },
  { src: "/logo-list/ted.png", alt: "ted", width: 153, height: 73 },
  { src: "/logo-list/oracle.png", alt: "oracle", width: 641, height: 557 },
  { src: "/logo-list/zoom.png", alt: "zoom", width: 641, height: 557 },
  { src: "/logo-list/google.png", alt: "google", width: 200, height: 200 },
  { src: "/logo-list/cnn.png", alt: "cnn", width: 200, height: 200 },
  { src: "/logo-list/sky.png", alt: "sky", width: 200, height: 200 },
  { src: "/logo-list/thp.png", alt: "thp", width: 200, height: 200 },
];

const InfiniteScroll = () => {
  return (
    <div className="overflow-hidden w-full mb-10 ">
      <ul className="flex whitespace-nowrap animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none">
        {/* Logos einmal */}
        {logos.map((logo, i) => (
          <li key={logo.alt + i}>
            <Image
              className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
              height={logo.height}
              width={logo.width}
              src={logo.src}
              alt={logo.alt}
            />
          </li>
        ))}
        {/* Logos nochmal für nahtlosen Loop */}
        {logos.map((logo, i) => (
          <li key={logo.alt + '-copy-' + i}>
            <Image
              className="w-auto h-[25px] md:h-[45px] 2xl:h-[55px] max-w-100%"
              height={logo.height}
              width={logo.width}
              src={logo.src}
              alt={logo.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InfiniteScroll;
