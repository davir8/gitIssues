import React, { Component } from 'react';
import '~/config/ReactotronConfig';
import Routes from './routes';

export default class App extends Component {
  state = {};

  render() {
    return <Routes />;
  }
}
