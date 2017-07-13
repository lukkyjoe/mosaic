import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
} from 'react-native';
import DoubleClick from 'react-native-double-click';
 
export default class doubleClicker extends Component {
  constructor() {
    super();
 
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {
    Alert.alert('This is awesome \n Double tap succeed');
  }
 
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text style={{ fontSize: 20 }}>
          Welcome to React Native!
        </Text>
        <DoubleClick onClick={this.handleClick}>
          <Text style={{ fontSize: 26 }}>
            Please tap me twice!
          </Text>
        </DoubleClick>
      </View>
    );
  }
}