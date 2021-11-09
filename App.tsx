import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import prueba from './src/prueba';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput
      style={{
        height: 60,
        borderColor: '#000000',
        borderWidth:1
      }}
        defaultValue="nombre usuario"

       />
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
