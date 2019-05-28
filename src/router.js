import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Details from "./containers/Details/Details";
import { Switch } from "react-router-dom";
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route exact="/" component={App} />
        <Route component={App} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};
export default Root;
