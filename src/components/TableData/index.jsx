import React from "react";
import "./style.css";

const TableData = ({ dataToDisplay, fundingData }) => {
  return (
    <tr className="table-row">
      {dataToDisplay.map((data) => {
        return (
          <td className="table-data" key={Math.random()}>
            {fundingData[data.key]}
          </td>
        );
      })}
    </tr>
  );
};

export default TableData;
