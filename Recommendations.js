import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }


  async componentDidMount() {
    try {
      let options = {
        "method": "GET",
        "hostname": "api.npr.org",
        "port": null,
        "path": "/identity/v2/user?access_token=ac70c6f9f54d7cfce3c76c5b1cc93a53fe98de22459265c5e97a32d8d46db02220e12c4bb701ee3d",
        "headers": {
          "authorization": "Bearer ac70c6f9f54d7cfce3c76c5b1cc93a53fe98de22459265c5e97a32d8d46db02220e12c4bb701ee3d",
          "cache-control": "no-cache",
          "postman-token": "5f9fe8b9-7aac-cea0-af81-91c4b5cf74df"
        }
      };      
      let response = await fetch('https://api.npr.org/listening/v2/recommendations', options);
      let responseJson = await response.json();
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.attributes.affiliations),
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