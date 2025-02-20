"use client";

import { useState } from "react";
import FollowMouseOnHover from "../shared/FollowMouseOnHover";

const emojis = {
  istanbul: ["🏰", "🕌", "🌊", "🛶", "☕", "🍢", "🐈", "🚋", "🌅"],
  london: ["🏰", "☕", "🚇", "🌧️", "🎭", "🍻", "🫖", "🚖", "👑", "🇬🇧"],
  boston: ["🏛️", "⚾", "🍀", "🌉", "🎓", "🦞", "⛵", "🍺", "🍂"],
};

interface CityProps {
  children: React.ReactNode;
  identifier: keyof typeof emojis;
}

const City: React.FC<CityProps> = (props) => {
  function getRandomEmojis(city: keyof typeof emojis): string[] {
    const cityEmojis = emojis[city];
    cityEmojis.sort(() => Math.random() - 0.5);
    return cityEmojis.slice(0, 4);
  }

  const [randomEmojis, setRandomEmojis] = useState(getRandomEmojis(props.identifier));

  return (
    <FollowMouseOnHover
      onHover={() => {
        setRandomEmojis(getRandomEmojis(props.identifier));
      }}
      subtleOnMouseMove
      subtleInOut
      tooltip={
        <div className="relative h-10 w-24 drop-shadow-sm">
          <span className="absolute right-0 rotate-12">{randomEmojis[0]}</span>
          <span className="absolute -top-2 left-1/2 -translate-x-[120%] rotate-0">
            {randomEmojis[1]}
          </span>
          <span className="absolute -top-2 left-1/2 translate-x-[20%] rotate-0">
            {randomEmojis[2]}
          </span>
          <span className="absolute left-0 -rotate-12">{randomEmojis[3]}</span>
        </div>
      }
    >
      {props.children}
    </FollowMouseOnHover>
  );
};

export default City;
