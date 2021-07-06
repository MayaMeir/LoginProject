import React, { useContext } from "react";
import { DataContext } from "../../context/ContextWrapper";


function InfoTable() {

    const {value, setValue} = useContext(DataContext);
console.log(value);
  return (
    <div>
        <p>test</p>
    </div>
  );
}

export default InfoTable;
