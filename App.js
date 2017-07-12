import React from 'react';
import {
  AppRegistry,
  Text,
  View, 
  Button, 
  WebView, 
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RecommendationsScreen from './Recommendations';
import PlayScreen from './Play';

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
        source={{uri: 'https://api.npr.org/authorization/v2/authorize?client_id=nprone_trial_XYXQFXKhCemn&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth2%2Fcallback&response_type=code&scope=identity.readonly%20listening.readonly&state=test123'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const reactNativeExample = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Recommendations: { screen: RecommendationsScreen },
  Play: { screen: PlayScreen }
});

AppRegistry.registerComponent('reactNativeExample', () => reactNativeExample);