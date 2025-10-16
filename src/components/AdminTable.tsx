import React from "react";

type AdminTableProps = {
  headers: { name: string; value: string }[];
  rows: Record<string, unknown>[];
};

const AdminTable = ({ headers, rows }: AdminTableProps) => {
  console.log("headers, rows :", headers, rows);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers?.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className={`px-6 py-3 ${
                    idx === 0
                      ? "rounded-s-lg"
                      : idx === headers.length - 1
                      ? "rounded-e-lg"
                      : ""
                  }`}
                >
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((row, rowIdx) => (
              <tr
                key={String((row as { _id?: string | number })?._id ?? rowIdx)}
              >
                {headers.map((header, colIdx) => (
                  <>
                    <td
                      key={header.value}
                      className={`px-6 py-4 ${
                        colIdx === 0
                          ? "font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          : ""
                      }`}
                      scope={colIdx === 0 ? "row" : undefined}
                    >
                      {String(row[header.value])}
                    </td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
