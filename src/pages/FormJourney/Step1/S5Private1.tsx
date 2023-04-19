import { Flex, Box, Text } from '@chakra-ui/react';

import StepperButton from '../../../components/Common/StepperButtons';

export default function BathroomsForm() {
  // total bathrooms has to be less than 50

  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-4xl'>
        <Text className='mb-2 w-5/6 text-2xl font-semibold'>
          What kind of bathrooms are available to guests?
        </Text>

        <Flex className='mt-4 w-full justify-between border-b border-gray-200 py-5'>
          <Box>
            <Text className='font-semibold'>Private and attached</Text>
            <Text className='text-sm text-gray-500'>
              It’s connected to the guest’s room and is just for them.
            </Text>
          </Box>
          <StepperButton step={0.5} />
        </Flex>
        <Flex className='mt-4 w-full justify-between border-b border-gray-200 py-5'>
          <Box>
            <Text className='font-semibold'>Dedicated</Text>
            <Text className='text-sm text-gray-500'>
              It’s private, but accessed via a shared space, like a hallway.
            </Text>
          </Box>
          <StepperButton step={0.5} />
        </Flex>
        <Flex className='mt-4 w-full justify-between border-b border-gray-200 py-5'>
          <Box>
            <Text className='font-semibold'>Shared</Text>
            <Text className='text-sm text-gray-500'>It’s shared with other people.</Text>
          </Box>
          <StepperButton step={0.5} />
        </Flex>
      </Box>
    </Flex>
  );
}
