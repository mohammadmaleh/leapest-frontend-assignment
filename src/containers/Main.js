import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

class Main extends Component {
  render() {
    console.log(this.props);
    return <div />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { setFilter }
)(Main);
