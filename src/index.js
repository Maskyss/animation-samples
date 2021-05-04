/* global document */

import React from "react";
import { render } from "react-dom";

import App from "./App";

// By using <Provider />, the store will be made available for all the components in your application.

render(<App />, document.getElementById("root"));
