import { useState } from 'react';
import ListView from '../components/dashboard/ListView';
import MapView from '../components/dashboard/MapView';

export default function Dashboard() {
  const [view, setView] = useState(0);
  return (
    <>
      <div>This is the home page placeholder</div>
      {view === 0 && <ListView />}
      {view === 1 && <MapView />}
    </>
  );
}
