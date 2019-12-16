import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const offers = [
  {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.88,
        "zoom": 13
      }
    },
    "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`,
    "title": `Bright clean room`,
    "isPremium": true,
    "rating": 4.7,
    "type": `house`,
    "price": 876,
    "id": 2,
  },
  {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.364,
        "longitude": 4.89,
        "zoom": 13
      }
    },
    "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/15.jpg`,
    "title": `The Joshua Tree House`,
    "isPremium": false,
    "rating": 3.3,
    "type": `hotel`,
    "price": 255,
    "id": 3,
  },
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`,
    "title": `Waterfront with extraordinary view`,
    "isPremium": false,
    "rating": 3.9,
    "type": `house`,
    "price": 166,
    "id": 4,
  },
];
const cityOffers = [offers[0], offers[1]];

const mock = {
  currentCityName: offers[0].city.name,
  cityOffers,
  offers,
  onChangeCity: () => {}
};


it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App {...mock}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
