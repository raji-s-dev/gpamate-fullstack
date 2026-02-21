import { useState } from "react";
import leftArrow from "../assets/testimonials/arrowleft.png";
import rightArrow from "../assets/testimonials/arrowright.png";
import SectionHeading from "../components/SectionHeading";
import logo from "../assets/highlights/logo.png";

import testimonials from "../data/testimonialsData";
import TestimonialCard from "../components/TestimonialCard";

/** Matches TestimonialCard props */
interface TestimonialItem {
  stars?: number;
  text: string;
  name: string;
  course: string;
  college: string;
}

type ActiveSide = "left" | "right";

const Testimonials: React.FC = () => {
  const [active, setActive] = useState<ActiveSide>("right"); // "left" or "right"
  const [_index, setIndex] = useState<number>(0);

  const isLeftActive = active === "left";
  const isRightActive = active === "right";

  const handleNext = () => {
    setActive("right");
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive("left");
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-[#FFF9E8] py-24">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-[780px] mx-auto">
          <SectionHeading title="What Students Say About " Img={logo} />

          <p className="text-[#6B7280] text-[16px] font-inter leading-7">
            See how GPAmate is helping students save time, stay organized,
            and track their academic progress effortlessly. Real feedback from
            real students — because your CGPA journey deserves simplicity and
            accuracy
          </p>
        </div>

        {/* Light Blue Background Container */}
        <div className="relative max-w-[1090px] mx-auto mt-20 flex flex-col items-center gap-10">
          <div className="absolute inset-0 bg-[#EAF3FF] rounded-[16px] h-[480px]" />

          {/* Dynamic Cards */}
          <div className="relative z-10 flex justify-center gap-10 pt-16 mb-4">
            {(testimonials as TestimonialItem[])
              .slice(0, 3)
              .map((item, i) => (
                <TestimonialCard key={i} {...item} />
              ))}
          </div>

          {/* Slider Arrows */}
          <div className="relative w-28 h-16 flex items-center justify-between px-2 z-20 -translate-y-8">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className={`
                w-12 h-12 rounded-md shadow-[0_8px_15px_rgba(72,72,138,0.08)]
                flex items-center justify-center transition-all duration-200
                ${isLeftActive ? "bg-blue-500 scale-110 animate-bounceOnce" : "bg-white"}
              `}
            >
              <img
                src={leftArrow}
                alt="left"
                className={`w-4 transition-all ${
                  isLeftActive ? "brightness-0 invert" : "opacity-60"
                }`}
              />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className={`
                w-12 h-12 rounded-md shadow-[0_8px_15px_rgba(72,72,138,0.08)]
                flex items-center justify-center transition-all duration-200
                ${isRightActive ? "bg-blue-500 scale-110 animate-bounceOnce" : "bg-white"}
              `}
            >
              <img
                src={rightArrow}
                alt="right"
                className={`w-4 transition-all ${
                  isRightActive ? "brightness-0 invert" : "opacity-60"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
