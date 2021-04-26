import BasicLayout from '../layouts/basic';

// pages
import Login from '../pages/Login';
import Home from '../pages/Home';

const routes = [
  {
    path: "/", component: BasicLayout, exact: false, routes: [
      { path: "/", component: Home, exact: true },
      { path: "/login", component: Login, exact: true }
    ]
  }
]

export default routes;