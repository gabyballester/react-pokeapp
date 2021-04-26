import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Pokeapp <span>con react</span></h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Vista Home</h2>
}

function Login() {
  return <h2>Vista Login</h2>
}

function Error404() {
  return <h2>Error 404</h2>
}

export default App;
