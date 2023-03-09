import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 20px;

  input {
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  button:hover {
    cursor: pointer;
  }
`;

export { StyledForm, StyledWrapper };
