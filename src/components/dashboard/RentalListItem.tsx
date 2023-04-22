import { Box, Badge, Image, Flex, VStack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
// import ListPhoto from './ListPhoto';

interface ListProps {
  name: string;
  neighborhood: string;
  price: string;
  photo: string;
  rating: number;
  bedrooms: number;
  bathrooms: string;
}

export default function RentalListItem({ name, neighborhood, price, photo, rating, bedrooms, bathrooms }: ListProps) {
  return (
    <>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={photo} alt={name} />
        <Box>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Flex justifyContent={'space-between'}>
            <Box
              fontWeight='bold'
              letterSpacing='wide'
              fontSize='xs'
              ml='1'
            >
              {neighborhood}
            </Box>
            <Flex justifyContent={'left'} alignItems={'baseline'}>
              <StarIcon boxSize={3}></StarIcon>
              <Box
                color='gray.500'
                fontWeight='semibold'
                fontSize='xs'
                mr='1'
              >
                {rating}
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent={'left'}>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              ml='1'
            >
              {bedrooms} bedroom,
            </Box>
            <Box
              color='gray.500'
              fontWeight='semibold'
              fontSize='xs'
              mr='1'
            >
              {bathrooms}
            </Box>
          </Flex>
          <Flex mt='2' justifyContent={'left'}>
            <Box
              fontWeight='bold'
              letterSpacing='wide'
              fontSize='xs'
              ml='1'
            >
              {price}
            </Box>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              ml='1'
            >
              night
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
