import Marquee from "react-fast-marquee";

const data = {
  "I build": ["Web Apps", "AI Solutions", "Web3 DApps", "Design"],
  "with tools": [
    "React",
    "Next.js",
    "Svelte.js",
    "Git/Github",
    "Tensorflow/Keras",
    "Figma",
  ],
  "using languages": [
    "JavaScript and TypeScript",
    "Python",
    "Go",
    "Rust",
    "Solidity",
    "Kotlin",
  ],
};

const MarqeeDeLafayette: React.FC = () => {
  return (
    <div className="flex w-full items-center space-x-2 overflow-hidden pb-4 pt-1">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-3">
          <div className="whitespace-nowrap font-medium">{key}</div>
          <div className="relative w-[300px] overflow-hidden">
            <Marquee
              gradient={true}
              gradientColor="#FAFAF9"
              gradientWidth="10%"
              speed={50}
              pauseOnHover
            >
              {value.map((text) => (
                <div
                  key={text}
                  className="mr-2 select-all rounded-full border border-stone-500 px-3 py-[3px] text-sm text-stone-500"
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
