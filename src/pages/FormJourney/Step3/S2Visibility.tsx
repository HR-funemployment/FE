import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

export default function VisibilityForm() {
  const [isAny, setIsAny] = useState(true);

  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-xl'>
        {/* TODO: change structure to dynamic structure variable */}
        <Text className='mb-2 text-3xl font-semibold'>
          Choose who to welcome for your first reservation
        </Text>
        <Text className='mb-8 text-gray-500'>
          After your first guest, anyone can book your place.{' '}
          <span className='underline'>Learn more</span>
        </Text>
        <Flex
          className={`${
            isAny && 'border-black bg-gray-50'
          } mb-4 cursor-pointer rounded-xl border border-gray-300 p-6 hover:border-black`}
          onClick={() => setIsAny(true)}
        >
          <Box>
            <Box
              className={`${
                isAny ? 'border-[6px] border-black' : 'border border-gray-300'
              } mr-2 h-5 w-5 rounded-full`}
            />
          </Box>
          <Box>
            <Text className='font-semibold'>Any Airbnb guest</Text>
            <Text className='text-xs'>
              Get reservations faster when you welcome anyone from the Airbnb community
            </Text>
          </Box>
        </Flex>

        <Flex
          className={`${
            !isAny && 'border-black bg-gray-50'
          } mb-4 cursor-pointer rounded-xl border border-gray-300 p-6 hover:border-black`}
          onClick={() => setIsAny(false)}
        >
          <Box>
            <Box
              className={`${
                !isAny ? 'border-[6px] border-black' : 'border border-gray-300'
              } mr-2 h-5 w-5 rounded-full`}
            />
          </Box>
          <Box>
            <Text className='font-semibold'>Any experienced guest</Text>
            <Text className='text-xs'>
              For your first guest, welcome someone with a good track record on Airbnb who can offer
              tips for how to be a great host.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
