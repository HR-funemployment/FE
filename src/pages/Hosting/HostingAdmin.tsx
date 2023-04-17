import { Link } from '@chakra-ui/react';
import { useMachine } from '@xstate/react';
import JourneyMachine from '../FormJourney/JourneyMachine';
import { getPath } from '../../routes/AppRouter';

export default function HostingAdmin() {
  const [, send] = useMachine(JourneyMachine);

  const handleStartHosting = () => {
    send('NEXT');
  };

  return (
    <div>
      <div>Hosting Admin view</div>
      <Link href={getPath('host_overview')} onClick={handleStartHosting}>
        Click to start the form journey
      </Link>
    </div>
  );
}
