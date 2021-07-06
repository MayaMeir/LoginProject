import { useTable, useSortBy } from "react-table";
import BTable from "react-bootstrap/Table";

function getStyleByScore(score) {
  if (score >= 90) {
    return "green";
  }
  if (score <= 70) {
    return "red";
  }
  return "white";
}

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <BTable {...getTableProps()} style={{ width: "70%", margin: "auto" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          let backgroundColor = getStyleByScore(row.original.score);
          return (
            <tr {...row.getRowProps()} style={{ backgroundColor }}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
}

export default Table;
