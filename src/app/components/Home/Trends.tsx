"use client";

import { useRef, useEffect } from "react";

interface CardComponentProps {
  title: string;
  index: number;
}

const CardComponent: React.FC<CardComponentProps> = ({ title }) => {
  return (
    <div className="py-3 justify-between gap-4 px-6 w-auto flex items-center">
      <h4 className="text-lg text-nowrap font-semibold text-white">{title}</h4>
    </div>
  );
};

interface Card {
  title: string;
}

interface InfiniteScrollProps {
  cardData: Card[];
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ cardData }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let animationFrame: number;

    const scroll = () => {
      scrollPosition -= 2;
      if (Math.abs(scrollPosition) >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.style.transform = `translateX(${scrollPosition}px)`;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const duplicatedData = Array(5).fill(cardData).flat();

  return (
    <div className="w-full large:max-w-[98rem] bg-indigo-500 mt-5 max-w-full mx-auto px-0 paisagem-tablet:px-6 pt-0 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-10 items-center justify-start whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {duplicatedData.map((card, index) => (
          <div key={index} className="flex-shrink-0">
            <CardComponent title={card.title} index={index % cardData.length} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
