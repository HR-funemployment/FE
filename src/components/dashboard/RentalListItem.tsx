import { useState } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ListProps {
  name: string;
  neighborhood: string;
  price: string;
  photo: string;
  rating: number;
  bedrooms: number;
  bathrooms: string;
  property_type: string;
}

export default function RentalListItem({ name, neighborhood, price, photo, rating, bedrooms, bathrooms, property_type }: ListProps) {
  const [ liked, setLiked ] = useState(false)
  return (
    <Box maxW='sm' overflow='hidden'>
      <Flex position='relative' justifyContent={'right'}>
        <Box position='absolute' mr='3' mt='3' cursor='pointer'>
          {liked === true ? <FaHeart onClick={() => setLiked(!liked)}></FaHeart> : <FaRegHeart onClick={() => setLiked(!liked)}></FaRegHeart>}
        </Box>
        <Image
          src={photo}
          alt={name}
          borderRadius='lg'
        />
      </Flex>
      <Box>
        <Flex justifyContent={'space-between'} mt='2'>
          <Box
            fontWeight='bold'
            letterSpacing='wide'
            fontSize='xs'
            ml='0.5'
          >
            {neighborhood}
          </Box>
          <Flex justifyContent={'left'} alignItems={'baseline'}>
            <StarIcon boxSize={3} mr='1'></StarIcon>
            <Box
              fontSize='xs'
              mr='0.5'
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
            ml='0.5'
          >
            {bedrooms} bedroom,
          </Box>
          <Box
            color='gray.500'
            fontWeight='semibold'
            fontSize='xs'
            mr='0.5'
          >
            {bathrooms}
          </Box>
        </Flex>
        <Flex justifyContent={'left'}>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            ml='0.5'
          >
            {property_type}
          </Box>
        </Flex>
        <Flex mt='2' justifyContent={'left'}>
          <Box
            fontWeight='bold'
            letterSpacing='wide'
            fontSize='xs'
            ml='0.5'
            mr='0.5'
          >
            {price}
          </Box>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            ml='0.5'
          >
            night
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
