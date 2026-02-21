import { useLocation, Navigate } from "react-router-dom";

/* =====================
   Types
===================== */
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

/* =====================
   Component
===================== */
const Demo = () => {
  const location = useLocation();
  const state = location.state as ResultState | undefined;

  if (!state) {
    return <Navigate to="/" replace />;
  }

  const { student, semesters, cgpa } = state;

  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Student Info */}
      {student && (
        <div className="mb-6 p-4 bg-gray-50 border rounded space-y-1 text-center">
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
      )}

      <h1 className="text-2xl font-bold mb-6 text-center">Result</h1>

      {/* Semester-wise GPA */}
      <div className="space-y-3">
        {semesters.map((s) => (
          <div
            key={s.semester}
            className="flex justify-between border p-4 rounded"
          >
            <span>Semester {s.semester}</span>
            <span className="font-semibold">{s.gpa}</span>
          </div>
        ))}
      </div>

      {/* CGPA */}
      <div className="mt-8 p-4 bg-blue-50 border rounded text-center">
        <p className="text-sm text-gray-600">Final CGPA</p>
        <p className="text-3xl font-bold text-blue-600">{cgpa}</p>
      </div>

      {/* Debug */}
      <pre className="mt-6 text-xs bg-gray-100 p-4 rounded">
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
};

export default Demo;
