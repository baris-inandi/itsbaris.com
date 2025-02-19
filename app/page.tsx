import ItsBaris from "./components/ItsBaris/ItsBaris";
import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";

export default function Home() {
  return (
    <div className="w-screen max-w-screen-xl px-6 md:px-12 m-auto">
      <ItsBaris />
      <PortfolioGrid />
    </div>
  );
}
