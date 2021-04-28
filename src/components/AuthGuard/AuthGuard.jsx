import { Redirect } from "react-router-dom";
import { isUserAuth } from "../../services/auth.service";

export default function AuthChecker() {
  return (
    <div>{isUserAuth() ? <Redirect to="/home" /> : <Redirect to="/" />} </div>
  );
}
