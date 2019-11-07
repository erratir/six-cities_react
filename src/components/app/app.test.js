import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mockOffers = [
  {
    "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/7.jpg`,
    "title": `Perfectly located Castro`,
    "type": `room`,
    "price": 290,
    "id": 1,
  },
  {
    "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`,
    "title": `Perfectly located Castro`,
    "type": `house`,
    "price": 876,
    "id": 2,
  }
];


it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App offers={mockOffers} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
