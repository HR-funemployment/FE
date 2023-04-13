import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HostingInfo, BecomeAHost } from '../pages/Hosting';

interface AppRoute {
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

const getPath = (title: string) => {
  const route = routes.find((component) => component.title === title);
  return route ? route.path : '/';
};

function AppRouter() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
  );
}

export { routes, getPath, AppRouter };
