import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/login_form';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAjM3PJznjjRzWjSqA6hxLeq8J64y6B3w0',
      authDomain: 'auth-c0f8b.firebaseapp.com',
      databaseURL: 'https://auth-c0f8b.firebaseio.com',
      projectId: 'auth-c0f8b',
      storageBucket: 'auth-c0f8b.appspot.com',
      messagingSenderId: '113139609748'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
