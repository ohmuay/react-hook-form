import React from "react";
import { appendErrors, useForm } from "react-hook-form";
import validator from 'validator'

const Form = (props) => {
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = (data) => {
    const users = props.users;
    const addedUsers = [...users, data]
    props.setUser(addedUsers);
    localStorage.setItem('users',JSON.stringify(addedUsers))
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
          {errors.firstName && <p className="error-msg">First name is required!</p>}
        </div>
        <div className="row">
          <label htmlFor="lastName">last name : </label>
          <input type="text" name="lastName" id="lastName" ref={register({required:true})} />
          {errors.lastName && <p className="error-msg">Last name is required!</p>}
        </div>
        <div className="row">
          <label htmlFor="email">Email : </label>
          <input type="text" name="email" id="email" ref={register({required:true,validate:validator.isEmail})} />
          {errors.email && errors.email.type === "required" && <p className="error-msg">Email is required!</p>}
          {errors.email && errors.email.type !== "required" && <p className="error-msg">please input valid email</p>}
        </div>
        <div className="row">
          <label htmlFor="phone">Phone Number : </label>
          <input type="text" name="phone" id="phone" ref={register({required:true})} />
          {errors.phone && <p className="error-msg">Phone Number is required!</p>}
        </div>
        <div className="row">
          <label htmlFor="age">age : </label>
          <input type="number" name="age" id="age" ref={register({required:true,validate:validateAge})} />
          {errors.age && errors.age.type === "required" && <p className="error-msg">Age is required!</p>}
          {errors.age && errors.age.type !== "required" && <p className="error-msg">Age must be between 1-150</p>}
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
