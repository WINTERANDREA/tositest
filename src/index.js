import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Client from "shopify-buy";
import "./app.css";

const client = Client.buildClient({
  storefrontAccessToken: "ad98d2436324e35912d30044e0498bfd",
  domain: "tositestdev.myshopify.com",
});

ReactDOM.render(<App client={client} />, document.getElementById("root"));
