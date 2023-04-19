import { Flex, Box, Text } from '@chakra-ui/react';

import StepperButton from '../../../components/Common/StepperButtons';

export default function FloorPlanForm() {
  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-4xl'>
        <Text className='mb-2 text-2xl font-semibold'>Share some basics about your place</Text>
        <Text className='text-gray-500'>You’ll add more details later, like bed types</Text>

        <Flex className='mt-4 w-full justify-between border-b border-gray-300 py-6'>
          <Text>Guests</Text>
          <StepperButton maxVal={16} suffix />
        </Flex>
        <Flex className='mt-4 w-full justify-between border-b border-gray-300 py-6'>
          <Text>Bedrooms</Text>
          <StepperButton />
        </Flex>
        <Flex className='mt-4 w-full justify-between border-b border-gray-300 py-6'>
          <Text>Beds</Text>
          <StepperButton />
        </Flex>
        <Flex className='mt-4 w-full justify-between border-b border-gray-300 py-6'>
          <Text>Bathrooms</Text>
          <StepperButton step={0.5} />
        </Flex>
      </Box>
    </Flex>
  );
}
