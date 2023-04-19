import { Flex, Box, Text } from '@chakra-ui/react';

export default function StructureForm() {
  const options = [
    { name: 'House', icon: '' },
    { name: 'Apartment', icon: '' },
    { name: 'Barn', icon: '' },
    { name: 'Bed & Breakfast', icon: '' },
    { name: 'Boat', icon: '' },
    { name: 'Cabin', icon: '' },
    { name: 'Camper/RV', icon: '' },
    { name: 'Casa particular', icon: '' },
    { name: 'Castle', icon: '' },
    { name: 'Cave', icon: '' },
    { name: 'Container', icon: '' },
    { name: 'Cycladic home', icon: '' },
    { name: 'Dammuso', icon: '' },
    { name: 'Dome', icon: '' },
    { name: 'Earth home', icon: '' },
    { name: 'Farm', icon: '' },
    { name: 'Guesthouse', icon: '' },
    { name: 'Hotel', icon: '' },
    { name: 'Houseboat', icon: '' },
    { name: 'Kezhan', icon: '' },
    { name: 'Minsu', icon: '' },
    { name: 'Riad', icon: '' },
    { name: 'Ryokan', icon: '' },
    { name: 'Shepherd’s Hut', icon: '' },
    { name: 'Tent', icon: '' },
    { name: 'Tiny home', icon: '' },
    { name: 'Tower', icon: '' },
    { name: 'Treehouse', icon: '' },
    { name: 'Trullo', icon: '' },
    { name: 'Windmill', icon: '' },
    { name: 'Yurt', icon: '' },
  ];

  return (
    <Flex className='justify-center'>
      <Flex className='flex-col pt-4'>
        <Text className='mb-4 w-2/3 text-2xl font-semibold'>
          Which of these best describes your place?
        </Text>
        <Flex className='max-w-xl flex-wrap gap-2'>
          {options.map((option) => (
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
