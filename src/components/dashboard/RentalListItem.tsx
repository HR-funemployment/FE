import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import ListPhoto from './ListPhoto';

interface ListProps {
  name: string;
  neighborhood: string;
  price: string;
  photo: string;
  rating: number;
}

export default function RentalListItem({ name, neighborhood, price, photo, rating }: ListProps) {
  return (
    <>
      <Flex>
        <VStack spacing="10px" fontSize="sm">
          <ListPhoto photo={photo} />
          <Box display="flex" flexDirection="row" alignItems='left'>
            <Text as="b" alignItems='left'>{neighborhood}</Text>
            <Box alignItems='right'>{rating}</Box>
          </Box>
          <Text>{name}</Text>
          <Box>{price}</Box>
        </VStack>
      </Flex>
    </>
  );
}
