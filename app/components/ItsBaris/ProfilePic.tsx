"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ProfilePicProps {
  size: number;
}

const osscilate = (initial: number, amplitude: number, periods: number) => {
  return [
    initial,
    ...Array(periods)
      .fill(0)
      .map((_, i) => (i % 2 === 0 ? amplitude : -amplitude)),
    initial,
  ];
};

const ProfilePic: React.FC<ProfilePicProps> = (props) => {
  const handSize = 0.45;
  const xOscillator = osscilate(0, 0.07, 7).map((x) => x * props.size * handSize);
  const rotateOsccilator = osscilate(0, 8, 7);
  return (
    <div className="relative select-none">
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
        <motion.div
          animate={{
            rotate: rotateOsccilator,
            x: xOscillator,
          }}
          whileHover={{ rotate: rotateOsccilator, x: xOscillator }}
          whileTap={{ rotate: rotateOsccilator, x: xOscillator }}
          style={{ fontSize: props.size * handSize }}
        >
          👋
        </motion.div>
      </div>
      <Image
        height={props.size}
        width={props.size}
        alt="Baris"
        className="rounded-full shadow-sm"
        src="/face.jpeg"
      />
    </div>
  );
};

export default ProfilePic;
