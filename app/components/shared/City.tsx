"use client";

import { useReward } from "react-rewards";

const emojis = {
  istanbul: ["🏰", "🕌", "🌊", "🛶", "☕", "🍢", "🐈", "🚋", "🌅"],
  london: ["🏰", "☕", "🚇", "🌧️", "🎭", "🍻", "🫖", "🚖", "👑", "🇬🇧"],
  boston: ["🏛️", "⚾", "🍀", "🌉", "🎓", "🦞", "⛵", "🍺", "🍂"],
};

interface CityProps {
  children: React.ReactNode;
  cityName: keyof typeof emojis;
  identifier: string;
}

const City: React.FC<CityProps> = (props) => {
  const { reward } = useReward(props.identifier, "emoji", {
    emoji: emojis[props.cityName],
    decay: 0.9,
    zIndex: 1000,
    spread: 100,
    elementCount: 12,
  });

  return (
    <button id={props.identifier} className="inline-block" onClick={reward}>
      {props.children}
    </button>
  );
};

export default City;
