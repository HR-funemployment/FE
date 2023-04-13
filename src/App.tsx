import { useState } from 'react';
import './styles/App.css';
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

  return <div className='App'>{user ? <PlaceHolder /> : <Auth setUser={setUser} />}</div>;
}

export default App;
