import logo from "../assets/highlights/logo.png";
import step1 from "../assets/howitworks/step1.png";
import step2 from "../assets/howitworks/step2.png";
import step3 from "../assets/howitworks/step3.png";

const HowItWorks: React.FC = () => {
  return (
    <div className="w-full bg-neutral-50">
      
      {/* ================= MOBILE / TABLET VIEW ================= */}
      <div className="block lg:hidden py-16">
        <div className="max-w-md mx-auto px-4 text-center">
          
          {/* Section Title */}
 
              <div className="w-full flex items-center justify-center gap-4 mb-12">
            <h2 className="text-zinc-800 text-xl font-semibold uppercase font-poppins leading-6">
              How
            </h2>
            <img src={logo} alt="highlight" className="h-10 object-contain" />
            <h2 className="text-zinc-800 text-xl font-semibold uppercase font-poppins leading-6">
              Works
            </h2>
          </div>


          {/* STEP 1 */}
          <img src={step1} alt="Upload Results" className="mx-auto mb-6 w-72 h-auto" />

          <h3 className="text-zinc-800 text-xl font-medium font-poppins mb-3">
            Upload Your Results
          </h3>

          <p className="text-slate-600 text-base font-inter leading-6 mb-16 px-6 text-justify">
            Simply Drag and drop or upload your semester result PDFs or images. You can upload multiple files at once. Our smart system automatically detects the semester for each file and organizes them correctly.
          </p>

          {/* STEP 2 */}
          <img src={step2} alt="AI Work" className="mx-auto mb-6 w-72 h-auto" />

          <h3 className="text-zinc-800 text-xl font-medium font-poppins mb-3">
            Let AI Do the Work
          </h3>

          <p className="text-slate-600 text-base font-inter leading-6 mb-16 px-6 text-justify">
            Our advanced AI text-recognition engine reads your grades, identifies subject codes,
            and calculates GPA for each semester with up to 99% accuracy.
          </p>

          {/* STEP 3 */}
          <img src={step3} alt="CGPA Report" className="mx-auto mb-6 w-64 h-auto" />

          <h3 className="text-zinc-800 text-xl font-medium font-poppins mb-3">
            Get Instant CGPA Report
          </h3>

          <p className="text-slate-600 text-base font-inter leading-6 px-6 text-justify">
 Within seconds, view a detailed semester-wise GPA table, your overall CGPA, and a clear performance trend graph, all presented in a clean and visual format.
          </p>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden lg:flex justify-center py-20">
        <div className="w-full max-w-6xl px-10 mx-auto">
          
          {/* Section Title */}
          <div className="w-full flex items-center justify-center gap-4 mb-20">
            <h2 className="text-zinc-800 text-3xl font-semibold uppercase font-poppins">
              How
            </h2>
            <img src={logo} alt="highlight" className="h-16 object-contain" />
            <h2 className="text-zinc-800 text-3xl font-semibold uppercase font-poppins">
              Works
            </h2>
          </div>

          {/* STEP 1 */}
          <div className="grid grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h3 className="text-zinc-800 text-2xl font-semibold font-poppins mb-4">
                Upload Your Results
              </h3>
<p className="text-slate-600 text-lg font-inter leading-8">
  Simply drag and drop or upload your semester result PDFs or images. You can upload multiple files at once. Our smart system automatically detects the semester for each file and organizes them correctly.
</p>
            </div>

            <div className="flex justify-center">
              <img src={step1} alt="Upload Results" className="w-[350px] h-auto" />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid grid-cols-2 gap-20 items-center mb-32">
            <div className="flex justify-center">
              <img src={step2} alt="AI Work" className="w-[350px] h-auto" />
            </div>

            <div>
              <h3 className="text-zinc-800 text-2xl font-semibold font-poppins mb-4">
                Let AI Do the Work
              </h3>
              <p className="text-slate-600 text-lg font-inter leading-8">
                Our advanced AI text-recognition engine reads your grades,
                identifies subject codes, and calculates GPA for each semester
                with up to 99% accuracy.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-zinc-800 text-2xl font-semibold font-poppins mb-4">
                Get Instant CGPA Report
              </h3>
<p className="text-slate-600 text-lg font-inter leading-8">
  Within seconds, view a detailed semester-wise GPA table, your overall CGPA, and a clear performance trend graph, all presented in a clean and visual format.
</p>
            </div>

            <div className="flex justify-center">
              <img src={step3} alt="CGPA Report" className="w-[350px] h-auto" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
