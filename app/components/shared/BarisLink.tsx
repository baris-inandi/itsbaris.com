"use client";

import Link, { LinkProps } from "next/link";
import { splitmix32 } from "../../lib/splitmix32";

interface BarisLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  tracked?: boolean;
  children: React.ReactNode;
  accentColor?: string;
  hoverTooltip?: {
    color: string;
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    seed?: number;
  };
}

const BarisLink: React.FC<BarisLinkProps> = (props) => {
  return (
    <div className="group relative inline-block">
      {props.hoverTooltip && (
        <div
          className="z-50 bg-red-300"
          style={{
            transform: `rotate(${(splitmix32(props.hoverTooltip.seed ?? props) < 0.5 ? -1 : 1) * (splitmix32(props.hoverTooltip.seed ?? props) * 3 + 2)}deg)`,
          }}
        >
          <div
            className={`pointer-events-none absolute ${
              props.hoverTooltip.position === "bottom"
                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-[200%]"
                : props.hoverTooltip.position === "left"
                  ? "right-full"
                  : props.hoverTooltip.position === "right"
                    ? "left-full"
                    : // default to top
                      "bottom-full -translate-x-[15%]"
            }`}
          >
            <div
              style={{ borderColor: props.hoverTooltip.color }}
              className={`select-none text-nowrap rounded-full border-2 bg-white px-2 text-sm font-semibold text-gray-800 opacity-0 group-hover:opacity-100`}
            >
              {props.hoverTooltip.text}
            </div>
          </div>
        </div>
      )}
      <Link
        {...props}
        target="_blank"
        className={`font-medium ${props.hoverTooltip?.color ?? "hover:bg-orange-500"} hover:text-stone-800`}
      >
        {props.children}
      </Link>
    </div>
  );
};

export default BarisLink;
