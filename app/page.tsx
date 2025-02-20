import ItsBaris from "./components/ItsBaris/ItsBaris";
import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";
import City from "./components/shared/City";
import "./styles/homepage.css";

export default function Home() {
  return (
    <div className="m-auto w-screen max-w-screen-xl px-6 md:px-12">
      <ItsBaris />
      <PortfolioGrid />
      <div className="w-full pb-16 pt-4 text-center text-resp-xs text-dimmed">
        Made with 🩶 in <City identifier="london">London</City> by Baris
      </div>
    </div>
  );
}
