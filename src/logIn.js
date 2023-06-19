import React, { Component } from "react";
import Input from "./common/input-component";
import Button from "./common/button-component";
import { Navigate } from "react-router-dom";

import {Formik, Form, Field} from "formik"

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    user: false,
    error: ""
  }
  submitHandler=(values)=>{
    console.log(values.email);
    if (values.email === "tmahmud200@gmail.com" && values.password === "12345678") {
      this.setState({...this.state, user: true});
    } else {
      this.setState({...this.state, error: "User not found!"});
    } 
  }

  render() {
    const { email, password, error, user } = this.state;
    return (
      <div>

      {user && (
        <Navigate to="/counter" replace={true} />
      )}

      <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={(values,e)=>{
        this.submitHandler(values);
        e.preventDefault();
      }}
      >
        {(Formik)=> (
          <Form className="container">
          <div className="mb-3">
            
            <Field 
            type="email" 
            name="email" 
            />
          </div>
          <div className="mb-3">
            <Field 
            type="password" 
            name="password"              />
          </div>
          
          {error && <p className="text-danger mt-1">{error}</p>}
  
          <Button
          type="submit" 
          className="btn btn-primary"
          text="Log In"
          />
        </Form>
        )}
      </Formik>

       
      </div>
    
     
    );
  }
}

export default LogIn;
