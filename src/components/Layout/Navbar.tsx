import {
  Link as ChakraLink,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { HamburgerIcon } from '@chakra-ui/icons';
import { logout } from '../../state/user';
import { getPath } from '../../routes/AppRouter';

export default function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div style={{ height: '4rem', backgroundColor: 'gray' }}>
      <div>Navbar Placeholder</div>
      <ChakraLink href={getPath('host_admin')}>Routing Example Button1</ChakraLink>
      <br />
      <br />
      <div style={{ position: 'relative' }}>
        <Menu>
          <MenuButton
            as={Button}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '-3rem',
              display: 'flex',
              alignItems: 'center',
              transition: 'all .2s ease-in-out',
              _hover: {
                boxShadow: 'xl',
              },
            }}
          >
            <HamburgerIcon w={6} h={6} mr={2} />
            <Avatar size='sm' src='https://via.placeholder.com/150' />
          </MenuButton>
          <MenuList>
            {user ? (
              <MenuItem as={Button} onClick={() => dispatch(logout())}>
                Sign Out
              </MenuItem>
            ) : (
              <>
                <MenuItem as={ChakraLink} href={getPath('login')}>
                  Log In
                </MenuItem>
                <MenuItem as={ChakraLink} href={getPath('signup')}>
                  Sign Up
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
