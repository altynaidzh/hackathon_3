import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { loading, error, handleRegister } = useContext(authContext);

  const handleSubmit = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Заполните все поля!");
    } else {
      const user = {
        email,
        password,
        password_confirm: confirmPassword,
      };

      handleRegister(user, navigate);
    }
  };

  return (
    <div className="main-container">
      <div className="register-container">
        <h1>Регистрация</h1>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Подтвердите пароль"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Создать аккаунт
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
