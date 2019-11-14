import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mockOffers = [
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
  }
];


it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App offers={mockOffers}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
