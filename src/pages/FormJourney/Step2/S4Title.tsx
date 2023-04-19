import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

export default function TitleForm() {
  const [value, setValue] = useState('');

  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-2xl'>
        {/* TODO: change structure to dynamic structure variable */}
        <Text className='mb-2 text-3xl font-semibold'>Now, let’s give your structure a title</Text>
        <Text className='mb-8 text-gray-500'>
          short titles work best. Have fun with it——you can always change it later.
        </Text>

        <textarea
          className='h-36 w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-black'
          onChange={(e) => setValue(e.target.value)}
        />
        <Box className='text-sm text-gray-500'>{value.length}/32</Box>
        {/* Need to setError: The maximum number of characters allowed is 32 */}
      </Box>
    </Flex>
  );
}
