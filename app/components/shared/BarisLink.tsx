import Link, { LinkProps } from "next/link";

interface BarisLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  tracked?: boolean;
  children: React.ReactNode;
}

const BarisLink: React.FC<BarisLinkProps> = (props) => {
  return (
    <Link
      {...props}
      target="_blank"
      className="font-medium hover:bg-orange-500 hover:text-stone-800"
    >
      {props.children}
    </Link>
  );
};

export default BarisLink;
