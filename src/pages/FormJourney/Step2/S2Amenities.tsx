import { Flex, Box, Text } from '@chakra-ui/react';

export default function AmenitiesForm() {
  const amenityOptions = [
    { name: 'Wifi', icon: '' },
    { name: 'TV', icon: '' },
    { name: 'Kitchen', icon: '' },
    { name: 'Washer', icon: '' },
    { name: 'Free parking on premises', icon: '' },
    { name: 'Paid parking on premises', icon: '' },
    { name: 'Air conditioning', icon: '' },
    { name: 'Dedicated workspace', icon: '' },
  ];

  const standoutOptions = [
    { name: 'Pool', icon: '' },
    { name: 'Hot tub', icon: '' },
    { name: 'Patio', icon: '' },
    { name: 'BBQ grill', icon: '' },
    { name: 'Outdoor dining area', icon: '' },
    { name: 'Fire pit', icon: '' },
    { name: 'Pool table', icon: '' },
    { name: 'Indoor fireplace', icon: '' },
    { name: 'Piano', icon: '' },
    { name: 'Exercise Equipment', icon: '' },
    { name: 'Lake access', icon: '' },
    { name: 'Beach access', icon: '' },
    { name: 'Ski-in/Ski-out', icon: '' },
    { name: 'Outdoor shower', icon: '' },
  ];

  const safetyOptions = [
    { name: 'Smoke alarm', icon: '' },
    { name: 'First aid kit', icon: '' },
    { name: 'Fire extinguisher', icon: '' },
    { name: 'Carbon monoxide alarm', icon: '' },
  ];

  return (
    <Flex className='justify-center'>
      <Flex className='flex-col pt-4'>
        <Text className='mb-3 text-2xl font-semibold'>
          Tell guests what your place has to offer
        </Text>
        <Text className='mb-4'>You can add more amenities after you publish your listing</Text>
        <Flex className='mb-8 max-w-xl flex-wrap gap-2'>
          {amenityOptions.map((option) => (
            <Box
              key={option.name}
              className='w-44 cursor-pointer rounded-md border border-gray-300 p-2 hover:border-black'
            >
              <Text className='text-sm font-semibold'>{option.name}</Text>
            </Box>
          ))}
        </Flex>
        <Text className='mb-4 font-semibold'>Do you have any standout amenities?</Text>
        <Flex className='mb-8 max-w-xl flex-wrap gap-2'>
          {standoutOptions.map((option) => (
            <Box
              key={option.name}
              className='w-44 cursor-pointer rounded-md border border-gray-300 p-2 hover:border-black'
            >
              <Text className='text-sm font-semibold'>{option.name}</Text>
            </Box>
          ))}
        </Flex>
        <Text className='mb-4 font-semibold'>Do you have any of these safety items?</Text>
        <Flex className='mb-4 max-w-xl flex-wrap gap-2'>
          {safetyOptions.map((option) => (
            <Box
              key={option.name}
              className='w-44 cursor-pointer rounded-md border border-gray-300 p-2 hover:border-black'
            >
              <Text className='text-sm font-semibold'>{option.name}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
