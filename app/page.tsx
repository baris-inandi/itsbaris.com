import ItsBaris from "./components/ItsBaris/ItsBaris";
import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";

export default function Home() {
  return (
    <div className="w-screen max-w-screen-lg px-5 m-auto">
      <ItsBaris />
      <PortfolioGrid />
    </div>
  );
}
