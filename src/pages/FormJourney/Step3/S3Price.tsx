import { useState } from 'react';
import { Flex, Box, Text, Checkbox } from '@chakra-ui/react';
import PriceStepper from '../../../components/Forms/PriceStepper';

export default function PriceForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-2xl'>
        <Text className='mb-2 text-3xl font-semibold'>Now, set your price</Text>
        <Text className='mb-8 text-gray-500'>You can change it anytime.</Text>
        <Flex className='rounded-xl border border-gray-200 bg-gray-50 p-8'>
          <Box className='m-auto'>
            <PriceStepper />
            <Text className='m-auto mt-8 w-2/3 text-center'>
              Places like yours in your area usually range from $2,219 to $3,698
            </Text>
          </Box>
        </Flex>
        <Flex className='mt-6 rounded-xl border border-gray-200 bg-gray-50 p-8'>
          <Box>
            <Text className='font-semibold'>Get booked faster</Text>
            <Text>
              Offer 20% off on your first 3 bookings to help your place stand out.{' '}
              <span className='underline'>Get Details</span>
            </Text>
          </Box>
          <Flex className='items-start'>
            <Checkbox
              variant='black'
              isChecked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              size='lg'
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
