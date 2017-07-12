import React from 'react';
import {
  AppRegistry,
  Text,
  View, 
  Button, 
  WebView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Mosaic Take Home</Text>
        <Button
          onPress={() => navigate('Login')}
          title="NPR Login"
        />
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'NPR Login ...',
  };
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const reactNativeExample = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
});

AppRegistry.registerComponent('reactNativeExample', () => reactNativeExample);