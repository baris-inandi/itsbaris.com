import Marquee from "react-fast-marquee";

const data = {
  "I build": [
    "Web Apps",
    "AI Solutions",
    "Design",
    "Web3 DApps",
    "Mobile Apps",
    "APIs & Backends",
    "Developer Tools",
    "UI/UX",
  ],
  "with tools": [
    "React",
    "Next.js",
    "Svelte.js",
    "Git/Github",
    "Tensorflow/Keras",
    "Figma",
    "Tailwind CSS",
  ],
  "using languages": [
    "JavaScript and TypeScript",
    "Python",
    "Go",
    "Rust",
    "Solidity",
    "Kotlin",
    "SQL",
  ],
};

const MarqeeDeLafayette: React.FC = () => {
  return (
    <div className="flex w-full flex-col space-y-4 overflow-hidden pb-4 pt-1 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
      {Object.entries(data).map(([key, value]) => (
        <div
          key={key}
          className="flex min-w-0 flex-1 flex-col items-start space-y-1 lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0"
        >
          <div className="whitespace-nowrap font-medium">{key}</div>
          <div className="gradient-mask relative w-full min-w-0 flex-1 overflow-hidden">
            <Marquee gradient={false} speed={50} pauseOnHover>
              {[...value, ...value, ...value].map((text, i) => (
                <div
                  key={i}
                  className="mr-2 select-all rounded-full border border-stone-500 px-3 py-[2px] text-sm text-stone-500"
                >
                  {text}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarqeeDeLafayette;
