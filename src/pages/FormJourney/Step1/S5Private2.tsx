import { Flex, Box, Text } from '@chakra-ui/react';
import { occupancyOptions as options } from '../constants';

export default function OccupancyForm() {
  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-2xl'>
        <Text className='mb-2 text-2xl font-semibold'>Who else might be there?</Text>
        <Text className='text-gray-500'>
          Guests need to know whether they’ll encounter other people during their stay.
        </Text>
        <Flex className='mt-6 flex-wrap gap-2'>
          {options.map((option) => (
            <Flex
              key={option.name}
              className='w-44 cursor-pointer justify-start rounded-xl border border-gray-300 p-4'
            >
              <Text className='text-sm font-semibold'>{option.name}</Text>
            </Flex>
          ))}
        </Flex>
        <Text className='mt-10 text-gray-500'>
          We’ll show this information on your listing and in search results.
        </Text>
      </Box>
    </Flex>
  );
}
