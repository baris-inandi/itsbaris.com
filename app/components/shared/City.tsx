"use client";

import { useReward } from "react-rewards";

const emojis = {
  istanbul: ["🇹🇷", "🏰", "🧿", "☕", "🐈", "🚋", "🐦"],
  london: ["🇬🇧", "🎡", "💦", "☕", "👑", "📮", "🚇", "🌧️", "🎭", "🍺", "🫖"],
  boston: ["🇺🇸", "🏛️", "⚾", "🍀", "🎓", "🦞", "🍂", "🍁", "❄️", "🏀", "🚲"],
};

interface CityProps {
  children: React.ReactNode;
  cityName: keyof typeof emojis;
  identifier: string;
}

const City: React.FC<CityProps> = (props) => {
  const realIdentifier = "citycomponent__" + props.identifier;

  const { reward } = useReward(realIdentifier, "emoji", {
    emoji: emojis[props.cityName],
    decay: 0.9,
    zIndex: 20,
    spread: 120,
    elementCount: 12,
    elementSize: 32,
    fps: 144,
  });

  return (
    <button id={realIdentifier} className="inline-block" onClick={reward}>
      {props.children}
    </button>
  );
};

export default City;
