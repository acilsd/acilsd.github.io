import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class ProgressBar extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <LinearProgress size={2}/>
      </MuiThemeProvider>
    );
  }
}

export default ProgressBar;
