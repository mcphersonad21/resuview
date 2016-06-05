import React from 'react';
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import App from './main.js';
import 'normalize.css/normalize.css';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
