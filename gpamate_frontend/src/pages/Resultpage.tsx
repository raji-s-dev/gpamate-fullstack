import { useRef,useState } from "react";
import SemesterGpaTable from "../sections/result/Table";
import CgpaSummaryCards from "../sections/result/CgpaSummaryCards";
import Chart from "../sections/result/Chart";
import CgpaReportActions from "../sections/result/CgpaReportActions";
import { useLocation, Navigate } from "react-router-dom";


interface StudentInfo {
  name: string | null;
  regNo: string | null;
  program: string | null;
}

interface SemesterResult {
  semester: number;
  gpa: number;
}

interface ResultState {
  student: StudentInfo | null;
  semesters: SemesterResult[];
  cgpa: number;
}

const Resultpage: React.FC = () => {
  const location = useLocation();
  const state = location.state as ResultState | undefined;

  const reportRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null); // 👈 NEW
  const [highlightDownload, setHighlightDownload] = useState(false);

  if (!state) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* 🔽 THIS IS WHAT WILL BECOME PDF */}
      <div ref={reportRef} className="bg-white">
                {/* ✅ STUDENT HEADER */}

<SemesterGpaTable
  semesters={state.semesters}
  student={state.student}
  onDownloadClick={() => {
    downloadRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setHighlightDownload(true);
    setTimeout(() => setHighlightDownload(false), 1500);
  }}
/>

        <CgpaSummaryCards
          semesters={state.semesters}
          cgpa={state.cgpa}
        />

        <Chart semesters={state.semesters} />
      </div>

      {/* Actions */}
            <div ref={downloadRef}>
        <CgpaReportActions
  reportRef={reportRef}
  highlight={highlightDownload}
/>
      </div>
    </>
  );
};

export default Resultpage;
