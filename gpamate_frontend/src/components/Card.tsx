// src/components/Card.tsx
import arrow from "../assets/highlights/arrow.png";
import logo from "../assets/navbar/logo.png";
import React, { useState } from "react";

interface CardProps {
  icon: string;
  title: string;
  desc: string;
  colorKey: string;
}

const bgMap: Record<string, string> = {
  blue: "bg-[#E0F2FE]",
  yellow: "bg-[#FEF3C7]",
  pink: "bg-[#FCE7F3]",
  purple: "bg-[#EDE9FE]",
  red: "bg-[#FEE2E2]",
  lightYellow: "bg-[#FFF7D2]",
  lightBlue: "bg-[#DBEAFE]",
};

const Card: React.FC<CardProps> = ({ icon, title, desc, colorKey }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    /* ===== PERSPECTIVE WRAPPER ===== */
    <div className="perspective
      w-80 h-72 
      md:w-[420px] md:h-[322px]"
    >
      {/* ===== ROTATING CONTAINER ===== */}
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* ================= FRONT ================= */}
        <div
          className="
            absolute inset-0 backface-hidden bg-white shadow-md
            rounded-[10px] md:rounded-2xl
            p-5 md:p-7
            flex flex-col gap-4 md:gap-6

            
          "
        >
          {/* ICON */}
          <div
            className={`
              flex items-center justify-center
              w-14 h-10 md:w-16 md:h-16
              rounded-tl-[5px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[5px]
              md:rounded-xl
              ${bgMap[colorKey]}
            `}
          >
            <img
              src={icon}
              alt=""
              className="w-4 h-4 md:w-5 md:h-5 object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-3 md:gap-5">
            <h3
              className="
                text-lg md:text-[20px]
                font-semibold text-zinc-800 font-poppins
                leading-6
              "
            >
              {title}
            </h3>

            <p
              className="
                text-sm md:text-[16px]
                text-slate-600 font-inter
                leading-6 md:leading-relaxed
                md:pr-20
              "
            >
              {desc}
            </p>
          </div>

          {/* ARROW */}
          <div
            className="mt-auto cursor-pointer"
            onClick={() => setFlipped(true)}
          >
            <img
              src={arrow}
              alt="arrow"
              className="w-4 h-4 md:w-5 md:h-5 opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>

        {/* ================= BACK ================= */}
        <div
          className="
            absolute inset-0 backface-hidden rotate-y-180
            bg-white shadow-md
            rounded-[10px] md:rounded-2xl
            flex items-center justify-center
            cursor-pointer
          "
          onClick={() => setFlipped(false)}
        >
          <img
            src={logo}
            alt="gpamate"
            className="w-24 md:w-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
