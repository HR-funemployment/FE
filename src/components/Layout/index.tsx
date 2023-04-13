import { Link as ChakraLink } from '@chakra-ui/react';
import { getPath } from '../../routes/routes';

export default function Navbar() {
  return (
    <div style={{ height: '4rem', backgroundColor: 'gray' }}>
      <div>Navbar Placeholder</div>
      <ChakraLink href={getPath('hosting')}>
        <button type='button'>Routing Example Button</button>
      </ChakraLink>
    </div>
  );
}
