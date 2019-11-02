import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Main offers = {props.offers} />;
};

export default App;
