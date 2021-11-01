import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { mainConnection } from './src/service/MainService';
import styles from './styles/styles';

export default function App() {
  const [response, setResponse] = useState();

  useEffect(() => {
    mainConnection().then(res => {
      setResponse(res.data)
    }).catch(err => {
      setResponse(err)
    })
  })

    return (
      <View style={styles.background}>
        <Text style={styles.input}>{response}</Text>
        <StatusBar style="auto" />
      </View>
    );
  
}