import testArray from './testData';
import RentalListItem from './RentalListItem';
import { Box, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react';

export default function ListView() {
  return (
    <>
      <Box bg="blue.100 " fontFamily="cursive">This is List View</Box>
      <div>Search Bar</div>
      <div>Filter</div>
      <UnorderedList styleType="none">
        <SimpleGrid columns={5}>
            {testArray.map((item) => (
              <ListItem key={item.id}>
                <RentalListItem
                  name={item.name}
                  neighborhood={item.neighborhood}
                  price={item.price}
                  photo={item.picture_url}
                  rating={item.review_scores_rating}
                />
              </ListItem>
            ))}
        </SimpleGrid>
      </UnorderedList>
    </>
  );
}
