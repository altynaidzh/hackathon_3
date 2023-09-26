<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { authContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate();

  const { loading, error, handleRegister } = useContext(authContext)
 
  const handleSubmit = () => { 
    if(!email.trim() || !password.trim() || !confirmPassword.trim()) {
=======
import React, { useContext, useState } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { loading, error, handleRegister } = useContext(authContext);

  const handleSubmit = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
>>>>>>> 997ca97f2bb0327a58dcfc6b81bedab53f14d116
      alert("Заполните поля!");
    } else {
      const user = {
        email,
        password,
<<<<<<< HEAD
        password_confirm: confirmPassword
      }
  
      handleRegister(user, navigate);
    };
=======
        password_confirm: confirmPassword,
      };

      handleRegister(user, navigate);
    }
>>>>>>> 997ca97f2bb0327a58dcfc6b81bedab53f14d116
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <input
<<<<<<< HEAD
          type="password" onChange={(e) => setConfirmPassword(e.target.value)}
=======
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
>>>>>>> 997ca97f2bb0327a58dcfc6b81bedab53f14d116
        />
        <button onClick={handleSubmit}>Sign up</button>
      </div>
    </div>
<<<<<<< HEAD
  )
};

export default Register;
=======
  );
};

export default Register;
>>>>>>> 997ca97f2bb0327a58dcfc6b81bedab53f14d116
