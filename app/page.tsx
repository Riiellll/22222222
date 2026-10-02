import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Story from "./components/Story";
import Together from "./components/Together";
import Reasons from "./components/Reasons";
import Bouquet from "./components/Bouquet";
import Wish from "./components/Wish";
import Divider from "./components/Divider";
import Heart from "./components/Heart";
import Rose from "./components/Rose";
import { data } from "./data";

export default function Page() {
  return (
    <Experience>
      <Hero />
      <Letter />
      <Divider />
      <Gallery />
      <Divider />
      <Story />
      <Divider />
      <Together />
      <Reasons />
      <Divider />
      <Bouquet />
      <Divider />
      <Wish />
      <footer className="foot">
        <div className="foot-roses" aria-hidden="true">
          <Rose size={36} tone="pink" spin={15} />
          <Rose size={58} />
          <Rose size={36} tone="pink" spin={50} />
        </div>
        Made for you, {data.name} <Heart size={16} />
      </footer>
    </Experience>
  );
}
