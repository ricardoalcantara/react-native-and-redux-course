import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { Header } from './components/common';

class LibraryList extends Component {
  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);
