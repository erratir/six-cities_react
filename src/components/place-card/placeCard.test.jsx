import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './placeCard.jsx';

const mockOffer = {
  "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/7.jpg`,
  "title": `Бунгало в попе мира`,
  "type": `room`,
  "price": 99999,
  "id": 9997,
};

it(`PlaceCard correctly renders`, () => {
  const tree = renderer
    .create(<PlaceCard offer={mockOffer} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
