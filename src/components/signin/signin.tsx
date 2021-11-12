import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    return (
      <View>
         <Text>Registro</Text>
        <TextInput defaultValue="Nickname"/>
        <TextInput defaultValue="Email"/>
        <TextInput defaultValue="Contraseña"/>
        <TextInput defaultValue="Repetir Contraseña"/>
        <Button title="BUTTON" disabled 
        onPress={()=> ""}/>
        <StatusBar style="auto" />
      </View>
    );
  }