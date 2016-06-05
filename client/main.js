import React from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {purple800} from 'material-ui/styles/colors';

const styles = {
  appBarStyle: {
    backgroundColor: purple800
  }
};

const App = () => (
 <MuiThemeProvider  >
    <AppBar
      title="Resuview"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={styles.appBarStyle}
     />
  </MuiThemeProvider>
);

export default App;
