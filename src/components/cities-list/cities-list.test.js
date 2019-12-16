import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from "./cities-list.jsx";

const offers = [
  {
    "city": {
      "name": `Amsterdam`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/7.jpg`,
    "title": `Perfectly located Castro`,
    "isPremium": false,
    "rating": 4.3,
    "type": `room`,
    "price": 290,
    "id": 1,
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
    "previewImage": `https://loremflickr.com/260/200/hostel,room`,
    "title": `Dark rat hole`,
    "isPremium": false,
    "rating": 2,
    "type": `house`,
    "price": 105,
    "id": 2,
  },
  {
    "city": {
      "name": `NewVasyuki`,
      "location": {
        "latitude": 3.333333,
        "longitude": 9.99999,
        "zoom": 13
      }
    },
    "previewImage": `https://loremflickr.com/260/200/hostel,room`,
    "title": `Dark rat hole`,
    "isPremium": false,
    "rating": 2,
    "type": `house`,
    "price": 105,
    "id": 6,
  },
];

const mock = {
  currentCityName: `Amsterdam`,
  offers,
};

describe(`CitiesList test`, () => {
  it(`CitiesList correctly renders`, () => {
    const tree = renderer
      .create(<CitiesList {...mock} onChangeCity={jest.fn}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
