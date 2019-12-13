import {Actions, reducer} from "./reducer";

/* mocks */
const amsterdamOffers = [
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
];
const brusselsOffers = [
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
  {
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13
      }
    },
    "previewImage": `https://loremflickr.com/260/200/hotel,house`,
    "title": `Bungalow in Paradise`,
    "isPremium": true,
    "rating": 5,
    "type": `room`,
    "price": 999,
    "id": 5,
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
    "id": 6,
  },
];


describe(`Reducer tests`, () => {
  it(`Should return initial state by default`, () => {

    const mock = {
      currentCityName: `Amsterdam`,
      cityOffers: amsterdamOffers
    };
    expect(reducer(void 0, {})).toEqual(mock);
  });

  describe(`Change city action`, () => {
    it(`Should return correct new state`, () => {
      expect(reducer(void 0, {
        payload: `Brussels`,
        type: Actions.CHANGE_CITY_NAME
      })).toHaveProperty(`currentCityName`, `Brussels`);

      expect(reducer(void 0, {
        payload: `NewVasyuki`,
        type: Actions.CHANGE_CITY_NAME
      })).toHaveProperty(`currentCityName`, `NewVasyuki`);
    });
  });

  describe(`Get city offers action`, () => {
    it(`Should return correct new state`, () => {

      expect(reducer(void 0, {
        payload: `Amsterdam`,
        type: Actions.GET_CITY_OFFERS
      })).toHaveProperty(`cityOffers`, amsterdamOffers);

      expect(reducer(void 0, {
        payload: `Brussels`,
        type: Actions.GET_CITY_OFFERS
      })).toHaveProperty(`cityOffers`, brusselsOffers);
    });
  });
});
