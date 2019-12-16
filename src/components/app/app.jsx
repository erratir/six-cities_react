import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Actions, ActionCreators} from "../../reducer.js";

const App = (props) => {
  const {offers, currentCityName, cityOffers, onChangeCity} = props;
  return <Main offers = {offers} cityOffers={cityOffers} currentCityName={currentCityName} onChangeCity={onChangeCity}/>;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  cityOffers: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  currentCityName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCity: (newCity) => {
      dispatch(ActionCreators[Actions.CHANGE_CITY_NAME](newCity));
      dispatch(ActionCreators[Actions.GET_CITY_OFFERS](newCity));
    }
  };
};

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
