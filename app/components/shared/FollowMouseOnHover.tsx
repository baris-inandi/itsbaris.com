"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface FollowMouseOnHoverProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
}

const FollowMouseOnHover: React.FC<FollowMouseOnHoverProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [positionRelativeToChildren, setPositionRelativeToChildren] = useState({
    x: 0,
    y: 0,
  });

  const ballRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        if (ballRef.current) {
          const rect = ballRef.current.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
          setPositionRelativeToChildren({ x, y });
        }
      }}
    >
      {props.tooltip && (
        <div className="pointer-events-none absolute left-1/2 block h-full w-full">
          <motion.div
            initial={{ x: "-50%", y: "12px", scale: 0.33, opacity: 0, rotate: "0deg" }}
            animate={{
              scale: isHovered ? 1 : 0.33,
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : "12px",
              rotate: `${positionRelativeToChildren.x * 8}deg`,
              translateX: `${positionRelativeToChildren.x * 20}%`,
              translateY: `${positionRelativeToChildren.y * 15 + 25}%`,
            }}
            transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
            className="absolute"
            style={{
              top: "-90%",
              whiteSpace: "nowrap",
              transformOrigin: "bottom center",
            }}
          >
            {props.tooltip}
          </motion.div>
        </div>
      )}
      <div ref={ballRef} className="inline-block">
        {props.children}
      </div>
    </div>
  );
};

export default FollowMouseOnHover;
