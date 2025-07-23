import Link from "next/link";
import React from "react";

interface CardProps {
  url: string;
  wide?: boolean;
  subtitle: string;
  description: string;
}

const CardNext: React.FC<CardProps> = ({ url, wide, subtitle, description }) => {
  return (
    <div className={wide ? "lg:col-span-2" : ""}>
      <div>
        <Link href={url} className="block">
          <div className="flex cursor-pointer select-none flex-col gap-1">
            <div
              className={`relative w-full overflow-hidden rounded-3xl bg-slate-100 ${
                wide ? "aspect-[2/1]" : "aspect-[4/5]"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center p-6"
                style={{
                  backgroundColor: "#f0f0f0",
                }}
              >
                <p className="pb-2 text-resp-sm font-medium leading-snug text-dimmed">
                  {subtitle}
                </p>
                <p className="text-resp-lg font-semibold leading-[1.25]">{description}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardNext;
