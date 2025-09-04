import ItsBaris from "./components/ItsBaris/ItsBaris";
import "./styles/homepage.css";

export default function Home() {
  /* return (
    <div className="m-auto w-screen max-w-screen-xl px-6 md:px-12">
      <ItsBaris />
      <PortfolioGrid />
      <MadeWithLove />
    </div>
  ); */

  return (
    <div className="flex min-h-screen items-center">
      <div className="mx-auto mb-12 max-w-screen-lg px-6 md:px-12">
        <ItsBaris />
        <div className="select-none pt-4 text-resp-xs text-dimmed grayscale">
          Made with love in London
        </div>
      </div>
    </div>
  );
}
