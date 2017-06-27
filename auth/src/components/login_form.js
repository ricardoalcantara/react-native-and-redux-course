import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '', password: '', status: '', error: '', loading: false};

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      status: 'Logging in',
      error: '', 
      loading: true
    });

    firebase
    .auth()
    .signInWithEmailAndPassword(email.trim(), password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      this.setState({status: 'User not found, trying to create an account'});
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess() {
      this.setState({
        email: '', 
        password: '',
        loading: false,
        status: '',
        error: ''
      });    
  }

  onLoginFail() {
    this.setState({
      status: '', 
      error: 'Authentication Failed.',
      loading: false,
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  renderStatus () {
    const { errorTextStyle, statusTextStyle } = styles;
    
    if (this.state.error) {
      return (
        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>
      );
    }

    if (this.state.status) {
      return (
        <Text style={statusTextStyle}>
          {this.state.status}
        </Text>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={ email => this.setState( {email} )}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            secureTextEntry
            value={this.state.password}
            onChangeText={ password => this.setState( {password} )}
          />
        </CardSection>

        {this.renderStatus()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  statusTextStyle: {
    fontSize: 16,
    alignSelf: 'center'
  }
}

export default LoginForm;
