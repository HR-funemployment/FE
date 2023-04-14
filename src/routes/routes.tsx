import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import DecideLayout from './DecideLayout';
import formRoutes from './formRoutes';
import { Login, Forget, SignUp } from '../components/Auth';
import Dashboard from '../pages/Dashboard';

export interface RouteType {
  path: string;
  type: string;
  title: string;
  component: React.ComponentType;
}

// Import components and add it to routes
const routes: RouteType[] = [
  // Dashboard
  // This is the home page placeholder
  {
    path: '/',
    type: 'listing',
    title: 'dashboard',
    component: Dashboard,
  },

  // Authentication
  {
    path: '/signup',
    type: 'auth',
    title: 'signup',
    component: SignUp,
  },
  {
    path: '/forget',
    type: 'auth',
    title: 'forget',
    component: Forget,
  },
  {
    path: '/login',
    type: 'auth',
    title: 'login',
    component: Login,
  },

  ...formRoutes,
];

const getPath = (title: string) => {
  const route = routes.find((component) => component.title === title);
  return route ? route.path : '/';
};

function AppRouter() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Router>
      <Routes>
        {!user &&
          routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<DecideLayout component={route.component} routeType={route.type} />}
            />
          ))}
        {routes
          .filter((i) => i.type !== 'auth')
          .map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<DecideLayout component={route.component} routeType={route.type} />}
            />
          ))}
      </Routes>
    </Router>
  );
}

export { routes, getPath, AppRouter };
