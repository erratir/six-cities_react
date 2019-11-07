import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {OFFERS} from "./mocks/offers";

const init = () => {
  ReactDOM.render(<App offers={OFFERS}/>, document.querySelector(`#root`));
};

init();

