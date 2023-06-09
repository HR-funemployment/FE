import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { structureOptions as options } from '../constants';

export default function StructureForm() {
  const [structure, setStructure] = useState('');

  return (
    <Flex className='justify-center'>
      <Flex className='flex-col pl-8 pt-4'>
        <Text className='mb-4 w-2/3 text-2xl font-semibold'>
          Which of these best describes your place?
        </Text>
        <Flex className='max-w-xl flex-wrap gap-2'>
          {options.map((option) => (
            <Box
              key={option.name}
              className={`w-44 cursor-pointer rounded-md border p-2 hover:border-black ${
                option.name === structure ? 'border-black' : 'border-gray-300 '
              }`}
              onClick={() => setStructure(option.name)}
            >
              <Text className='text-sm font-semibold'>{option.name}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
