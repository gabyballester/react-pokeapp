import { Route, Switch } from "react-router-dom";
// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
// styles
import "./BasicLayout.scss";

export default function BasicLayout(props) {
  const { routes } = props;
  return (
    <div>
      <Header />
      <div className="content">
        <LoadRoutes routes={routes} />
      </div>
      <Footer />
    </div>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
