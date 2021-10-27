/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import StartScreen from './src/screens/StartScreen';
import SelectionScreen from './src/screens/SelectionScreen/SelectionScreen';
import Nav from './src/nav';

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';


// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

const App = () =>{
  return (
    <SafeAreaView style={styles.root}>
      <Nav/>
      {/* <StartScreen/> */}
      {/* <SelectionScreen/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC"
  }
});

export default App;
