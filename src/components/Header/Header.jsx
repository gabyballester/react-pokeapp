// components
import MenuFilter from "../MenuFilter";
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
        <h3>React PokeApp - Gabriel Ballester</h3>
      </div>
      <div className="center">{isAuth ? <MenuFilter /> : null}</div>
      <div className="right-side">
        {isAuth ? <UserInfo logout={logout} isAuth={isAuth} /> : null}
      </div>
    </div>
  );
}
