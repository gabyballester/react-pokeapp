// components
import UserInfo from "../UserInfo/";
// services
import { isUserAuth } from "../../services/auth.service";
// styles
import "./Header.scss";

export default function Header() {
  const isAuth = isUserAuth();

  const logout = (e) => {
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <div className="header">
      <div className="left-side">
        <h2>React PokeApp</h2>
        <h4>Candidato: Gabriel Ballester</h4>
      </div>
      <div className="right-side">
        {isAuth ? <UserInfo logout={logout} isAuth={isAuth} /> : null}
      </div>
    </div>
  );
}
