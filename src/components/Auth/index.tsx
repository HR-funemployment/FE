import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { Box, Flex, Spacer, Link as ChakraLink } from '@chakra-ui/react';
import Login from './Login';
import Forget from './Forget';
import SignUp from './SignUp';

function Navbar() {
  return (
    <nav>
      <Flex p={4} alignItems='center' boxShadow='md' bg='white'>
        <Box>
          <ChakraLink
            as={Link}
            to='/Login'
            fontWeight='bold'
            fontSize='lg'
            _hover={{ textDecoration: 'none' }}
          >
            Login
          </ChakraLink>
        </Box>
        <Spacer />
        <Box>
          <ChakraLink
            as={Link}
            to='/SignUp'
            fontWeight='bold'
            fontSize='lg'
            _hover={{ textDecoration: 'none' }}
          >
            Sign Up
          </ChakraLink>
        </Box>
        <Spacer />
        <Box>
          <ChakraLink
            as={Link}
            to='/Forget'
            fontWeight='bold'
            fontSize='lg'
            _hover={{ textDecoration: 'none' }}
          >
            Forget
          </ChakraLink>
        </Box>
      </Flex>
    </nav>
  );
}

function Auth() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='*' element={<Navigate to='/Login' />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Forget' element={<Forget />} />
      </Routes>
    </Router>
  );
}

export default Auth;
