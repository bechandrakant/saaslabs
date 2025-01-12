import React from "react";
import TableData from "../TableData";

const TableBody = ({ dataToDisplay, fundings }) => {
  return (
    <tbody>
      {fundings &&
        fundings.map((funding) => {
          return (
            <TableData
              fundingData={funding}
              key={JSON.stringify(funding)}
              dataToDisplay={dataToDisplay}
            />
          );
        })}
    </tbody>
  );
};

export default TableBody;
