import Marquee from "react-fast-marquee";

const data = {
  "I build": [
    "Web Apps",
    "AI Solutions",
    "Design",
    "Web3 dApps",
    "Mobile Apps",
    "APIs & Backends",
    "Developer Tools",
    "UI/UX",
    "Chatbots",
    "Machine Learning Models",
    "Microservices",
  ],
  "using tools": [
    "React",
    "Next.js",
    "Svelte.js",
    "Git/Github",
    "Tensorflow/Keras",
    "Figma",
    "Tailwind CSS",
    "WebAssembly",
    "Astro",
    "Flask",
    "Prisma",
    "Firebase",
    "Framer Motion",
  ],
  "with languages": [
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
    <div className="ignore:xl:flex-row ignore:xl:items-center ignore:xl:space-x-2 flex w-full flex-col overflow-hidden pb-4 pt-1">
      {Object.entries(data).map(([key, value], i) => (
        <div
          key={key}
          className="flex min-w-0 flex-1 flex-row items-center space-x-2 py-2"
        >
          <div className="whitespace-nowrap text-resp-sm font-medium">{key}</div>
          <div className="gradient-mask relative w-full min-w-0 flex-1 overflow-hidden">
            <Marquee gradient={false} speed={70 + i * 11 - (-1) ** i * 12} pauseOnHover>
              {[...value, ...value].map((text, i) => (
                <div
                  key={i}
                  className="mr-2 select-all rounded-full border border-stone-400 px-3 py-[2px] text-dimmed"
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
