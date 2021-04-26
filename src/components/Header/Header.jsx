import { useState } from "react";
// components
import Button from "../BaseButton";
// styles
import "./Header.scss";

export default function Header() {

  return (
    <div className="header">
      <div className="left-side">
        <h1>React PokeApp</h1>
      </div>
      <div className="right-side">
        <p className="username">ShowUsername</p>
        <Button title="Logout"/>
      </div>
    </div>
  );
}
