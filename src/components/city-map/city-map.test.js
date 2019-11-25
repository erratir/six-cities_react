import React from 'react';
import renderer from 'react-test-renderer';

import CityMap from './city-map.jsx';

const offers = [
  {
    "city": {
      "name": `Kukuevo`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13,
      },
    },
  },
  {
    "city": {
      "name": `New Vasuki`,
      "location": {
        "latitude": 50.938361,
        "longitude": 6.959974,
        "zoom": 13,
      },
    },
  },
  {
    "city": {
      "name": `Мухосранск`,
      "location": {
        "latitude": 51.225402,
        "longitude": 6.776314,
        "zoom": 13,
      },
    },
  },
];

describe(`CityMap component`, () => {
  it(`render correctly`, () => {
    const tree = renderer
      .create(<CityMap offers={offers}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
