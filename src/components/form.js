import React from "react";
import { appendErrors, useForm } from "react-hook-form";

const Form = (props) => {
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = (data) => {
    const users = props.users;
    props.setUser([...users, data]);
  };
  const validateAge = (age)=>{
    if(age<=0){
      return false
    }
    if(age >150){
      return false
    }
    return true
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <label htmlFor="firstName">first name : </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            ref={register({ required: true })}
          />
          {errors.firstName && <p>First name is required!</p>}
        </div>
        <div className="row">
          <label htmlFor="lastName">last name : </label>
          <input type="text" name="lastName" id="lastName" ref={register({required:true})} />
          {errors.lastName && <p>Last name is required!</p>}
        </div>
        <div className="row">
          <label htmlFor="age">age : </label>
          <input type="number" name="age" id="age" ref={register({required:true,validate:validateAge})} />
          {errors.age && errors.age.type === "required" && <p>Age is required!</p>}
          {errors.age && errors.age.type !== "required" && <p>Age must be between 1-150</p>}
        </div>
        <div className="row">
          <label htmlFor="gender">Gender : </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            ref={register}
          />
          <label htmlFor="male">male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            ref={register}
          />
          <label htmlFor="female">female</label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            ref={register}
          />
          <label htmlFor="other">other</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
