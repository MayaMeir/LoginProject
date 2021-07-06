import axios from 'axios';

function LoginReq(data){

    return(
        axios
      .post(
        "https://private-052d6-testapi4528.apiary-mock.com/authenticate",
        data
      )
    )

}

export default LoginReq;