"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FollowMouseOnHoverProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
}

const FollowMouseOnHover: React.FC<FollowMouseOnHoverProps> = (props) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate the angle (in degrees) between the center of the component and the mouse position
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);

    setPosition({ x, y });
    setRotation(angle);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Tooltip */}
      {props.tooltip && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={
            hovered
              ? { opacity: 1, scale: 1, rotate: rotation }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{ type: "tween", duration: 0.15 }}
          className="pointer-events-none absolute"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -120%)",
            whiteSpace: "nowrap",
          }}
        >
          {props.tooltip}
        </motion.div>
      )}
      {props.children}
    </div>
  );
};

export default FollowMouseOnHover;
