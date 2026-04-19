import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
    "/images/8.webp",
    "/images/9.webp",
    "/images/10.webp",
    "/images/11.webp",
    "/images/12.webp",
    "/images/13.webp",
    ,
  ];

  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24">
      <h1 className="font-archivo text-[12vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-[#758BFD] text-center">
        GALLERY
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-square bg-brand-black border-2 border-brand-black flex items-center justify-center transition-all hover:scale-[1.02] duration-300 overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
