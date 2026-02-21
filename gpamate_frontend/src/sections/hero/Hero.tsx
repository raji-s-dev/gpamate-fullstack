// src/components/hero/Hero.tsx
import Header from "./components/Header";
import HeroButton from "./components/HeroButton";
import FileUpload from "./components/FileUpload";

const Hero: React.FC = () => {
  return (
    <section id="hero-cta" className="w-full bg-white border-b">
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-4 pt-24 text-center">
        <Header />
      </div>

      {/* STRIP BUTTONS */}
      <div className="mt-24 max-md:mt-10 bg-slate-100">
        <HeroButton />
      </div>

      {/* FILE UPLOAD */}
      <div className="bg-slate-100 pb-8">
        <FileUpload />
      </div>
    </section>
  );
};

export default Hero;
