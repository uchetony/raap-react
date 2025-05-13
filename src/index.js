import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import initilaizieMicrofrontend from "./microfrontend";

// modules
import "./modules/font-awesome";

const renderElement = (elementId, render) => {
  const node = document.getElementById(elementId);

  if (node) {
    ReactDOM.render(
      <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
          {render()}
        </React.Suspense>
      </React.StrictMode>,
      node
    );
  }
};

const unMountElement = (elementId) => {
  const node = document.getElementById(elementId);

  if (node) {
    ReactDOM.unmountComponentAtNode(node);
  }
};

initilaizieMicrofrontend(renderElement, unMountElement);

renderElement("root", () => <App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
