import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import Table from "./Table.js";
import columns from './InfoColumns.js';

function InfoTable() {
  const { value } = useAuthContext();
  
  if (!value) {
    return (
      <div>
        <h4>Loading</h4>
      </div>
    );
  }
  return (
    <div>
      <Table columns={columns} data={[value.personalDetails]} />
    </div>
  );
}

export default InfoTable;
