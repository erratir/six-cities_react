import React, {Fragment} from "react";
import ReactDOM from "react-dom";

const name = `unknown raccoon`;
const element = <Fragment> Hello, {name} </Fragment>;

const init = () => {
  ReactDOM.render(
      element,
      document.querySelector(`#root`)
  );
};

init();
