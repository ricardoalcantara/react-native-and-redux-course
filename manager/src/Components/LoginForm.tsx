import React, {Component} from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button } from "./Common";
import { emailChanged, passwordChanged } from "../Actions";
import { ICombinedReducers, IAction } from "../Reducers";
import { IAuthReducer } from "../Reducers/AuthReducer";
import { Dispatch, bindActionCreators, ActionCreatorsMapObject } from "redux";

interface StateProps {
  email:string;
  password:string;
};
interface DispatchProps extends ActionCreatorsMapObject {
  emailChanged: (text: string) => IAction
  passwordChanged: (text: string) => IAction
};

type LoginFormProps = StateProps & DispatchProps

class LoginForm extends Component<LoginFormProps, {}> {
  onEmailChange(text: string) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text: string) {
    this.props.passwordChanged(text);
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
        <CardSection>
          <Button onPress={() => Alert.alert("Message", `${this.props.email} - ${this.props.password}`)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state: ICombinedReducers): StateProps => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return bindActionCreators<DispatchProps>({ emailChanged, passwordChanged }, dispatch);
}

// export default connect<StateProps, DispatchProps, undefined>(mapStateToProps, { emailChanged })(LoginForm);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
