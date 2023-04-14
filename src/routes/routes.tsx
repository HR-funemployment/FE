import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HostingInfo, BecomeAHost } from '../pages/Hosting';
import { Login, Forget, SignUp } from '../components/Auth';

interface RouteType {
  path: string;
  type: string;
  title: string;
  component: React.ComponentType;
}

// Add other routes here
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

  // Airbnb your home
  {
    path: '/host/homes',
    type: 'create-listing',
    title: 'hosting',
    component: HostingInfo,
  },
  {
    path: '/become-a-host',
    type: 'create-listing',
    title: 'step1',
    component: BecomeAHost,
  },
];

const getPath = (title: string) => {
  const route = routes.find((component) => component.title === title);
  return route ? route.path : '/';
};

function AppRouter() {
  const { user } = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
        {!user &&
          routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
      </Routes>
    </Router>
  );
}

export { routes, getPath, AppRouter };
