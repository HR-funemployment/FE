import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { AppRouter } from './routes/AppRouter';
import auth from '../firebaseConfig';
import { login } from './state/user';

function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (userAuth) => {
    dispatch(login(JSON.stringify(userAuth)));
  });

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <AppRouter />
    </div>
  );
}

export default App;
