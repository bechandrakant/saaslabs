import React from "react";
import "./style.css";

const TableHeader = ({ dataToDisplay }) => {
  return (
    <thead className="table-head">
      <tr className="table-row">
        {dataToDisplay &&
          dataToDisplay.map((data) => {
            return (
              <th className="table-data" key={JSON.stringify(data)}>
                {data.label}
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default TableHeader;
