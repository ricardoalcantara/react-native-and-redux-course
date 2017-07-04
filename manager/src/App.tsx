import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from 'firebase';

import reducers from "./Reducers";

import LoginForm from "./Components/LoginForm";

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAjM3PJznjjRzWjSqA6hxLeq8J64y6B3w0",
      authDomain: "auth-c0f8b.firebaseapp.com",
      databaseURL: "https://auth-c0f8b.firebaseio.com",
      projectId: "auth-c0f8b",
      storageBucket: "auth-c0f8b.appspot.com",
      messagingSenderId: "113139609748"
    };
    firebase.initializeApp(config);
  }

  render() {
    const {container} = styles;

    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
