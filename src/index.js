import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GithubProvider } from "./context";

import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </StrictMode>
);
