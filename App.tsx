import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { mainConnection } from './src/service/MainService';
import styles from './styles/styles';
import Header from './src/customElements/header';

export default function App() {
  const [response, setResponse] = useState();
  const headerBar = Header();

  useEffect(() => {
    mainConnection().then(res => {
      setResponse(res.data)
    }).catch(err => {
      setResponse(err)
    })
  })

    return (
      <View style={styles.background}>
        {() => Header()}
        <Text style={styles.input}>{response}</Text>
        <StatusBar style="auto" />
      </View>
    );
  
}