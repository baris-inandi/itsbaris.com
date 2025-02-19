import React from "react";

interface CardProps {
  url: string;
  wide?: boolean;
  img: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ url, wide, img, title, description }) => {
  return (
    <div className={wide ? "lg:col-span-2" : ""}>
      <div>
        <a href={url} className="block pb-5">
          <div className="flex cursor-pointer select-none flex-col gap-1 pb-5">
            <div
              className={`relative w-full overflow-hidden rounded-md bg-slate-100 ${
                wide ? "aspect-[2/1]" : "aspect-[4/5]"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <p className="text-resp-base pb-[1vmin] font-semibold leading-[1.25]">
            {title}
          </p>
          <p className="text-dimmed text-resp-xs leading-snug">
            {description}
          </p>
        </a>
      </div>
    </div>
  );
};

export default Card;
