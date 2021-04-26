import { useState, useEffect } from "react";
// components
import Button from "../BaseButton";
// styles
import "./Header.scss";

export default function Header() {
  const [showButton, setShowButton] = useState(false);
  const isAuth = localStorage.getItem("username");

  useEffect(() => {
    if (isAuth && isAuth.length > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [isAuth]);

  const logout = (e) => {
    localStorage.removeItem("username");
  };

  return (
    <div className="header">
      <div className="left-side">
        <h1>React PokeApp</h1>
      </div>
      <div className="right-side">
        <p className="username">ShowUsername</p>
        {showButton ? (
          <Button action={logout} title="Logout" cssStyle="flat" />
        ) : null}
      </div>
    </div>
  );
}
