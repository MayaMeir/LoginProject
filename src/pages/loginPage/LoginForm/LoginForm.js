import React, { } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../Form.css";
import { useHistory } from "react-router-dom";
import LoginReq from "../../../API/Authentication.api";
import { useAuthContext } from "../../../context/AuthContext.js";
import { setToken } from "../../../utils/tokenStorage";

function LoginForm() {
  const {value, setValue} = useAuthContext();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    LoginReq(data)
      .then((response) => {
        setValue(response.data[0]);
        setToken(response.data[0].token);
        history.push('/info');
      })


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          className="inputs"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && (
          <span style={{ color: "red", fontSize: "10px" }}>
            Email Must Be Valid!
          </span>
        )}
      </div>
      <div className="form-group">
        <input
          className="inputs"
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            min: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i
          })}
        />
        {errors.Password && (
          <span style={{ color: "red", fontSize: "10px" }}>
            Passowrd Must Be Valid!
          </span>
        )}
      </div>
      <Button type="submit" style={{ float: "right" }}>
        Login!
      </Button>
    </Form>
  );
}

export default LoginForm;
