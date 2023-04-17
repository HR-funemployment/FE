import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { getPath } from '../../routes/AppRouter';

export default function HostingAdmin() {
  return (
    <div>
      <div>Hosting Admin view</div>
      <Link as={RouterLink} to={getPath('become_host')}>
        Click to start the form journey
      </Link>
    </div>
  );
}
