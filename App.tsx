import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { mainConnection } from './src/service/MainService';
import styles from './styles/styles';

export default class App extends React.Component {
  state = { reponse: ""}

  componentDidMount(){
    mainConnection().then(res => {
      this.state.reponse = res.data
    }).catch(err => console.log('Error cause: ' + err))
  }

  render(){
    return (
      <View style={styles.input}>
        <Text>{this.state.reponse}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
}