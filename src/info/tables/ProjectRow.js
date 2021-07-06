import React from 'react';

function ProjectRow(props){
    console.log('ín project row');
    console.log(props);
    return <>
    <tr>
      <td>{props.project.id}</td>
      <td>{props.project.name}</td>
      <td>{props.project.score}</td>
      <td>{props.project.durationInDays}</td>
      <td>{props.project.bugsCount}</td>
      <td>{props.project.madeDeadline}</td>
    </tr>
    </>
}

export default ProjectRow;