import { Flex, Box, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { nextSteps } from '../constants';

export default function Review() {
  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-3xl'>
        {/* TODO: change structure to dynamic structure variable */}
        <Text className='mb-2 text-4xl font-semibold'>Yay! It’s time to publish.</Text>
        <Text className='mb-8 text-gray-500'>
          Here’s what we’ll show to guests. Before you publish, make sure to review the details.
        </Text>
        <Flex>
          <Box className='w-1/2'>
            {/* TODO: Need a modal */}
            <Box className='w-80 cursor-pointer rounded-xl p-4 shadow-2xl'>
              <Box className='h-60 rounded-xl bg-gray-100 p-3'>
                <div className='inline rounded-sm bg-white px-2 text-sm font-medium shadow'>
                  Show preview
                </div>
              </Box>
              <Flex className='mt-4 items-start justify-between'>
                <Text className='text-sm font-semibold'>Title from title form</Text>
                <Flex className='items-center text-sm'>
                  New <AiFillStar />
                </Flex>
              </Flex>
              <Text className='text-sm'>
                <span className='font-semibold'>$8</span> night
              </Text>
            </Box>
          </Box>
          <Box className='w-1/2'>
            <Text className='mb-6 text-xl font-semibold'>What’s next?</Text>
            {nextSteps.map((step) => (
              <Flex key={step.header} className='mb-6'>
                <Box>
                  <step.icon className='mr-4 h-7 w-7' />
                </Box>
                <Box>
                  <Text className='font-semibold'>{step.header}</Text>
                  <Text className='text-xs text-gray-500'>{step.description}</Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
