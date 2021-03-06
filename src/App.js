import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes';
import AuthGuard from './components/AuthGuard';
import './App.scss';

function App() {
  return (
    <Router>
      <AuthGuard/>
      <div className="app">
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </div>
    </Router>    
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;