import React from "react";

const TableCell = (props) => {
  return (
    <td
      key={props.cellIndex}
      className={props.color}
      onClick={() =>
        props.store.dispatch(props.colorize(props.rowIndex, props.cellIndex))
      }
    ></td>
  );
};

export default TableCell;
