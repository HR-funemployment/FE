import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import DecideLayout from './DecideLayout';
import formRoutes from './formRoutes';
import { Login, Forget, SignUp } from '../components/Auth';
import { HostingAdmin, HostingInbox } from '../pages/Hosting';
import HomePage from '../pages/HomePage';

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
    title: 'home',
    component: HomePage,
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

  // Hosting

  {
    path: '/hosting',
    type: 'hosting',
    title: 'host_admin',
    component: HostingAdmin,
  },
  {
    path: '/hosting/inbox/folder/:filter',
    type: 'hosting',
    title: 'host_inbox',
    component: HostingInbox,
  },

  ...formRoutes,
];

const getPath = (title: string, idType?: string, id?: string) => {
  const route = routes.find((component) => component.title === title);
  if (!route) return '/';
  const { path } = route;
  if (idType && id && path.includes(`:${idType}`)) {
    return path.replace(`:${idType}`, id);
  }
  return path;
};

function AppRouter() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Router>
      <Routes>
        {!user
          ? routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<DecideLayout component={route.component} routeType={route.type} />}
              />
            ))
          : routes
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
