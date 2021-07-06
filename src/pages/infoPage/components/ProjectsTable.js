import React, { useEffect, useState } from "react";
import Table from './Table.js';
import ProjectReq from '../../../API/Projects.api.js';
import columns from './ProjectColumns.js';
import { getToken } from "../../../utils/tokenStorage.js";

function ProjectTable() {
  let [projects, setProjects] = useState([]);
  let token = getToken();

  useEffect(() => {
      ProjectReq(token)
      .then((res) => {
          setProjects(res.data);
      });
  },[token])
  
  
  return (
    <div>
           <Table columns={columns} data={projects} />
    </div>
  );
}

export default ProjectTable;
