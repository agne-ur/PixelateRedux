import React from "react";
import TableRow from './TableRow'

const Table = (props) => {
  return (
    <table>
      <tbody>
        {props.grid.map((row, rowIndex) => (
            <TableRow rowIndex={rowIndex} colorize={props.colorize} store={props.store} row={row}/>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
