import React, {Component} from "react";
import { Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button, Spinner } from "./Common";
import { emailChanged, passwordChanged, loginUser } from "../Actions";
import { ICombinedReducers, IAction } from "../Reducers";
import { IAuthReducer } from "../Reducers/AuthReducer";
import { Dispatch, bindActionCreators, ActionCreatorsMapObject } from "redux";

interface StateProps {
  email: string;
  password: string;
  error?: string;
  loading: boolean;
};
interface DispatchProps extends ActionCreatorsMapObject {
  emailChanged: (text: string) => IAction
  passwordChanged: (text: string) => IAction,
  loginUser: ({email, password}: {email: string, password: string}) => (dispatch: Dispatch<IAction>)=> void
};

type LoginFormProps = StateProps & DispatchProps

class LoginForm extends Component<LoginFormProps, {}> {
  onEmailChange(text: string) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text: string) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input 
            secureTextEntry={true}
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red",
  }
});

// const mapStateToProps = (state: ICombinedReducers): StateProps => {
const mapStateToProps = ({auth}: {auth: IAuthReducer}): StateProps => {
  const {email, password, error, loading} = auth;
  return {
    email,
    password,
    error,
    loading,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return bindActionCreators<DispatchProps>({ emailChanged, passwordChanged, loginUser }, dispatch);
}

// export default connect<StateProps, DispatchProps, undefined>(mapStateToProps, { emailChanged })(LoginForm);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
