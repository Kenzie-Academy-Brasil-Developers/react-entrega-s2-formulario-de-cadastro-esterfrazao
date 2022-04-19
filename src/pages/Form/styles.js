import styled from "styled-components";

export const FormRegister = styled.form`
  width: 300px;
  height: 500px;

  background: #ffffff9a;

  border-radius: 20px;
  box-shadow: 2px 4px 41px 1px #fd26ebbb;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  input {
    height: 40px;

    padding: 0 10px;

    border-radius: 10px;

    border: 1px solid #fd26eb;

    background-color: #ffffff9a;
  }

  input::placeholder {
    color: #000;
  }

  input:focus {
    outline: transparent;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Error = styled.span`
  font-weight: bold;
  color: #792379;
  font-style: italic;
`;
