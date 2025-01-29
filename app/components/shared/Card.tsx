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
      <div className="select-none">
        <a href={url} className="block pb-5">
          <div className="flex cursor-pointer flex-col gap-1 pb-5">
            <div
              className={`relative w-full overflow-hidden rounded-md bg-slate-100 ${
                wide ? "aspect-[2/1]" : "aspect-[4/5]"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          </div>
          <p className="text-responsive-normal pb-[1vmin] pt-1 font-medium leading-[1.3]">
            {title}
          </p>
          <p className="text-dimmed text-responsive-small">{description}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
