import Howitworks from "../sections/Howitworks";
import Highlights from "../sections/Highlights";

import Faq from "../sections/Faq";
import Contact from "../sections/Contact";
import Hero from "../sections/hero/Hero";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <div id="hero">
        <Hero />
      </div>

      <div id="how">
        <Howitworks />
      </div>

      <div id="highlights">
        <Highlights />
      </div>

      
      <Faq />

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
