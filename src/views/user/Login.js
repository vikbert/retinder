import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../../stores/userWidget";
import { uuid3 } from "../../utils/UUID";

const CenteredLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 70vh;
`;
const Button = styled.button`
  width: 100%;
  box-shadow: 0px 1px 0px 1px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 6px;
  border: 1px solid #ffbb00;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  :hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }
  :active {
    position: relative;
    top: 1px;
  }
  :focus {
    outline: none;
  }
`;
const Input = styled.input`
  margin: 14px 0;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #dedede;
  :focus {
    outline: none;
    border: 1px solid #ffab23;
  }
`;

const Label = styled.label`
  color: transparent;
  background-color: #565656;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const formData = new FormData(e.currentTarget);
    dispatch(
      login({
        username: formData.get("username"),
        token: uuid3(formData.get("username"))
      })
    );
    history.push("/categories");
  };

  return (
    <>
      <CenteredLogin>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="username" title="Enter User Name">
            Enter User Name
          </Label>
          <br />
          <Input type="text" name={"username"} required minLength={3} />
          <br />
          <Button type="submit">Enter</Button>
          <br />
        </form>
      </CenteredLogin>
    </>
  );
};

export default Login;
