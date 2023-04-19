import { Flex, Text, Image } from '@chakra-ui/react';

export default function FinishSetup() {
  return (
    <Flex className='flex-grow items-center justify-center'>
      <Flex className='w-full max-w-6xl'>
        <Flex className='w-1/2 flex-col items-start justify-center px-4'>
          <Text className='mb-4 text-xl font-semibold'>Step 3</Text>
          <Text className='mb-6 text-5xl font-semibold'>Finish up and publish</Text>
          <Text>
            Finally, you’ll choose if you’d like to start with an experienced guest, then you’ll set
            your nightly price. Answer a few quick questions and publish when you’re ready.
          </Text>
        </Flex>
        <Flex className='w-1/2 px-4'>
          <Image
            src='https://via.placeholder.com/300'
            alt='Placeholder image'
            className='h-auto w-full'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
