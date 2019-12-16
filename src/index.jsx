import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";

import App from "./components/app/app.jsx";
import {OFFERS} from "./mocks/offers";

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}><App offers={OFFERS}/></Provider>,
      document.querySelector(`#root`)
  );
};

init();

