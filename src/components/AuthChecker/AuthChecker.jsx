import { Redirect } from "react-router-dom";

export default function AuthChecker() {
  const isAuth = localStorage.getItem("username");
  console.log(isAuth);
  return (
    <div>
      {isAuth && isAuth.length > 0 ? (
        <Redirect to="/home" />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}
