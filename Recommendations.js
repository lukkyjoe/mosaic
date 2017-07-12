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
      let myInit = {
        "method": "GET",
        "credentials": 'include',
        "headers": {
          "authorization": "Bearer 6e60374c0eb0a12d8da98322feb330b9507e6de56a61469017c938142b199c4dfe3c86e125df257a",
        },
        "mode": "cors"
}  
      let response = await fetch('https://api.npr.org/listening/v2/recommendations', myInit);
      let responseJson = await response.json();
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
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
          renderRow={(rowData) => <Text>{rowData.items}</Text>}
        />
      </View>
    );
  }
}

export default Recommendations;