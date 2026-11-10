"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function ProductCarousel({
  images,
  title,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: {
  images: string[];
  title: string;
  sizes?: string;
}) {
  const [active, setActive] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const photos = images.length ? images : ["/images/refregerator.jpg"];
  const current = active % photos.length;
  const goTo = (index: number) => {
    const container = viewport.current;
    if (!container) return;
    const next = (index + photos.length) % photos.length;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({ left: next * container.clientWidth, behavior: reducedMotion ? "auto" : "smooth" });
  };
  const move = (step: number) => goTo(current + step);

  return (
    <div
      className="relative h-full w-full"
      role="region"
      aria-roledescription="карусель"
      aria-label={`Фотографии ${title}`}
      tabIndex={photos.length > 1 ? 0 : undefined}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div
        ref={viewport}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(event) => {
          const container = event.currentTarget;
          if (container.clientWidth) setActive(Math.round(container.scrollLeft / container.clientWidth));
        }}
      >
        {photos.map((photo, index) => (
          <div key={`${photo}-${index}`} className="relative h-full w-full shrink-0 snap-center snap-always">
            <Image
              fill
              src={photo}
              alt={`${title} — фото ${index + 1}`}
              className="select-none object-contain"
              sizes={sizes}
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
      {photos.length > 1 && (
        <>
          <button type="button" aria-label="Предыдущее фото" onClick={() => move(-1)}
            className="absolute left-0.5 sm:left-2 top-1/2 z-10 flex h-7 w-7 sm:h-9 sm:w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 sm:bg-white/90 text-gray-900 shadow-sm sm:shadow hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
            <ChevronLeft className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          </button>
          <button type="button" aria-label="Следующее фото" onClick={() => move(1)}
            className="absolute right-0.5 sm:right-2 top-1/2 z-10 flex h-7 w-7 sm:h-9 sm:w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 sm:bg-white/90 text-gray-900 shadow-sm sm:shadow hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
            <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          </button>
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 z-10 flex -translate-x-1/2 rounded-full bg-white/80 sm:bg-white/90 px-0.5 sm:px-1 shadow-sm sm:shadow">
            {photos.map((photo, index) => (
              <button key={`${photo}-${index}`} type="button" aria-label={`Показать фото ${index + 1}`}
                aria-current={current === index ? "true" : undefined} onClick={() => goTo(index)}
                className="flex h-5 w-5 sm:h-8 sm:w-8 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
                <span className={`h-1 w-1 sm:h-2 sm:w-2 rounded-full ${current === index ? "bg-gray-900" : "bg-gray-400"}`} />
              </button>
            ))}
          </div>
          <span className="sr-only" aria-live="polite">Фото {current + 1} из {photos.length}</span>
        </>
      )}
    </div>
  );
}
