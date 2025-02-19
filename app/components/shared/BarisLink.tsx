"use client";

import Link, { LinkProps } from "next/link";
import { splitmix32 } from "../../lib/splitmix32";

interface BarisLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  tracked?: boolean;
  children: React.ReactNode;
  accentColor?: string;
  seed?: number;
  hoverTooltip?: {
    color: string;
    text: string;
  };
}

const BarisLink: React.FC<BarisLinkProps> = (props) => {
  return (
    <div className="group inline-block">
      {props.hoverTooltip && (
        <div
          className="pointer-events-none absolute"
          style={{
            transform: `rotate(${(splitmix32(props.seed ?? props) < 0.5 ? -1 : 1) * (splitmix32(props.seed ?? props) * 3 + 3)}deg)`,
          }}
        >
          <div
            style={{ borderColor: props.hoverTooltip.color }}
            className={`-translate-y-[80%] select-none rounded-full border-2 bg-white px-2 text-sm font-semibold text-black opacity-0 group-hover:opacity-100`}
          >
            {props.hoverTooltip.text}
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
