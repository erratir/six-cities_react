import React from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';

const SETTINGS = {
  center: [52.37454, 4.897976],
  marker: true,
  zoom: 12,
  zoomControl: false,
  icon: Leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  }),
};

const LEAFLET_OPTIONS = {
  pic: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  copyright: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,

  /**
   *  V2 - OpenStreetMap:
   *   pic: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
   *   copyright: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
   */
};


class CityMap extends React.PureComponent {

  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
  }

  render() {
    return <section ref={this._mapRef} style={{height: `100%`}} className="cities__map map"/>;
  }

  componentDidMount() {
    if (process && process.env && process.env.NODE_ENV === `test`) { // eslint-disable-line
      return;
    }
    this._createMap();
  }

  _createMap() {
    const {center, marker, zoom, zoomControl, icon} = SETTINGS;
    const {offers} = this.props;

    const map = Leaflet.map(this._mapRef.current, {
      center,
      marker,
      zoom,
      zoomControl,
    });

    map.setView(center, zoom);

    Leaflet.tileLayer(LEAFLET_OPTIONS.pic, {
      updateWhenIdle: true,
      attribution: LEAFLET_OPTIONS.copyright,
    }).addTo(map);

    offers.forEach((offer) => {
      const {latitude, longitude} = offer.city.location;
      return Leaflet
        .marker([latitude, longitude], {icon})
        .addTo(map);
    });
  }

}

CityMap.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CityMap;
