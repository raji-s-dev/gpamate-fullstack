// src/sections/Highlights.tsx
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { useEffect, useRef, useState } from "react";


import logo from "../assets/highlights/logo.png";
import vector1 from "../assets/highlights/vector1.png";
import vector2 from "../assets/highlights/vector2.png";
import vector3 from "../assets/highlights/vector3.png";
import vector4 from "../assets/highlights/vector4.png";
import vector5 from "../assets/highlights/vector5.png";
import vector6 from "../assets/highlights/vector6.png";
import vector7 from "../assets/highlights/vector7.png";
import vector8 from "../assets/highlights/vector8.png";

const cards = [
  {
    icon: vector1,
    title: "Automatic GPA Calculation",
    desc: "GPAmate extracts your grades and calculates GPA automatically, saving time while ensuring accurate results.",
    colorKey: "blue",
  },
  {
    icon: vector2,
    title: "Multi-Semester Support",
    desc: "Upload results for one or all eight semesters, and AutoCGPA provides a complete academic overview.",
    colorKey: "yellow",
  },
  {
    icon: vector3,
    title: "Revaluation & Arrear Handling",
    desc: "Upload multiple PDFs - GPAmate detects revaluation or arrear results, keeps the latest grades.",
    colorKey: "pink",
  },
  {
    icon: vector4,
    title: "AI-Powered Recognition",
    desc: "Our AI processes images and PDFs to accurately extract subject codes and grades.",
    colorKey: "blue",
  },
  {
    icon: vector5,
    title: "Privacy-First Approach",
    desc: "Files are processed securely in real time and never stored or shared, keeping your data private.",
    colorKey: "purple",
  },
  {
    icon: vector6,
    title: "Super Fast Results",
    desc: "Get semester-wise GPA, overall CGPA, and insights within seconds of uploading your files.",
    colorKey: "red",
  },
  {
    icon: vector7,
    title: "Student-Friendly Extras",
    desc: "Download a detailed CGPA report or share your progress easily with friends or mentors.",
    colorKey: "lightYellow",
  },
  {
    icon: vector8,
    title: "Accurate & Reliable",
    desc: "Built for Anna University, gpamate calculates GPA precisely according to official standards.",
    colorKey: "lightBlue",
  },
];

const rowOne = cards.slice(0, 4);
const rowTwo = cards.slice(4, 8);

const Highlights: React.FC = () => {

  const loopRowOne = [...rowOne, ...rowOne];
const loopRowTwo = [...rowTwo, ...rowTwo];
const [rowOneInteracting, setRowOneInteracting] = useState(false);
const [rowTwoInteracting, setRowTwoInteracting] = useState(false);

const rowOneTimeout = useRef<number | null>(null);
const rowTwoTimeout = useRef<number | null>(null);

const rowOneRef = useRef<HTMLDivElement>(null);
const rowTwoRef = useRef<HTMLDivElement>(null);

const resetScrollPosition = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return;
  ref.current.scrollLeft = ref.current.scrollWidth / 4;
};


const handleInteraction = (
  setInteracting: React.Dispatch<React.SetStateAction<boolean>>,
  timeoutRef: React.MutableRefObject<number | null>,
  ref: React.RefObject<HTMLDivElement>
) => {
  setInteracting(true);

  if (timeoutRef.current !== null) {
    window.clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = window.setTimeout(() => {
    // 🔥 normalize scroll BEFORE animation resumes
    resetScrollPosition(ref);
    setInteracting(false);
  }, 1000);
};



useEffect(() => {
  const setup = (
    ref: React.RefObject<HTMLDivElement>,
    isActive: boolean
  ) => {
    if (!ref.current || !isActive) return;

    const container = ref.current;

    const onScroll = () => {
      const half = container.scrollWidth / 2;

      if (container.scrollLeft <= 1) {
        container.scrollLeft += half;
      }

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth - 1
      ) {
        container.scrollLeft -= half;
      }
    };

    container.scrollLeft = container.scrollWidth / 4;
    container.addEventListener("scroll", onScroll);

    return () => container.removeEventListener("scroll", onScroll);
  };

  const c1 = setup(rowOneRef, rowOneInteracting);
  const c2 = setup(rowTwoRef, rowTwoInteracting);

  return () => {
    c1?.();
    c2?.();
  };
}, [rowOneInteracting, rowTwoInteracting]);




  return (
    <section className="w-full flex flex-col items-center mt-10 px-6 pb-24 overflow-hidden">
      <SectionHeading title="Why Students Love" Img={logo} />

{/* ================= MOBILE HYBRID CAROUSEL ================= */}
<div className="w-full lg:hidden mt-12 space-y-10">

  {/* ROW 1 */}
<div
  ref={rowOneRef}
onTouchStart={() =>
  handleInteraction(setRowOneInteracting, rowOneTimeout, rowOneRef)
}
onWheel={() =>
  handleInteraction(setRowOneInteracting, rowOneTimeout, rowOneRef)
}
  className={`
    flex gap-6 px-1 scrollbar-hide
    ${rowOneInteracting
      ? "overflow-x-auto snap-x snap-mandatory touch-pan-x"
      : "overflow-hidden"}
  `}
>
  <div className={`flex gap-6 w-max ${!rowOneInteracting && "animate-scroll"}`}>
    {loopRowOne.map((card, index) => (
      <div key={index} className="min-w-[320px] snap-center">
        <Card {...card} />
      </div>
    ))}
  </div>
</div>


  {/* ROW 2 */}
<div
  ref={rowTwoRef}
onTouchStart={() =>
  handleInteraction(setRowTwoInteracting, rowTwoTimeout, rowTwoRef)
}
onWheel={() =>
  handleInteraction(setRowTwoInteracting, rowTwoTimeout, rowTwoRef)
}
  className={`
    flex gap-6 px-1 scrollbar-hide
    ${rowTwoInteracting
      ? "overflow-x-auto snap-x snap-mandatory touch-pan-x"
      : "overflow-hidden"}
  `}
>
  <div
    className={`flex gap-6 w-max ${
      !rowTwoInteracting && "animate-scrollReverse"
    }`}
  >
    {loopRowTwo.map((card, index) => (
      <div key={index} className="min-w-[320px] snap-center">
        <Card {...card} />
      </div>
    ))}
  </div>
</div>


</div>



      {/* ================= DESKTOP GRID (UNCHANGED) ================= */}
      <div className="w-full max-w-7xl hidden lg:block mt-16">
        <div className="grid grid-cols-3 gap-8">
          {cards.slice(0, 6).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {cards.slice(6).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;