import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  let [projects, setProjects] = useState([]);
  let token = "1111-2222-3333-4444";
  useEffect(() => {
      axios
      .get("https://private-052d6-testapi4528.apiary-mock.com/info", { headers: {"Authorization" : `Bearer ${token}`}})
      .then((res) => {
          setProjects(res.data);
      });
  },[])
    
      console.log(projects);
  
  return (
    <div>
      <Table striped bordered hover variant="dark" id="orders">
        <thead style={{ fontWeight: "300" }}>
          <tr>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Score</th>
            <th>Duration In Days</th>
            <th>Bugs Counted</th>
            <th>Made Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((element, index) => {
            return <ProjectRow project={element} key={index}/>;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ProjectTable;
