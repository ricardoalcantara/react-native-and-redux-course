import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/login_form';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAjM3PJznjjRzWjSqA6hxLeq8J64y6B3w0',
      authDomain: 'auth-c0f8b.firebaseapp.com',
      databaseURL: 'https://auth-c0f8b.firebaseio.com',
      projectId: 'auth-c0f8b',
      storageBucket: 'auth-c0f8b.appspot.com',
      messagingSenderId: '113139609748'
    });

    firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false: 
        return <LoginForm />;      
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="small" />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
