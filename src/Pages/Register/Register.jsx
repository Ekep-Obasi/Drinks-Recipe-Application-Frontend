import React from "react";
import { register } from "../../api/auth";
import { StyledWrapper, StyledForm } from "./Register.styles";
import { GiDrinkMe } from "react-icons/gi";

const Register = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const user = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      emailAddress: target.emailAddress.value,
      phone: target.phoneNumber.value,
      password: target.password.value,
    };

    await register(user);
  }

  return (
    <StyledWrapper>
      <h2>
        <GiDrinkMe size={52} color="orange" /> Drinksdb
      </h2>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label htmlFor="firstName">Your First Name</label>
        <div className="input-control">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="e.g: Jennifer"
            required
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label htmlFor="lastName">Your Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="e.g: Wiltson"
            required
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="emailAddress"
            placeholder="e.g: jenniferwiltson@gmail.com"
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label htmlFor="phoneNumber">Your Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="e.g: xx-xx-xx-xx"
            required
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="e.g: ilovedrinksdb.com@123"
            required
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label htmlFor="passwordConfirmation">Confirm password</label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="confirm password*"
            required
          />
          <div className="error"></div>
        </div>
        <button type="submit">Sign Up</button>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Register;
