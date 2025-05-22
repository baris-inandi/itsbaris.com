"use client";

export interface TooltipProps {
  text: string;
  color: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, color }) => {
  return (
    <div
      className="pointer-events-none select-none text-nowrap rounded-full border-2 bg-white px-2 text-sm font-semibold text-black"
      style={{
        borderColor: color,
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
