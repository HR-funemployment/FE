import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export interface StepperProps {
  maxVal?: number;
  step?: number;
  suffix?: boolean;
}

export default function StepperButtons({ maxVal = 50, step = 1, suffix = false }: StepperProps) {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevVal) => {
      const newValue = prevVal + step;
      return newValue <= maxVal ? newValue : prevVal;
    });
  };

  const decrement = () => {
    setValue((prevVal) => prevVal - step);
  };

  return (
    <Flex className='items-center'>
      <button
        type='button'
        className={`rounded-full border  p-2 ${
          !value
            ? 'cursor-not-allowed border-gray-200 text-gray-300'
            : 'cursor-pointer border-gray-400 text-gray-500 hover:border-black hover:text-black'
        }`}
        disabled={!value}
        onClick={() => decrement()}
      >
        <AiOutlineMinus className='h-3 w-3' />
      </button>
      <Flex className='w-10 justify-center text-sm'>
        {value}
        {suffix && value === maxVal && '+'}
      </Flex>
      <button
        type='button'
        className={`rounded-full border  p-2 ${
          value === maxVal
            ? 'cursor-not-allowed border-gray-200 text-gray-300'
            : 'cursor-pointer border-gray-400 text-gray-500 hover:border-black hover:text-black'
        }`}
        disabled={value === maxVal}
        onClick={() => increment()}
      >
        <AiOutlinePlus className='h-3 w-3' />
      </button>
    </Flex>
  );
}
