import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Tooltip, { TooltipProps } from "./BarisTooltip";
import FollowMouseOnHover from "./FollowMouseOnHover";

type BarisLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  hoverTooltip?: TooltipProps;
};

export default function BarisLink({
  hoverTooltip,
  children,
  className,
  target = "_blank",
  ...linkProps
}: BarisLinkProps) {
  const link = (
    <Link
      {...linkProps}
      target={target}
      className={`font-medium ${hoverTooltip?.color ?? "hover:bg-orange-500"} py-1 hover:text-stone-800 ${className ?? ""}`}
    >
      <span className="inline-block">{children}</span>
    </Link>
  );

  return hoverTooltip ? (
    <FollowMouseOnHover tooltip={<Tooltip {...hoverTooltip} />}>
      {link}
    </FollowMouseOnHover>
  ) : (
    link
  );
}
