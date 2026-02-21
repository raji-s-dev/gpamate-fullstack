import React from "react";

type Column = {
  header: string;
  accessor: string;
};

type TableProps = {
  columns: Column[];
  data: Record<string, any>[];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="bg-[#F5FAFF] rounded-[10px] px-6 md:px-6 pt-6 w-full overflow-x-auto">
      <table className="w-full border-collapse">
        {/* TABLE HEADER */}
        <thead>
          <tr className="border-y border-gray-300">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="text-left text-md font-medium text-gray-500 px-6 py-4 font-poppins"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b last:border-b-0 border-gray-100"
            >
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="px-6 py-5 text-md text-black font-poppins "
                >
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
