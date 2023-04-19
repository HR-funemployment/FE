import { Flex, Box, Text } from '@chakra-ui/react';
import { BsHouseDoor, BsDoorOpen, BsPeople } from 'react-icons/bs';

export default function PrivacyForm() {
  const options = [
    {
      header: 'An entire place',
      description: 'Guests have the whole place to themselves.',
      icon: BsHouseDoor,
    },
    {
      header: 'A private room',
      description: 'Guests sleep in a private room but some areas may be shared with you or others',
      icon: BsDoorOpen,
    },
    {
      header: 'An shared room',
      description: 'Guests sleep in a room or common area that may be shared with you or others',
      icon: BsPeople,
    },
  ];

  return (
    <Flex className='flex-grow items-center justify-center'>
      <Box className='max-w-4xl'>
        <Text className='mb-8 text-2xl font-semibold'>What type of place will guests have?</Text>
        {options.map((option) => (
          <Flex
            key={option.header}
            className='mb-2 cursor-pointer items-center justify-between rounded-xl border border-gray-300 p-4 hover:border-black'
          >
            <Box>
              <Text className='text-lg font-semibold'>{option.header}</Text>
              <Text className='w-4/5 text-sm text-gray-500'>{option.description}</Text>
            </Box>
            <option.icon className='ml-4 h-7 w-7' />
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
