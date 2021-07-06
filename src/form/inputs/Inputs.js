import React, { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../Form.css";
import { Redirect, useHistory } from "react-router-dom";
import { DataContext } from "../../context/ContextWrapper";

function Inputs() {
  const [MoveToInfo, setMoveToInfo] = useState(false);
  const {value, setValue} = useContext(DataContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   console.log(errors);
  const onSubmit = (data) =>
    axios
      .post(
        "https://private-052d6-testapi4528.apiary-mock.com/authenticate",
        data
      )
      .then((response) => setValue(response.data[0]))
      .then(history.push('/info'));


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
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
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

export default Inputs;
