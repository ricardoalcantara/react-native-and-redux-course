import React, {Component} from 'react';
import { 
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  renderDescriptions() {
    const {library, expanded} = this.props;

    if (expanded) {
      return (
        <CardSection>
           <Text>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescriptions()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  titleStyle: {
    fontSize: 22,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);