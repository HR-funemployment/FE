export { default as Login } from './Login';

export { default as Forget } from './Forget';

export { default as SignUp } from './SignUp';
// interface AuthProps {
//   setUser: (user: User | null) => void;
// }

// function Navbar() {
//   return (
//     <nav>
//       <Flex p={4} alignItems='center' boxShadow='md' bg='white'>
//         <Box>
//           <ChakraLink
//             as={Link}
//             to='/Login'
//             fontWeight='bold'
//             fontSize='lg'
//             _hover={{ textDecoration: 'none' }}
//           >
//             Login
//           </ChakraLink>
//         </Box>
//         <Spacer />
//         <Box>
//           <ChakraLink
//             as={Link}
//             to='/SignUp'
//             fontWeight='bold'
//             fontSize='lg'
//             _hover={{ textDecoration: 'none' }}
//           >
//             Sign Up
//           </ChakraLink>
//         </Box>
//         <Spacer />
//         <Box>
//           <ChakraLink
//             as={Link}
//             to='/Forget'
//             fontWeight='bold'
//             fontSize='lg'
//             _hover={{ textDecoration: 'none' }}
//           >
//             Forget
//           </ChakraLink>
//         </Box>
//       </Flex>
//     </nav>
//   );
// }

// function Auth({ setUser }: AuthProps) {
//   const [signUp, setSignUp] = useState(false);
//   return (
//     // <Router>
//     //   <Navbar />
//     //   <Routes>
//     //     <Route path='*' element={<Navigate to='/Login' />} />
//     //     <Route path='/Login' element={<Login setUser={setUser}/>} />
//     //     <Route path='/SignUp' element={<SignUp />} />
//     //     <Route path='/Forget' element={<Forget />} />
//     //   </Routes>
//     // </Router>
//   );
// }

