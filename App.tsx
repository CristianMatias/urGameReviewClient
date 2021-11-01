import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { mainConnection } from './src/service/MainService';

export default class App extends React.Component {
  state = { reponse: ""}

  componentDidMount(){
    mainConnection().then(res => {
      this.state.reponse = res.data
    }).catch(err => console.log('Error cause: ' + err))
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.reponse}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
