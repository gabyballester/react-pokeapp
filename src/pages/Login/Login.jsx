import { useState } from "react";
import {Redirect} from 'react-router-dom';
//components
import Button from "../../components/BaseButton";
import "./Login.scss";

export default function Login() {
  const [username, setUsername] = useState("");

  const changeForm = (e) => {
    setUsername(e.target.value.trim());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    username.length > 0
      ? localStorage.setItem("username",username)
      : console.log("incorrecto");
    <Redirect to="/" />
  };

  return (
    <div className="login-container">
      <h1>Entrar a PokeApp</h1>
      <div>
        <form className="login-form" onChange={changeForm}>
          <input type="text" name="username" placeholder="Escribe tu usuario" />
          <Button action={onSubmit} title="Entrar" cssStyle="solid" />
        </form>
      </div>
    </div>
  );
}
