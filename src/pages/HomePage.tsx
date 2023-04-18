import { useState } from 'react';
import ListView from '../components/dashboard/ListView';
import MapView from '../components/dashboard/MapView';

export default function Dashboard() {
  const [view, setView] = useState(0);
  return (
    <>
      {view === 0 && <ListView />}
      {view === 1 && <MapView />}
    </>
  );
}
