import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import prueba from './src/prueba';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>UrgamesReview</Text>
     
      <StatusBar style="auto" />
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
