import React from "react";
import App from "./App";
import AccountDetails from "./components/dashboard/components/settings/AccountDetails";

const MICROFRONTEND_RENDER_MESSAGE_MAP = {
  RENDER_ACCOUNT_DETAILS_MICRO_FRONTEND: {
    elementId: "account-details-micro-frontend",
    render: () => (
      <App>
        Acount Details Mircofrontend
        <AccountDetails />
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
