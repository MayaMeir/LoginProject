import axios from 'axios';

function ProjectReq(data){

    return(
        axios
      .get("https://private-052d6-testapi4528.apiary-mock.com/info", { headers: {"Authorization" : `Bearer ${data}`}})
    )

}
export default ProjectReq;