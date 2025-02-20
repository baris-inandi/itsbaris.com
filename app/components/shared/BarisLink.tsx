import Link, { LinkProps } from "next/link";
import Tooltip, { TooltipProps } from "./BarisTooltip";
import FollowMouseOnHover from "./FollowMouseOnHover";

interface BarisLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  tracked?: boolean;
  children: React.ReactNode;
  accentColor?: string;
  hoverTooltip?: TooltipProps;
}

const BarisLink: React.FC<BarisLinkProps> = (props) => {
  const link = (
    <Link
      {...props}
      target="_blank"
      className={`font-medium ${props.hoverTooltip?.color ?? "hover:bg-orange-500"} py-1 hover:text-stone-800`}
    >
      <span className="inline-block">{props.children}</span>
    </Link>
  );

  return props.hoverTooltip ? (
    <FollowMouseOnHover tooltip={<Tooltip {...props.hoverTooltip} />}>
      {link}
    </FollowMouseOnHover>
  ) : (
    link
  );
};

export default BarisLink;
