import React, { Component } from "react";
import {StyleSheet} from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";

import reducers from "./Reducers";

import LoginForm from "./Components/LoginForm";
import Router from "./Router";

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
    const app = firebase.initializeApp(config);

    this.setState({firebaseApp: app});
  }

  render() {
    const {container} = styles;
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
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
