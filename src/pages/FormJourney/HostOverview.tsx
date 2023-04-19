import { Flex, Text, Box, Image } from '@chakra-ui/react';

export default function HostOverview() {
  const steps = [
    {
      header: 'Tell us about your place',
      description: 'Share some basic info, like where it is and how many guests can stay',
      url: '../../../public/assets/images/overview-1.webp',
    },
    {
      header: 'Make it stand out',
      description:
        'Make it stand out Add 5 or more photos plus a title and description—we’ll help you out.',
      url: '../../../public/assets/images/overview-2.webp',
    },
    {
      header: 'Finish up and publish',
      description:
        'Choose if you’d like to start with an experienced guest, set a starting price, and publish your listing.',
      url: '../../../public/assets/images/overview-3.webp',
    },
  ];

  const newLocal = 'flex-grow items-center justify-center';
  return (
    <Flex className={newLocal}>
      <Flex className='w-full max-w-6xl'>
        <Flex className='w-1/2 flex-col items-start justify-center px-4'>
          <Text className='mb-4 text-5xl font-semibold'>It’s easy to get started on Airbnb</Text>
        </Flex>
        <Flex className='w-1/2 flex-col px-4'>
          {steps.map((step, idx) => (
            <Flex key={step.header} className='mb-4 border-b border-gray-300 pb-4'>
              <Text className='mr-3 text-xl font-semibold'>{idx + 1}</Text>
              <Box>
                <Text className='mb-2 text-xl font-semibold'>{step.header}</Text>
                <Text className='text-lg'>{step.description}</Text>
              </Box>
              <Image src={step.url} alt={`overview-${idx + 1}`} className='h-28 w-28' />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
