import Table from "../../components/Tablecomponent";

/* =====================
   Types
===================== */
interface SemesterResult {
  semester: number;
  gpa: number;
}

interface StudentInfo {
  name: string | null;
  regNo: string | null;
  program: string | null;
}

interface Props {
  semesters?: SemesterResult[];
  student: StudentInfo | null;
  onDownloadClick?: () => void; // 👈 NEW
}

/* =====================
   Table Columns
===================== */
const columns = [
  { header: "Semester", accessor: "semester" },
  { header: "GPA", accessor: "gpa" },
  { header: "Status", accessor: "status" },
];

/* =====================
   Component
===================== */
const SemesterGpaTable: React.FC<Props> = ({
  semesters,
  student,
  onDownloadClick,
}) => {
  const data =
    semesters?.map((s) => ({
      semester: `Semester ${s.semester}`,
      gpa: s.gpa.toFixed(2),
      status:
        s.gpa >= 8
          ? "Excellent"
          : s.gpa >= 6
          ? "Good"
          : "Needs Improvement",
    })) ?? [];

  return (
    <div className="w-full flex justify-center mt-12">
      <div className="w-[1140px] rounded-[10px]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold font-poppins uppercase text-zinc-800">
            CGPA Dashboard
          </h1>

<p
  onClick={onDownloadClick}
  className="mt-4 text-xs font-inter text-black cursor-pointer hover:underline"
>
  ↓ Download your result as PDF
</p>
        </div>

{student && (
  <div className="w-full max-w-[1140px] text-center mt-6">
    <div className="flex flex-col items-center gap-2 text-base font-inter text-zinc-700 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
      
      {student.name && (
        <p>
          <span className="font-semibold">Student Name:</span> {student.name}
        </p>
      )}

      {student.regNo && (
        <p>
          <span className="font-semibold">Register No:</span> {student.regNo}
        </p>
      )}

      {student.program && (
        <p>
          <span className="font-semibold">Program:</span> {student.program}
        </p>
      )}

    </div>
  </div>
)}



    

        

        {/* Table Section */}
        <div className="mt-10 bg-[#F5FAFF] rounded-[10px] px-4 sm:px-10 md:px-20 py-12">
          {data.length > 0 ? (
            <Table columns={columns} data={data} />
          ) : (
            <p className="text-center text-gray-500">
              No semester data available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SemesterGpaTable;
