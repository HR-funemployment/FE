import { useState } from 'react';
import './styles/App.css';
import { AppRouter } from './routes/routes';
import Layout from './components/Layout';
import Auth from './components/Auth';

interface User {
  [key: string]: any;
}

interface AppProps {
  setUser: (user: User) => void;
}

function PlaceHolder() {
  return <div>PLACEHOLDER</div>;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Layout />
      <AppRouter />
      {/* <div className='App'>{user ? <PlaceHolder /> : <Auth setUser={setUser} />}</div> */}
    </div>
  );
}

export default App;
