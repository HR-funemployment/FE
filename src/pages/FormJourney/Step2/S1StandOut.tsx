import { Flex, Text, Image } from '@chakra-ui/react';

export default function StandOut() {
  return (
    <Flex className='flex-grow items-center justify-center'>
      <Flex className='w-full max-w-6xl'>
        <Flex className='w-1/2 flex-col items-start justify-center px-4'>
          <Text className='mb-4 text-xl font-semibold'>Step 2</Text>
          <Text className='mb-6 text-5xl font-semibold'>Make your place stand out</Text>
          <Text>
            In this step, you’ll add some of the amenities your place offers, plus 5 or more photos.
            Then, you’ll create a title and description.
          </Text>
        </Flex>
        <Flex className='w-1/2 px-4'>
          <Image src='/assets/images/step2.jpg' alt='step2 hero' className='h-auto w-full' />
        </Flex>
      </Flex>
    </Flex>
  );
}
