import GPALineChart from "../../components/Gpachart";

/* =====================
   Types
===================== */
interface SemesterResult {
  semester: number;
  gpa: number;
}

interface Props {
  semesters: SemesterResult[];
}

/* =====================
   Component
===================== */
const Chart: React.FC<Props> = ({ semesters }) => {
  if (!semesters || semesters.length === 0) {
    return null;
  }

  // Sort semesters just in case
  const sorted = [...semesters].sort(
    (a, b) => a.semester - b.semester
  );

  const labels = sorted.map(
    (s) => `Semester ${s.semester}`
  );

  const values = sorted.map(
    (s) => Number(s.gpa.toFixed(2))
  );

return (
  <div className="w-full flex justify-center mt-16">
    {/* Centered Column */}
    <div className="w-full max-w-[1140px] flex flex-col items-center gap-6">

      {/* Title */}
      <h2 className="text-xl font-medium font-poppins text-zinc-800 text-center">
       Performance Trend Graph
      </h2>

      {/* Chart Card */}
      <div className="w-full bg-white rounded-[10px] p-8">
        <GPALineChart
          labels={labels}
          values={values}
          title="GPA Progress"
        />
      </div>

    </div>
  </div>
);

};

export default Chart;
