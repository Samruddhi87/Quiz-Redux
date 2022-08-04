import React from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";

import { useMemo } from "react";
import { Table } from "@material-ui/core";
const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => MOCK_DATA, []);
  const tabaleInstance = useTable({
    columns: COLUMNS,
    data: MOCK_DATA,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tabaleInstance;
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderGroupProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>;
        })}
      </thead>
      <tbody {...getTableBodyProps()}>

        {rows.map(row=>{
            prepareRow(row)
            return (<tr {...row.getRowProps()}>

                {row.cells.map((cell)=>{
                    return<td {...cell.getCellProps()}>
                        {cell.render("Cell")} </td>
                })}
            </tr>)
        })}
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicTable;
