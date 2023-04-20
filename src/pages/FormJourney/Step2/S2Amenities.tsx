import { Flex, Box, Text } from '@chakra-ui/react';
import { amenityOptions, standoutOptions, safetyOptions } from '../constants';

export default function AmenitiesForm() {
  return (
    <Flex className='justify-center'>
      <Flex className='flex-col pt-4'>
        <Text className='mb-3 text-2xl font-semibold'>
          Tell guests what your place has to offer
        </Text>
        <Text className='mb-4'>You can add more amenities after you publish your listing</Text>
        <Flex className='mb-8 max-w-xl flex-wrap gap-2'>
          {amenityOptions.map((option) => (
            <Box
              key={option.name}
              className='w-44 cursor-pointer rounded-md border border-gray-300 p-2 hover:border-black'
            >
              <Text className='text-sm font-semibold'>{option.name}</Text>
            </Box>
          ))}
        </Flex>
        <Text className='mb-4 font-semibold'>Do you have any standout amenities?</Text>
        <Flex className='mb-8 max-w-xl flex-wrap gap-2'>
          {standoutOptions.map((option) => (
            <Box
              key={option.name}
              className='w-44 cursor-pointer rounded-md border border-gray-300 p-2 hover:border-black'
            >
              <Text className='text-sm font-semibold'>{option.name}</Text>
            </Box>
          ))}
        </Flex>
        <Text className='mb-4 font-semibold'>Do you have any of these safety items?</Text>
        <Flex className='mb-4 max-w-xl flex-wrap gap-2'>
          {safetyOptions.map((option) => (
            <Box
              key={option.name}
              className='w-44 cursor-pointer rounded-md border border-gray-300 p-2 hover:border-black'
            >
              <Text className='text-sm font-semibold'>{option.name}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
