import { Flex, Button } from '@chakra-ui/react';
interface Props {
  children: React.ReactNode;
}

export default function JourneyLayout({ children }: Props) {
  return (
    <div>
      This is navbar for the form journey
      <br />
      {children}
      <br />
      <Flex direction='row'>
        <Button mr='2'>Prev</Button>
        <Button>Next</Button>
      </Flex>
    </div>
  );
}
