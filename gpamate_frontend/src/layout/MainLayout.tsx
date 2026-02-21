
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">
         <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainLayout;
