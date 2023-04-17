import React from 'react';
import { useMachine } from '@xstate/react';
import { Flex, Button } from '@chakra-ui/react';
import JourneyMachine from '../../pages/FormJourney/JourneyMachine';

interface Props {
  children: React.ReactNode;
}

export default function JourneyLayout({ children }: Props) {
  const [state, send] = useMachine(JourneyMachine);

  const handleNextStep = () => {
    send('NEXT');
  };

  const handlePrevStep = () => {
    send('PREV');
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
        <Button mr='2' onClick={handlePrevStep}>
          Prev
        </Button>
        <Button onClick={handleNextStep}>Next</Button>
      </Flex>
    </div>
  );
}
