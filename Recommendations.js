import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }


  async componentDidMount() {
    try {
      let myRequest = new Request ('https://api.npr.org/listening/v2/recommendations', myInit)
      let myInit = {
        "method": "GET",
        "headers": {
          "authorization": "Bearer ec47b4a995772bdf0f998e41f100114a49fb773e9a4e59748113594070a3f5c6466ae0f42a20a634&state=test123&uidt=1499887503",
        },
        "mode": "cors"
      };      
      let response = await fetch(myRequest);
      let responseJson = await response.json();
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.toString()),
      }, function() {
        // do something with new state
      });
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

export default Recommendations;