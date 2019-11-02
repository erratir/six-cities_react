import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

// добавим временно моковые данные
const initialState = {
  offers: [
    {
      "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/7.jpg`,
      "title": `Perfectly located Castro`,
      "type": `room`,
      "price": 290,
      "id": 1,
    },
    {
      "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/6.jpg`,
      "title": `Perfectly located Castro`,
      "type": `house`,
      "price": 876,
      "id": 2,
    },
    {
      "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/15.jpg`,
      "title": `The Joshua Tree House`,
      "type": `hotel`,
      "price": 255,
      "id": 3,
    },
    {
      "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/17.jpg`,
      "title": `Waterfront with extraordinary view`,
      "type": `house`,
      "price": 166,
      "id": 4,
    },
  ],
};

const init = (state) => {
  ReactDOM.render(<App offers={state.offers}/>, document.querySelector(`#root`));
};

init(initialState);

