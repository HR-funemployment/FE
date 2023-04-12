import { useState } from 'react';
import './styles/App.css';
import Auth from './components/Auth';

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <Auth />
      {/* <h1>Vite + React</h1>
      <div className='card'>
        <button type='button' onClick={() => setCount((ct) => ct + 1)}>
          count is
          {count}
        </button>
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p> */}
    </div>
  );
}

export default App;
