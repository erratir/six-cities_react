import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const mockOffer = {
  "previewImage": `https://loremflickr.com/260/200/hostel,room`,
  "title": `Бунгало в попе мира`,
  "isPremium": true,
  "rating": 3.9,
  "type": `room`,
  "price": 99999,
  "id": 9997,
};

it(`PlaceCard correctly renders`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={mockOffer}
      onClick={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
