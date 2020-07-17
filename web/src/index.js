import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { ApolloProvider } from "react-apollo";

import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createApolloClient } from "./utils/apollo-client";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/graphql";

const WEBSOCKET_API_URL = process.env.REACT_APP_WEBSOCKET_API_URL;
const websocketApiUrl = WEBSOCKET_API_URL
  ? WEBSOCKET_API_URL
  : API_URL.replace("https://", "ws://").replace("http://", "ws://");

const apolloClient = createApolloClient(API_URL, websocketApiUrl);

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ApolloHooksProvider client={apolloClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
