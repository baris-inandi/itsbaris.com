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
  const { reward } = useReward(props.identifier, "emoji", {
    emoji: emojis[props.cityName],
    decay: 0.88,
    zIndex: 20,
    spread: 120,
    elementCount: 10,
    elementSize: 30,
    fps: 144,
  });

  return (
    <button id={props.identifier} className="inline-block" onClick={reward}>
      {props.children}
    </button>
  );
};

export default City;
