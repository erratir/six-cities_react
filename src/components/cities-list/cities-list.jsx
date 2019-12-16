import React from "react";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {currentCityName, offers, onChangeCity} = props;

  const availableCities = [...new Set(offers.map((offer) => offer.city.name))];

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {availableCities.map((cityName, i) => (
        <li className="locations__item" key={`city-${cityName}-${i}`}>
          <a
            className={`locations__item-link tabs__item ${currentCityName === cityName ? `tabs__item--active` : ``}`}
            href="#"
            onClick={() => onChangeCity(cityName)}
          >
            <span>{cityName}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>;
};

CitiesList.propTypes = {
  currentCityName: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

export default CitiesList;
