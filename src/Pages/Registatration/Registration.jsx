import React from "react";
import { StyledWrapper, StyledForm } from "./Registration.styles";

const Registration = () => {
  return (
    <StyledWrapper>
      <StyledForm>
        <h1> Create an Account</h1>
        <div className="input-control">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name*"
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name*"
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <input type="email" id="email" name="email" placeholder="Email*" />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phoneNumber"
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="confirm password*"
          />
          <div className="error"></div>
        </div>
        <button type="submit">Submit</button>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Registration;
