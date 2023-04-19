import { Flex, Box, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react';

import StepperButton from '../../../components/Common/StepperButtons';

export default function FloorPlanForm() {
  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-4xl'>
        <Text className='mb-2 text-2xl font-semibold'>Share some basics about your place</Text>
        <Text className='text-gray-500'>You’ll add more details later, like bed types</Text>

        <Flex className='mt-4 w-full justify-between border-b border-gray-200 py-5'>
          <Text>Guests</Text>
          <StepperButton maxVal={16} suffix />
        </Flex>
        {/* Does not show for shared */}
        <Flex className='mt-4 w-full justify-between border-b border-gray-200 py-5'>
          <Text>Bedrooms</Text>
          <StepperButton />
        </Flex>
        <Flex className='mt-4 w-full justify-between border-b border-gray-200 py-5'>
          <Text>Beds</Text>
          <StepperButton />
        </Flex>
        {/* Bathroom only shows for whole home + shared */}
        <Flex className='mt-4 w-full justify-between py-5'>
          <Text>Bathrooms</Text>
          <StepperButton step={0.5} />
        </Flex>

        {/* Section below only available for private room */}
        {/* <Flex className='mt-8 flex-col'>
          <Text className='font-semibold'>Does every bedroom have a lock?</Text>
          <RadioGroup className='mt-2'>
            <Stack direction='column'>
              <Radio value='2'>Yes</Radio>
              <Radio value='3'>No</Radio>
            </Stack>
          </RadioGroup>
        </Flex> */}
      </Box>
    </Flex>
  );
}
