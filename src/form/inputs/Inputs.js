import React from "react";
import { Form, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";

function Inputs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && (
          <span style={{ color: "red" }}>Email Must Be Valid!</span>
        )}
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            min: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
          })}
        />
        {errors.Password && (
          <span style={{ color: "red" }}>Passowrd Must Be Valid!</span>
        )}
      </div>

      <Button type="submit" style={{float:"right"}}>Login!</Button>
    </Form>
  );
}

export default Inputs;

