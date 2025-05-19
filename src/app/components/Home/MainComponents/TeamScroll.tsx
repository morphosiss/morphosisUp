"use client";
import { useRef, useEffect } from "react";
import ProfileCard from "./ProfileCard";

interface Card {
  name: string;
  description: string;
  imageUrl: string;
  func: string;
  linkedinLink: string;
}

interface InfiniteScrollProps {
  cardData: Card[];
}

const InfiniteScrollTeam: React.FC<InfiniteScrollProps> = ({ cardData }) => {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      const nextSibling = ul.nextSibling;
      if (nextSibling && nextSibling instanceof Element) {
        nextSibling.setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  return (
    <div className="w-full large:max-w-[98rem] mt-5  mx-auto px-0 paisagem-tablet:px-6 pt-7">
      <div className="text-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden ">
          <ul
            ref={logosRef}
            className="flex items-stretch justify-center md:justify-start [&_li]:mx-1 [&_img]:max-w-none scrolled"
          >
            {cardData.map((card, index) => (
              <li key={index}>
                <ProfileCard
                  name={card.name}
                  imageUrl={card.imageUrl}
                  description={card.description}
                  linkedinLink={card.linkedinLink}
                  func={card.func}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollTeam;
