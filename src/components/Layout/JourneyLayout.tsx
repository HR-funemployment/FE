import React from 'react';
import { useMachine } from '@xstate/react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';
import LogoBlack from '../../assets/svg/logo-black';
import { getPath } from '../../routes/AppRouter';
import JourneyMachine from '../../pages/FormJourney/JourneyMachine';

interface Props {
  children: React.ReactNode;
}

export default function JourneyLayout({ children }: Props) {
  const navigate = useNavigate();
  const [state, send] = useMachine(JourneyMachine);

  const handleNextStep = () => {
    send('NEXT');
    const nextState = JourneyMachine.transition(state, 'NEXT');
    navigate(getPath(nextState.value.toString()));
  };

  const handlePrevStep = () => {
    send('PREV');
    const prevState = JourneyMachine.transition(state, 'PREV');
    navigate(getPath(prevState.value.toString()));
  };

  const isStartOrFinish = !['host_overview', 'step3_publish'].includes(String(state.value));

  return (
    <Box className='min-h-screen'>
      <Box className='sticky top-0 z-50 flex items-center justify-between px-8 py-4'>
        <Box className='cursor-pointer'>
          <LogoBlack />
        </Box>
        <Box>
          {isStartOrFinish && (
            <Button variant='border-rounded-black' className='mr-2'>
              Questions?
            </Button>
          )}
          <Button variant='border-rounded-black'>Save & Exit</Button>
        </Box>
      </Box>
      <Flex
        className='h-full flex-1 flex-col overflow-y-auto px-12'
        style={{ minHeight: 'calc(100vh - 144px)' }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement, { state });
        })}
      </Flex>
      <Box className='sticky bottom-0 py-4'>
        <Flex className='justify-between px-8'>
          {isStartOrFinish ? (
            <Button variant='transparent-underline' onClick={handlePrevStep}>
              Back
            </Button>
          ) : (
            <Box />
          )}
          <Button variant='black-solid' onClick={handleNextStep}>
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
