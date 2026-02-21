import { useState } from "react";
import logo from "../assets/navbar/logo.png";
import menu from "../assets/navbar/menu.png";
import menuclose from "../assets/navbar/menuclose.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAVBAR_HEIGHT = 96;

  const scrollToSection = (id: string) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_HEIGHT;

      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false);
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 150);
    } else {
      scroll();
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="w-full bg-white py-6 sticky top-0 z-50 hidden lg:block">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          
          {/* LOGO */}
          <img
            src={logo}
            alt="gpamate"
            className="h-14 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* NAV LINKS */}
          <div className="flex items-center gap-12 ml-10">
            <button onClick={() => navigate("/")} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection("how")} className="nav-link">
              How It Works
            </button>
            <button onClick={() => scrollToSection("highlights")} className="nav-link">
              Highlights
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("hero")}
            className="bg-blue-500 text-white text-xl font-[Poppins] rounded-[40px] px-10 py-3"
          >
            Get My CGPA
          </button>
        </div>
      </nav>

      {/* ================= MOBILE / TABLET NAVBAR ================= */}
      <nav className="w-full bg-white sticky top-0 z-50 lg:hidden">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <img
            src={logo}
            alt="gpamate"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            
            {/* CTA */}
            <button
              onClick={() => scrollToSection("hero")}
              className="bg-blue-500 text-white text-[14px] px-4 py-2 rounded-full font-medium"
            >
              Get My CGPA
            </button>

            {/* MENU ICON */}
            <img
              src={isMenuOpen ? menuclose : menu}
              alt="menu"
              className="h-8 w-8 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </nav>

      {/* ================= FULLSCREEN MOBILE MENU ================= */}
{isMenuOpen && (
  <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center lg:hidden px-8">
    
    <button
      onClick={() => scrollToSection("hero")}
      className="text-2xl font-semibold text-left py-3 border-b border-slate-200"
    >
      Home
    </button>

    <button
      onClick={() => scrollToSection("how")}
      className="text-2xl font-semibold text-left py-3 border-b border-slate-200"
    >
      How It Works
    </button>

    <button
      onClick={() => scrollToSection("highlights")}
      className="text-2xl font-semibold text-left py-3 border-b border-slate-200"
    >
      Highlights
    </button>

    <button
      onClick={() => scrollToSection("contact")}
      className="text-2xl font-semibold text-left py-3 border-b border-slate-200"
    >
      Contact
    </button>

  </div>
)}

    </>
  );
};

export default Navbar;
