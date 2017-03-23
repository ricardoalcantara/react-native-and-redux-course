import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';
// http://rallycoding.herokuapp.com/api/music_albums
const App = () => {
  return (
    <Header headerText="Album!"/>
  );
}

AppRegistry.registerComponent('albums', () => App);