import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Link as ChakraLink,
  Box,
  Heading,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  useColorModeValue,
  Text,
  Divider,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle, FaEnvelope } from 'react-icons/fa';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import { getPath } from '../../routes/AppRouter';
import auth from '../../../firebaseConfig';
import { login } from '../../state/user';

// interface LoginProps {
//   setUser: (user: User | null) => void;
// }

function Login() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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

  const redirectLogin = () => {
    navigate(getPath('listing'));
  }

  const handleGoogleSignIn = () => {
    // TODO: Implement Google sign-in functionality
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log('success');
        redirectLogin();
      })
      .catch((err) => console.log(err));
    console.log('Google sign-in clicked!');
  };

  const handleFacebookSignIn = () => {
    // TODO: Implement Facebook sign-in functionality
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log('success');
        redirectLogin();
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
        redirectLogin();
      })
      .catch((err) => console.log(err));
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
        <Divider my={6} borderColor='gray.300' borderWidth={2} />
        <Button
          leftIcon={<FaEnvelope />}
          mt={4}
          width='100%'
          as={ChakraLink}
          href={getPath('signup')}
          variant='outline'
        >
          Sign up with email
        </Button>
        <ChakraLink href={getPath('forget')}> Forget Password </ChakraLink>
      </VStack>
    </Box>
  );
}
export default Login;
