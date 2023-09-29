import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loading, error, handleLogin } = useContext(authContext);

  const handleSignIn = () => {
    const userData = {
      email,
      password,
    };
    handleLogin(userData, navigate);
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h1>Войти</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Почта"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSignIn}>
            Войти
          </button>
        </div>
        <div>
          <p>
            Новый пользователь? <Link to="/register">Создать аккаунт</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
