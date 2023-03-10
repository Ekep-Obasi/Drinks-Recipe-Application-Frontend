import React from "react";
import { register } from "../../api/auth";
import { StyledWrapper, StyledForm } from "./Login.styles";
import { GiDrinkMe } from "react-icons/gi";
import { Link } from "react-router-dom";

const Login = () => {
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
      <h1>Good To See You Again !</h1>
      <StyledForm onSubmit={handleSubmit}>
        <div className="input-control">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="emailAddress"
            placeholder="e.g: johndoe@gmail.com"
          />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="e.g: ilovedrinksdb.com@123"
            required
          />
          <div className="error"></div>
        </div>
        <button type="submit">Sign In</button>
        <div className="eventualities">
          <Link to="/register">Don't you have an account ?</Link>
          <Link to="">Forgotten Password?</Link>
        </div>
      </StyledForm>
    </StyledWrapper>
  );
};

export default Login;
