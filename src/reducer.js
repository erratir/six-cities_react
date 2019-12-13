import {OFFERS} from "./mocks/offers";

/* Получаем офферы только для текущего города */
const getCityOffers = (currentCityName, offers) => offers.filter((offer) => offer.city.name === currentCityName);

const currentCityName = OFFERS[0].city.name;

const initialState = {
  currentCityName,
  cityOffers: getCityOffers(currentCityName, OFFERS)
};

const Actions = {
  CHANGE_CITY_NAME: `CHANGE_CITY_NAME`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`
};

const ActionCreators = {
  [Actions.CHANGE_CITY_NAME]: (cityName) => {
    return {
      type: Actions.CHANGE_CITY_NAME,
      payload: cityName
    };
  },
  [Actions.GET_CITY_OFFERS]: (cityName) => {
    return {
      type: Actions.GET_CITY_OFFERS,
      payload: cityName
    };
  }
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  const newState = {};
  switch (type) {
    case Actions.CHANGE_CITY_NAME:
      newState.currentCityName = payload;
      break;
    case Actions.GET_CITY_OFFERS:
      newState.cityOffers = getCityOffers(payload, OFFERS);
      break;
  }

  return Object.assign({}, state, newState);
};

export {Actions, ActionCreators, reducer};
