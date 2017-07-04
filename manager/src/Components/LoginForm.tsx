import React, {Component} from "react";
import { connect, DispatchProp, MapStateToPropsParam } from "react-redux";
import { Card, CardSection, Input, Button } from "./Common";
import { emailChanged } from "../Actions";
import { ICombinedReducers, IAction } from "../Reducers";
import { IAuthReducer } from "../Reducers/AuthReducer";

interface ILoginForm {
  email:string
};
interface IActions {
  emailChanged?: (text: string) => IAction
};

declare type LoginFormProps = ILoginForm & IActions
//& React.Props<undefined> 
//& MapStateToPropsParam<{}, {}> 
//& DispatchProp<IActions>

class LoginForm extends Component<LoginFormProps> {
  onEmailChange(text: string) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange.bind(this)}/>
        </CardSection>
        <CardSection>
          <Input secureTextEntry={true} label="Password" placeholder="password" value={this.props.email}/>
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state: ICombinedReducers): ILoginForm => {
  return {email: state.auth.email}
}

export default connect<ILoginForm, ILoginForm, IActions>(mapStateToProps, { emailChanged })(LoginForm);
