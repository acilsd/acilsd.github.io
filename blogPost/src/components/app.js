import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
