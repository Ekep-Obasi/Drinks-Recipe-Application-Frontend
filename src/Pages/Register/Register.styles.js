import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("");
  background-position: center;
  background-size: cover;

  h2 {
    font-family: "Arvo", serif;
  }
`;

const StyledForm = styled.form`
  width: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 25px;
  margin: 25px 0;
  border-radius: 8px;

  h3 {
    margin: 0;
    font-family: "Inter", sans-serif;
    text-align: center;
  }

  label {
    font: 200;
    font-family: "Arvo", serif;
    font-size: 12px;
  }

  input {
    width: 100%;
    display: block;
    border: 1px solid black;
    padding: 0.15rem;
    border-radius: 0;
    margin: 0 auto;
    font-size: 10px;

    &:focus {
      outline: 1px solid rgb(255, 184, 0);
    }

    &::placeholder {
      font-size: 10px;
      font-weight: 200;
      font-family: "Inter", sans-serif;
    }
  }

  button {
    width: 80%;
    border: none;
    margin: 0 auto;
    border-radius: 8px;
    padding: 0.35rem;
    background: rgb(255, 184, 0);
    background: linear-gradient(
      90deg,
      rgba(255, 184, 0, 0.9612219887955182) 20%,
      rgba(255, 136, 0, 1) 80%
    );

    &:hover {
      cursor: pointer;
    }
  }

  .eventualities {
    display: flex;
    justify-content: space-between;

    a {
      font-size: 12px;
    }
  }
`;

export { StyledForm, StyledWrapper };
