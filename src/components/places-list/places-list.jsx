import React, {Fragment} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = (props) => {
  const {cityOffers} = props;

  return <Fragment>
    {
      cityOffers.map((offer)=> <PlaceCard key={offer.id} offer={offer}/>)
    }
  </Fragment>;

};

PlacesList.propTypes = {
  cityOffers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PlacesList;
