import React from 'react';
import { StyleSheet, View } from 'react-native';

import Search from './components/Search';
export default class App extends React.Component {
  
  render() {
    return (
      <Search/>
    );
  }
}

const styles = StyleSheet.create({
  viewTabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
