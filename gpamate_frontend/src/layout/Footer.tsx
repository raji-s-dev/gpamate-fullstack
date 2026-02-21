import logo from "../assets/navbar/logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 w-full">
      
      {/* ================= TOP CONTENT ================= */}
      <div className="
        max-w-[1440px] mx-auto
        px-6 py-10
        lg:px-20 lg:py-16
        flex flex-col lg:flex-row
        gap-12 lg:gap-0
        justify-between
        text-left lg:text-left
      ">
        
        {/* LEFT SECTION */}
        <div className="lg:w-[40%] flex flex-col items-start lg:items-start">
          <img
            src={logo}
            alt="gpamate"
            className="h-12 lg:h-14 w-auto object-contain"
          />

          <p className="
            text-white
            text-base lg:text-xl
            font-semibold font-[Poppins]
            mt-4 lg:mt-6
            leading-relaxed
          ">
            AutoCGPA helps Anna University students calculate GPA & CGPA instantly
            using AI. No manual work, just upload and get results.
          </p>

          <p className="
            text-white
            mt-4 lg:mt-6
            text-sm lg:text-base
            font-[Poppins]
          ">
            💙 Made with Love by Students, for Students.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="
          flex flex-col sm:flex-row
          gap-10 sm:gap-16 lg:gap-24
          justify-center
        ">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-white/80 text-base lg:text-lg font-medium font-[Poppins]">
              Home
            </h3>

            <div className="
              mt-4 lg:mt-6
              flex flex-col
              gap-4 lg:gap-7
              text-white
              text-sm lg:text-lg
              font-[Poppins]
            ">
              <p>Testimonials</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white/80 text-base lg:text-lg font-medium font-[Poppins]">
              LinkedIn
            </h3>

            <div className="
              mt-4 lg:mt-6
              flex flex-col
              gap-4 lg:gap-7
              text-white
              text-sm lg:text-lg
              font-[Poppins]
            ">
              <p>Instagram</p>
              <p>GitHub</p>
              <p>News</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM STRIP ================= */}
      <div className="bg-blue-500 w-full">
        <div className="
          max-w-[1440px] mx-auto
          flex flex-col sm:flex-row
          items-center
          justify-between
          px-6 sm:px-10 lg:px-28
          py-4 sm:py-0
          gap-3 sm:gap-0
          h-auto sm:h-20
          text-center sm:text-left
        ">
          
          <p className="text-slate-900 text-sm lg:text-base font-[Poppins]">
            © 2025 gpamate. All rights reserved.
          </p>

          <div className="
            flex gap-6 lg:gap-12
            text-slate-900
            text-sm lg:text-base
            font-[Poppins]
          ">
<Link
  to="/legal"
  className="cursor-pointer hover:underline hover:text-white transition transition-colors duration-200"
>
  Terms of Service
</Link>

<Link
  to="/legal"
  className="cursor-pointer hover:underline hover:text-white transition transition-colors duration-200"
>
  Privacy Policy
</Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
