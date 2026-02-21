import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

type SelectorProps<T> = {
  label: string;
  options: T[];
  display?: (v: T) => string;
};

const Selector = <T,>({ label, options, display }: SelectorProps<T>) => {
  const [value, setValue] = useState<T | null>(null);

  return (
    <div className="w-64">
      <Listbox value={value} onChange={setValue}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full h-10 cursor-pointer rounded-[10px] bg-white border border-black px-4 pr-10 text-left text-md focus:outline-none">
            <span className="block truncate">
              {value
                ? display?.(value) ?? String(value)
                : label}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronUpDownIcon className="h-4 w-4 text-gray-500" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-2 max-h-52 w-full overflow-auto rounded-[10px] bg-white border border-black shadow-md focus:outline-none">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active }) =>
                  `cursor-pointer px-4 py-2 text-sm ${
                    active ? "bg-gray-100" : ""
                  }`
                }
              >
                {display?.(option) ?? String(option)}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

const HeroButton: React.FC = () => {
  const [selected, setSelected] = useState<"standard" | "advanced">("standard");

const departmentOptions = [
  "Aeronautical Engineering",
  "Aerospace Engineering",
  "Artificial Intelligence & Data Science",
  "Automobile Engineering",
  "Civil Engineering",
  "Computer Science & Engineering",
  "Computer Science & Engineering (Cyber Security)",
  "Computer Science with AI & ML",
  "Electronics & Communication",
  "Engineering",
  "Electrical & Electronics Engineering",
  "Fashion Technology",
  "Information Technology",
  "Mechanical Engineering",
  "Mechatronics Engineering",
  "Master of Computer Applications",
  "Science and Humanities",
];


const semesterRangeOptions = [1, 2, 3, 4, 5, 6, 7, 8];


  return (
    <div className="w-full    ">
      {/* STRIP BUTTONS */}
<div className="relative flex w-full mx-auto h-20 bg-[#1E90FF] rounded-sm">
  {/* Standard Wrapper */}
  <div className="flex-1 ">
    <button
      onClick={() => setSelected("standard")}
      className={`
        w-full h-full flex items-center justify-center
        font-poppins font-medium text-white
        transition-all duration-300
        ${selected === "standard"
          ? "bg-[#1E90FF] "
          : "bg-[#0F172A]"
        }
      `}
    >
      Standard CGPA Calculation
    </button>
  </div>

  {/* Advanced Wrapper */}
  <div className="flex-1 ">
    <button
      onClick={() => setSelected("advanced")}
      className={`
        w-full h-full flex items-center justify-center
        font-poppins font-medium text-white
        transition-all duration-300
        ${selected === "advanced"
          ? "bg-[#1E90FF] "
          : "bg-[#0F172A]"
        }
      `}
    >
      Advanced CGPA Calculation
    </button>
  </div>
</div>





      {/* DESCRIPTION */}
      <div className="mt-10 max-w-3xl mx-auto text-center text-lg text-slate-600 leading-8
      
          max-md:text-base
    max-md:font-inter
    max-md:leading-6
    max-md:px-6
    max-md:text-justify
    ">
        {selected === "standard" && (
          <p>
For students with regular semester results and no revaluation or arrears. Upload one result file per semester, and GPAmate will instantly extract your grades, calculate the GPA for each semester, and display your overall CGPA within seconds.
          </p>
        )}

        {selected === "advanced" && (
          <p>
          for students with revaluation or arrear results, where a semester may have multiple result files. Upload all your PDFs or images, including older results. GPAmate’s AI automatically detects each semester, identifies the latest valid grades, and calculates your final CGPA accurately.
          </p>
        )}
      </div>

      {/* SELECTORS */}
{/* SELECTORS (only for Advanced CGPA) */}
{selected === "advanced" && (
  <div
    className="
      mt-10
      flex flex-col items-center gap-4
      md:flex-row md:justify-center md:gap-6
    "
  >
    <Selector
      label="Select Department"
      options={departmentOptions}
    />

    <Selector
      label="Completed Semesters"
      options={semesterRangeOptions}
      display={(n) => `Up to Semester ${n}`}
    />
  </div>
)}

    </div>
  );
};

export default HeroButton;
