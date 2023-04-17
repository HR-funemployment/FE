// import { useState} from 'react';
import testArray from './testData';
import ListItem from './ListItem';

export default function ListView() {
  console.log('testArray: ', testArray);
  return (
    <>
      <div>This is List View</div>
      <div>Search Bar</div>
      <div>Filter</div>
      <div>
        {testArray.map((item) => (
          <ul key={item.id}>
            <ListItem
              name={item.name}
              neighborhood={item.neighborhood}
              price={item.price}
              photo={item.picture_url}
              rating={item.review_scores_rating}
            />
          </ul>
        ))}
      </div>
    </>
  );
}
