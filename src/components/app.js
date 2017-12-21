import React, { Component } from 'react';
import { connect } from "react-redux";

import * as Actions from "../actions";

class App extends Component {
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, Actions)(App);
