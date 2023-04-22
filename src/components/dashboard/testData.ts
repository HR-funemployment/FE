interface Listing {
  id: number;
  listing_url: string;
  name: string;
  description: string;
  neighborhood_overview: string;
  picture_url: string;
  neighborhood: string;
  property_type: string;
  room_type: string;
  accommodates: number;
  bathrooms_text: string;
  bedrooms: number;
  beds: number;
  amenities: string[];
  price: string;
  review_scores_rating: number;
}

const testData: Listing = {
  id: 5456,
  listing_url: 'https://www.airbnb.com/rooms/5456',
  name: 'Walk to 6th, Rainey St and Convention Ctr',
  description: `Great central  location for walking to Convention Center, Rainey Street, East 6th Street, Downtown, Congress Ave Bats.<br /><br />  Free wifi<br /><br />No Smoking,  No pets<br /><br /><b>The space</b><br />Cute Private  Studio apartment located in Willow Spence National Historic District.  It is  walking distance from Convention Center (3 1/2 blks) and Entertainment District. Save on cab fares.  Bus stop around the corner, takes you straight downtown.  <br /><br />Worried about food?  Great food abounds!  Iron works BBQ 3 blks away,  Cenote ,   Rainey Street with bars and restaurants only 2 1/2 blks away , all within a safe walking distance.  Whole Foods and Target  and multiple restaurant and bars are only 6 blks away.<br /> The apartment is located upstairs above garage, completely separate from the main house.  This little 1930's apartment features wood floors and lots of windows.   The kitchen has a full size refrigerator, sink, granite counter-top, microwave, hotpot, toaster oven`,
  neighborhood_overview:
    'My neighborhood is ideally located if you want to walk to bars and restaurants downtown, East 6th Street or Rainey Street.  The Convention Center is only 3 1/2 blocks away and a quick 10 minute walk. Whole foods store located 5 blks , easily walkable.',
  picture_url: 'https://a0.muscache.com/pictures/14084884/b5a35a84_original.jpg',
  neighborhood: 'Austin, Texas, United States',
  property_type: 'Entire guesthouse',
  room_type: 'Entire home/apt',
  accommodates: 3,
  bathrooms_text: '1 bath',
  bedrooms: 1,
  beds: 2,
  amenities: [
    'Heating',
    'Backyard',
    'Bed linens',
    'Hot water',
    'Shampoo',
    'Wifi',
    'Essentials',
    'HDTV with Amazon Prime Video, HBO Max, Hulu, Netflix, Roku',
    'Iron',
    'Smoke alarm',
    'Coffee maker',
    'Microwave',
    'Patio or balcony',
    'Keypad',
    'Refrigerator',
    'Security cameras on property',
    'Private entrance',
    'Dishes and silverware',
    'Kitchen',
    'Self check-in',
    'Free street parking',
    'Luggage dropoff allowed',
    'Extra pillows and blankets',
    'Long term stays allowed',
    'Hair dryer',
    'Air conditioning',
    'Hangers',
  ],
  price: '$176.00',
  review_scores_rating: 4.84,
};

const testArray = [
  testData,
  testData,
  testData,
  testData,
  testData,
  testData,
  testData,
  testData,
  testData,
  testData,
];

export default testArray;
