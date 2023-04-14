import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
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
} from '@chakra-ui/react';
import auth from '../../../firebaseConfig';
import { getPath } from '../../routes/Routes';

function Forget() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const inputBgColor = useColorModeValue('white', 'gray.700');
  const inputBorderColor = useColorModeValue('brand.500', 'brand.500');
  const inputFocusBorderColor = useColorModeValue('brand.500', 'brand.500');
  const inputFocusBoxShadow = useColorModeValue(
    '0 0 0 2px rgba(29, 185, 84, 0.6)',
    '0 0 0 2px rgba(29, 185, 84, 0.6)'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage(`Password reset email sent to ${email}.`);
      })
      .catch((error) => {
        setMessage(`Error resetting password: ${error.message}`);
      });
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
        Forgot Password
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
        <Button colorScheme='teal' mt={4} width='100%' onClick={handleSubmit}>
          Reset Password
        </Button>
        <Text mt={4}>{message}</Text>
        <ChakraLink href={getPath('login')}> Back </ChakraLink>
      </VStack>
    </Box>
  );
}

export default Forget;
