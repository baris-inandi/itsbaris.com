import Image from "next/image";

interface CardProps {
  img: string;
  wide?: boolean;
  title: string;
  description: string;
}

const CardNext: React.FC<CardProps> = ({ img, wide, title, description }) => {
  return (
    <article className={wide ? "col-span-full" : ""}>
      <div className="select-none bg-transparent">
        <div
          className={`relative overflow-hidden rounded-md bg-stone-100 ${
            wide ? "pb-[50%]" : "pb-[120%]"
          }`}
        >
          <Image
            src={img}
            alt={title}
            fill
            sizes={wide ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
            className="object-cover"
          />
        </div>
        <div className="pt-5">
          <h3 className="text-resp-base font-medium leading-[1.25] text-stone-800">{title}</h3>
          <p className="pt-2 text-resp-xs leading-relaxed text-dimmed">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default CardNext;
