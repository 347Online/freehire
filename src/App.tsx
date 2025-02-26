// import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

interface SomeForm {
  example: string;
  exampleRequired: string;
}

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SomeForm>();
  const onSubmit: SubmitHandler<SomeForm> = (x) => console.log(x);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
};

export default App;
