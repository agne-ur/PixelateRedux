import React from "react";
import TableCell from "./TableCell";

const TableRow = (props) => {
  return (
    <tr key={props.rowIndex}>
      {props.row.map((color, cellIndex) => (
        <TableCell
          color={color}
          rowIndex={props.rowIndex}
          store={props.store}
          colorize={colorize}
          cellIndex={cellIndex}
        />
      ))}
    </tr>
  );
};

export default TableRow;
