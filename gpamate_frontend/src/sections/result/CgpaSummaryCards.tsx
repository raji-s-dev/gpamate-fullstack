interface SemesterResult {
  semester: number;
  gpa: number;
}

interface Props {
  semesters: SemesterResult[];
  cgpa: number;
}

const CgpaSummaryCards: React.FC<Props> = ({ semesters, cgpa }) => {
  if (!semesters || semesters.length === 0) return null;

  const semesterCount = semesters.length;

  const bestSemester = semesters.reduce((best, curr) =>
    curr.gpa > best.gpa ? curr : best
  );

  const lowestSemester = semesters.reduce((low, curr) =>
    curr.gpa < low.gpa ? curr : low
  );

  let statusText = "";
  if (semesterCount === 1) {
    statusText =
      "Baseline established — add more semesters to track progress";
  } else {
const firstGpa = semesters[0].gpa;
const diff = cgpa - firstGpa;

statusText =
  diff >= 0
    ? `+${diff.toFixed(2)} overall improvement`
    : `${diff.toFixed(2)} overall decline`;
  }

  return (
    <div className="w-full flex justify-center mt-10 p-4">
  <div className="w-full max-w-[1140px] space-y-4">

    {/* Final CGPA */}
    <div className="bg-blue-500 rounded-[10px] py-6 sm:py-8 flex flex-col items-center text-white">
      <p className="text-lg sm:text-xl font-medium font-poppins">Final CGPA</p>
      <p className="mt-2 text-3xl sm:text-4xl font-black font-poppins">
        {cgpa.toFixed(2)}
      </p>
    </div>

    {/* Bottom Cards */}
    <div className="grid grid-cols-3 gap-2 sm:gap-4">

      {/* Best GPA */}
<div className="bg-green-500 rounded-[10px] py-4 sm:py-6 flex flex-col text-white text-sm sm:text-base">
  {/* Title stays at top */}
  <p className="text-base sm:text-xl font-medium font-poppins text-center">
    Best GPA
  </p>

  {/* Inner content centered */}
  <div className="flex flex-col justify-center items-center mt-2 flex-1">
    <p className="font-poppins text-center text-lg sm:text-xl font-black">
      {bestSemester.gpa.toFixed(2)}
    </p>
    <span className="text-xs sm:text-sm opacity-90">
      Semester {bestSemester.semester}
    </span>
  </div>
</div>

{/* Lowest GPA */}
<div className="bg-amber-300 rounded-[10px] py-4 sm:py-6 flex flex-col text-white text-sm sm:text-base">
  <p className="text-base sm:text-xl font-medium font-poppins text-center">
    Lowest GPA
  </p>
  <div className="flex flex-col justify-center items-center mt-2 flex-1">
    <p className="font-poppins text-center text-lg sm:text-xl font-black">
      {lowestSemester.gpa.toFixed(2)}
    </p>
    <span className="text-xs sm:text-sm opacity-90">
      Semester {lowestSemester.semester}
    </span>
  </div>
</div>


      {/* Overall Progress */}
      <div className="bg-fuchsia-700 rounded-[10px] py-4 sm:py-6 flex flex-col items-center text-white text-sm sm:text-base">
        <p className="text-base sm:text-xl font-medium font-poppins text-center">
  Overall <span className="block sm:inline">Progress</span>
</p>
        <p className="mt-2 font-poppins text-center px-2 sm:px-4 text-xs">
          {statusText}
        </p>
      </div>

    </div>
  </div>
</div>

  );
};

export default CgpaSummaryCards;
