import React from 'react';
import { useMachine } from '@xstate/react';
import { useNavigate } from 'react-router-dom';
import { Flex, Button } from '@chakra-ui/react';
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

  return (
    <div>
      This is navbar for the form journey
      <br />
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, { state });
      })}
      <br />
      <Flex direction='row'>
        {!['host_overview', 'step3_publish'].includes(String(state.value)) && (
          <Button mr='2' onClick={handlePrevStep}>
            Prev
          </Button>
        )}
        <Button onClick={handleNextStep}>Next</Button>
      </Flex>
    </div>
  );
}
