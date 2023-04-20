import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { highlightOptions as options } from '../constants';

export default function DescriptionForm({ state }: { state: any }) {
  const [highlights, setHighlights] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const currState = Object.values(state.value)[0];

  const addHighlight = (highlight: string) => {
    if (highlights.includes(highlight)) {
      return setHighlights((prev) => prev.filter((i) => i !== highlight));
    }
    if (highlights.length === 2) {
      setHighlights((prev) => [prev[1], highlight]);
    } else {
      setHighlights((prev) => [...prev, highlight]);
    }
    return null;
  };

  return (
    <Flex className='flex-grow items-center justify-center'>
      {currState === 'highlights' && (
        <Box className='max-w-xl'>
          {/* structure is dynamic */}
          <Text className='mb-2 text-3xl font-semibold'>Now, let’s describe your structure</Text>
          <Text className='mb-8 text-gray-500'>
            Choose up to 2 highlights, we’ll use these to get your description started.
          </Text>
          <Flex className='flex-wrap gap-2'>
            {options.map((option) => (
              <Flex
                key={option.name}
                className={`cursor-pointer items-center gap-2 rounded-full border  p-4 hover:border-black ${
                  highlights.includes(option.name) ? 'border-black' : 'border-gray-300'
                }`}
                onClick={() => addHighlight(option.name)}
              >
                <option.icon className='h-6 w-6' />
                <Text className='text-sm font-semibold'>{option.name}</Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      )}
      {currState === 'description' && (
        <Box className='max-w-xl flex-grow'>
          <Text className='mb-2 text-3xl font-semibold'>Create your description</Text>
          <Text className='mb-8 text-gray-500'>Share what makes your place special.</Text>
          <textarea
            className='h-36 w-full max-w-4xl rounded-lg border border-gray-300 p-2 outline-none focus:border-black'
            // placeholder custom depending on selection of highlights
            onChange={(e) => setValue(e.target.value)}
          />
          <Box className='text-sm text-gray-500'>{value.length}/500</Box>
          {/* Need to setError: The maximum number of characters allowed is 500 */}
        </Box>
      )}
    </Flex>
  );
}
