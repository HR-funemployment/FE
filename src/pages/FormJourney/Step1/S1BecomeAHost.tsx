import { Flex, Text, Image } from '@chakra-ui/react';

export default function BecomeAHost() {
  return (
    <Flex className='flex-grow items-center justify-center'>
      <Flex className='w-full max-w-6xl'>
        <Flex className='w-1/2 flex-col items-start justify-center px-4'>
          <Text className='mb-4 text-xl font-semibold'>Step 1</Text>
          <Text className='mb-6 text-5xl font-semibold'>Tell us about your place</Text>
          <Text>
            In this step, we'll ask you which type of property you have and if guests will book the
            entire place or just a room. Then let us know the location and how many guests can stay.
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
