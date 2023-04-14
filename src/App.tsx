import './styles/App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { AppRouter } from './routes/routes';
import Layout from './components/Layout';
import auth from '../firebaseConfig';
import { login } from './state/user';

function App() {
  // const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (userAuth) => {
    dispatch(login(userAuth));
  });
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
    </div>
  );
}

export default App;
