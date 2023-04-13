import { useState, useEffect } from 'react';
import './styles/App.css';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { setUserId } from 'firebase/analytics';
import { Button } from '@chakra-ui/react';
import { AppRouter } from './routes/routes';
import Layout from './components/Layout';
import Auth from './components/Auth';
import auth from '../firebaseConfig';

interface User {
  [key: string]: unknown;
}

interface AppProps {
  setUser: (user: User) => void;
}

function PlaceHolder({ setUser }: AppProps) {
  return (
    <div>
      PLACEHOLDER
      <Button
        colorScheme='teal'
        mt={4}
        width='100%'
        onClick={() => {
          signOut(auth);
          setUser(null);
        }}
      >
        Signout
      </Button>
    </div>
  );
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (userOb) => {
  //     if (userOb) {
  //       // User is signed in
  //       setUser(userOb);
  //     } else {
  //       // User is signed out
  //       setUser(null);
  //     }
  //   })
  // }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Layout />
      <AppRouter />
      {/* <div className='App'>{user ? <PlaceHolder /> : <Auth setUser={setUser} />}</div> */}
    </div>
  );
}

export default App;
