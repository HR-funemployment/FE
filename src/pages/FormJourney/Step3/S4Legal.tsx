import React, { useState } from 'react';
import { Flex, Box, Text, Checkbox } from '@chakra-ui/react';
import { securityOptions as options } from '../constants';

const securityOptions = {
  cameras: false,
  weapons: false,
  animals: false,
};

type SecurityFormTypes = typeof securityOptions & {
  [key: string]: boolean;
};

export default function LegalForm() {
  const [form, setForm] = useState<SecurityFormTypes>(securityOptions);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  };

  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-2xl'>
        <Text className='mb-2 text-3xl font-semibold'>Just one last step!</Text>
        <Text className='mb-8 text-gray-500'>Does your place have any of these?</Text>

        <Box className='items-start space-y-3 border-b border-gray-300 pb-10'>
          {options.map((option) => (
            <Flex key={option.key} className='justify-between'>
              <Text>{option.value}</Text>
              <Checkbox
                name={option.key}
                variant='black'
                size='lg'
                isChecked={form[option.key]}
                onChange={handleCheck}
              />
            </Flex>
          ))}
        </Box>
        <Box className='mt-10 text-gray-500'>
          <Text className='font-semibold'>Important things to know</Text>
          <Text>
            Be sure to comply with your <span className='underline'>local laws</span> and review
            Airbnb’s <span className='underline'>nondiscrimination policy</span> and{' '}
            <span className='underline'> guest and Host fees.</span>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
