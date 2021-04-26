import BasicLayout from '../layouts/basic';

// pages
import Login from '../pages/Login';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const routes = [
  {
    path: "/", component: BasicLayout, exact: false, routes: [
      { path: "/", component: Login, exact: true },
      { path: "/home", component: Home, exact: true },
      { component: Error404}
    ]
  }
]

export default routes;