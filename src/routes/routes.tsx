import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HostingInfo, BecomeAHost } from '../pages/Hosting';
import { Login, Forget, SignUp } from '../components/Auth';

interface AppRoute {
  path: string;
  title: string;
  component: React.ComponentType;
}

interface AuthRoute {
  path: string;
  title: string;
  component: React.ComponentType;
}

// Add routes here
const routes: AppRoute[] = [
  // Airbnb your home
  {
    path: '/host/homes',
    title: 'hosting',
    component: HostingInfo,
  },
  {
    path: '/become-a-host',
    title: 'step1',
    component: BecomeAHost,
  },
];

const authRoutes: AuthRoute[] = [
  {
    path: '/signup',
    title: 'signup',
    component: SignUp,
  },
  {
    path: '/forget',
    title: 'forget',
    component: Forget,
  },
  {
    path: '/login',
    title: 'login',
    component: Login,
  },
];

const getPath = (title: string) => {
  const route = routes.find((component) => component.title === title);
  return route ? route.path : '/';
};

const authPath = (title: string) => {
  const authRoute = authRoutes.find((component) => component.title === title);
  return authRoute ? authRoute.path : '/';
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
          authRoutes.map((authRoute) => (
            <Route key={authRoute.path} path={authRoute.path} element={<authRoute.component />} />
          ))}
      </Routes>
    </Router>
  );
}

export { routes, getPath, authPath, AppRouter };
