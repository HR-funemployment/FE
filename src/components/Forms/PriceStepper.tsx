import React, { useState } from 'react';
import { Box, Flex, Text, Input } from '@chakra-ui/react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function StepperButtons() {
  const [value, setValue] = useState(200);

  const increment = () => {
    setValue((prevVal) => {
      if (prevVal < 5) return 10;
      return prevVal + 5;
    });
  };

  const decrement = () => {
    setValue((prevVal) => {
      if (prevVal <= 10) return 10;
      if (prevVal > 10 && prevVal <= 14) return 10;
      return prevVal - 5;
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const substr = e.target.value.substr(1);
    setValue(Number(substr));
  };

  return (
    <Box>
      <Flex className='items-center gap-4'>
        <button
          type='button'
          className={`rounded-full border  p-3 ${
            !value
              ? 'cursor-not-allowed border-gray-200 text-gray-300'
              : 'cursor-pointer border-gray-400 text-gray-500 hover:border-black hover:text-black'
          }`}
          disabled={value === 10}
          onClick={() => decrement()}
        >
          <AiOutlineMinus className='h-5 w-5' />
        </button>
        <Flex className='justify-center text-sm'>
          <Input
            value={`${'$'}${value}`}
            textAlign='center'
            width='28rem'
            height='5rem'
            fontSize='34px'
            fontWeight='bold'
            onChange={handleInput}
          />
        </Flex>
        <button
          type='button'
          className='cursor-pointer rounded-full  border border-gray-400 p-3 text-gray-500 hover:border-black hover:text-black'
          onClick={() => increment()}
        >
          <AiOutlinePlus className='h-5 w-5' />
        </button>
      </Flex>
      <Text className='mt-2 flex justify-center'>per night</Text>
      {value < 10 && (
        <Text className='text-center text-xs text-red-500'>
          Please enter a base price between $10 and $10,000.
        </Text>
      )}
    </Box>
  );
}
