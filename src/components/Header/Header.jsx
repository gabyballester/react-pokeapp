import { useState, useEffect } from "react";
// components
import MenuFilter from '../MenuFilter';
import UserInfo from '../UserInfo/'
// services
import { isUserAuth } from "../../services/auth.service";
// styles
import "./Header.scss";

export default function Header() {
  const [showButton, setShowButton] = useState(false);
  const isAuth = isUserAuth();

  useEffect(() => {
    setShowButton(isAuth);
  }, [isAuth]);

  const logout = (e) => {
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <div className="header">
      <div className="left-side">
        <h3>React PokeApp - Gabriel Ballester</h3>
      </div>
      <MenuFilter/>
      <div className="right-side">
        {showButton ? <UserInfo logout={logout} isAuth={isAuth}/> : null}
      </div>
    </div>
  );
}
