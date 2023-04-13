import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import auth from '../../../firebaseConfig';

interface LoginProps {
  setUser: (user: User | null) => void;
}

function Login({ setUser }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otheremail, setOtheremail] = useState(null);

  const inputBgColor = useColorModeValue('white', 'gray.700');
  const inputBorderColor = useColorModeValue('brand.500', 'brand.500');
  const inputFocusBorderColor = useColorModeValue('brand.500', 'brand.500');
  const inputFocusBoxShadow = useColorModeValue(
    '0 0 0 2px rgba(29, 185, 84, 0.6)',
    '0 0 0 2px rgba(29, 185, 84, 0.6)'
  );

  const handleGoogleSignIn = () => {
    // TODO: Implement Google sign-in functionality
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log('it went here');
        setUser(data);
      })
      .catch((err) => console.log(err));
    console.log('Google sign-in clicked!');
  };

  const handleFacebookSignIn = () => {
    // TODO: Implement Facebook sign-in functionality
    const provider = new FacebookAuthProvider();
    const providerG = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setOtheremail(true);
      });
    console.log('Facebook sign-in clicked!');
  };

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log('success');
        setUser(data);
      })
      .catch(() => console.log('fail'));
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      bgGradient='linear(to-r, teal.500, green.500)'
    >
      <Heading mb={8} color='white'>
        Login
      </Heading>
      <VStack spacing={4} p={6} bg={inputBgColor} borderRadius='md' boxShadow='lg'>
        <FormControl id='email'>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type='email'
            placeholder='Email'
            bg={inputBgColor}
            border='2px'
            borderColor={inputBorderColor}
            borderRadius='md'
            _focus={{
              borderColor: inputFocusBorderColor,
              boxShadow: inputFocusBoxShadow,
            }}
            _placeholder={{
              color: 'gray.400',
            }}
            _hover={{
              borderColor: inputBorderColor,
            }}
          />
        </FormControl>
        <FormControl id='password'>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type='password'
            placeholder='Password'
            bg={inputBgColor}
            border='2px'
            borderColor={inputBorderColor}
            borderRadius='md'
            _focus={{
              borderColor: inputFocusBorderColor,
              boxShadow: inputFocusBoxShadow,
            }}
            _placeholder={{
              color: 'gray.400',
            }}
            _hover={{
              borderColor: inputBorderColor,
            }}
          />
        </FormControl>
        <Button colorScheme='teal' mt={4} width='100%' onClick={handleLogIn}>
          Log In
        </Button>
        <Button
          leftIcon={<FaGoogle />}
          mt={4}
          width='100%'
          onClick={handleGoogleSignIn}
          variant='outline'
        >
          Sign in with Google
        </Button>
        <Button
          leftIcon={<FaFacebook />}
          mt={4}
          width='100%'
          onClick={handleFacebookSignIn}
          variant='outline'
        >
          Sign in with Facebook
        </Button>
        {otheremail && <Text>Account exists {otheremail} with other credential</Text>}
      </VStack>
    </Box>
  );
}
export default Login;
