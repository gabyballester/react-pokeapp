import {Fragment} from 'react';
import Button from "../BaseButton";
import './UserInfo.scss';

export default function UserInfo({ logout,isAuth }) {
  return (
    <Fragment>
      <h4 className="user-data">
        Bienvenido: <span className="username">{isAuth}</span>
      </h4>
      <Button action={logout} title="Logout" cssStyle="flat" />
    </Fragment>
  );
}