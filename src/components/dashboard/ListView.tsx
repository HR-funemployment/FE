import testArray from './testData';
import RentalListItem from './RentalListItem';
import { Flex, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react';

export default function ListView() {
  return (
    <>
      <Flex bg='blue.100' mt='5' fontFamily='cursive'>Filter placeholder</Flex>
      <UnorderedList styleType="none">
        <SimpleGrid p='20px' spacing={10} minChildWidth={250}>
            {testArray.map((item) => (
              <ListItem key={item.id}>
                <RentalListItem
                  name={item.name}
                  neighborhood={item.neighborhood}
                  price={item.price}
                  photo={item.picture_url}
                  rating={item.review_scores_rating}
                  bedrooms={item.bedrooms}
                  bathrooms={item.bathrooms_text}
                  property_type={item.property_type}
                />
              </ListItem>
            ))}
        </SimpleGrid>
      </UnorderedList>
    </>
  );
}
