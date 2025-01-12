import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";
import "./style.css";

const Table = ({ dataToDisplay, fundings }) => {
  return (
    <table className="table">
      <TableHeader dataToDisplay={dataToDisplay} />
      <TableBody fundings={fundings} dataToDisplay={dataToDisplay} />
    </table>
  );
};

export default Table;
