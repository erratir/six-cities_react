import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';

const mocks = [
  {
    "previewImage": `https://loremflickr.com/260/200/hotel,house`,
    "title": `Bungalow in Paradise`,
    "isPremium": true,
    "rating": 3.9,
    "type": `room`,
    "price": 290,
    "id": 1,
  },
  {
    "previewImage": `https://loremflickr.com/260/200/hostel,room`,
    "title": `Dark rat hole`,
    "isPremium": false,
    "rating": 3,
    "type": `house`,
    "price": 876,
    "id": 2,
  },
  {
    "previewImage": `https://loremflickr.com/260/200/hostel,room`,
    "title": `Beautiful tree house`,
    "isPremium": false,
    "rating": 5,
    "type": `hotel`,
    "price": 255,
    "id": 3,
  },
  {
    "previewImage": `https://loremflickr.com/260/200/hotel,hostel,room/all`,
    "title": `Shelter for cyborgs`,
    "isPremium": true,
    "rating": 4.9,
    "type": `house`,
    "price": 166,
    "id": 4,
  },
];

it(`PlacesList correctly renders`, () => {
  const tree = renderer
    .create(<PlacesList
      cityOffers={mocks}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
