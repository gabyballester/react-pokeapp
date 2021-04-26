import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// Pages
import Login from './pages/Login';
// Components
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
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



function Error404() {
  return <h2>Error 404</h2>
}

export default App;
