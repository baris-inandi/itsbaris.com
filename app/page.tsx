import ItsBaris from "./components/ItsBaris/ItsBaris";
import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";
import MadeWithLove from "./components/shared/MadeWithLove";
import "./styles/homepage.css";

export default function Home() {
  return (
    <div className="m-auto w-screen max-w-screen-xl px-6 md:px-12">
      <ItsBaris />
      <PortfolioGrid />
      <MadeWithLove />
    </div>
  );
}
