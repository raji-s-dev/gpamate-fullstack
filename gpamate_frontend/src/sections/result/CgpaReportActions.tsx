import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RefObject } from "react";
import { useEffect, useState } from "react";


interface Props {
  reportRef: RefObject<HTMLDivElement>;
  highlight?: boolean; // 👈 NEW
}

const CgpaReportActions: React.FC<Props> = ({ reportRef, highlight }) => {
  const navigate = useNavigate();
  const [pulse, setPulse] = useState(false);

    useEffect(() => {
    if (highlight) {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 1200);
      return () => clearTimeout(t);
    }
  }, [highlight]);


const downloadPDF = async () => {
  if (!reportRef.current) return;

  const element = reportRef.current;

  const canvas = await html2canvas(element, {
    scale: 3, // higher scale = better chart quality
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  // Fit canvas to PDF page
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = imgWidth / imgHeight;

  let pdfImgWidth = pdfWidth;
  let pdfImgHeight = pdfWidth / ratio;

  if (pdfImgHeight > pdfHeight) {
    pdfImgHeight = pdfHeight;
    pdfImgWidth = pdfHeight * ratio;
  }

  const xOffset = (pdfWidth - pdfImgWidth) / 2;
  const yOffset = (pdfHeight - pdfImgHeight) / 2;

  pdf.addImage(imgData, "PNG", xOffset, yOffset, pdfImgWidth, pdfImgHeight);
  pdf.save("GPAMATE_Report.pdf");
};


  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-full max-w-[740px] text-center px-4">

        <h2 className="text-xl font-medium font-poppins text-zinc-800">
          Save or Share Your CGPA Report
        </h2>

        {/* Download Button */}
<button
  onClick={downloadPDF}
  className={`mt-16 mx-auto flex items-center justify-center gap-3
    w-72 h-14 bg-green-500 rounded-full
    text-white text-base font-semibold font-inter
    shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
    hover:brightness-110 transition
    ${pulse ? "animate-soft-pulse" : ""}
  `}
>
  Download Full Report
  <FileText size={18} />
</button>

        <p className="mt-14   text-slate-600  text-base font-inter leading-6  px-6 text-justify">
          Download your complete CGPA report as a polished PDF, including your
          semester-wise GPA table, final CGPA, key academic statistics, and a
          performance trend graph.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-24 mx-auto w-64 h-14 bg-blue-500 rounded-full
                     text-white text-xl font-poppins
                     flex items-center justify-center gap-3
                     hover:brightness-110 transition"
        >
          Back to Home
          <ArrowLeft size={20} />
        </button>
      </div>
    </div>
  );
};

export default CgpaReportActions;
