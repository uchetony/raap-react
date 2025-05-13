import React from "react";
import App from "./App";


const MICROFRONTEND_RENDER_MESSAGE_MAP = {
  RENDER_RANDOM_MICRO_FRONTEND: {
    elementId: "random-micro-frontend",
    render: () => (
      <App>
        Hello from Random Microfrontend
      </App>
    ),
  },
};

const initilaizieMicrofrontend = (renderElement, unMountElement) => {
  window.addEventListener("message", (event) => {
    const eventMessage = event.data.message;

    if (!eventMessage) {
      return;
    }

    if (MICROFRONTEND_RENDER_MESSAGE_MAP[eventMessage]) {
      const { elementId, render } =
        MICROFRONTEND_RENDER_MESSAGE_MAP[eventMessage];
      renderElement(elementId, render);
    }
  });

  window.cleanupMicrofrontend = unMountElement;
};

export default initilaizieMicrofrontend;
