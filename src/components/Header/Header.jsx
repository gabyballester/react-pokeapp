import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    window.location.href = "/";
  };

  function UserInfo({ logout }) {
    return (
      <Fragment>
        <p className="user-data">
          Bienvenido: <span className="username">{isAuth}</span>
        </p>
        <Button action={logout} title="Logout" cssStyle="flat" />
      </Fragment>
    );
  }

  return (
    <div className="header">
      <div className="left-side">
        <Link to="/home">
          <h1>React PokeApp - Gabriel Ballester</h1>
        </Link>
      </div>
      <div className="right-side">
        {showButton ? <UserInfo logout={logout} /> : null}
      </div>
    </div>
  );
}
