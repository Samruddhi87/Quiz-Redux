import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "./Auth";
const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const handlerLogin = () => {
    auth.Login(user);
    navigate("/");
  };
  return (
    <div>
      <label> Username: </label>
      <input type="text" onChange={(event) => setUser(event.target.value)} />
      <button onClick={handlerLogin}> Login</button>
    </div>
  );
};

export default Login;
