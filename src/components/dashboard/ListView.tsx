// import { useState} from 'react';
import testArray from './testData';
import ListItem from './ListItem';

export default function ListView() {
  return (
    <>
      <div>This is List View</div>
      <div>Search Bar</div>
      <div>Filter</div>
      <div>
        {testArray.map((item) => (
          <ul key={testArray[item].id}>
            <ListItem
              name={testArray[item].name}
              neighborhood={testArray[item].neighborhood}
              price={testArray[item].price}
              photo={testArray[item].picture_url}
              rating={testArray[item].review_scores_rating}
            />
          </ul>
        ))}
      </div>
    </>
  );
}
