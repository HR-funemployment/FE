import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import formRoutes from './formRoutes';
import { Login, Forget, SignUp } from '../components/Auth';

export interface RouteType {
  path: string;
  type: string;
  title: string;
  component: React.ComponentType;
}

// Import components and add it to routes
const routes: RouteType[] = [
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
        {!user
          ? routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))
          : routes
              .filter((i) => i.type !== 'auth')
              .map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
      </Routes>
    </Router>
  );
}

export { routes, getPath, AppRouter };
