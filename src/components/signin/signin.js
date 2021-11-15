import React from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import styles from '../../../styles/styles';

export default function SignIn() {

    return (
      <View style={{backgroundColor: '#40A2FF', flex: 1}}>
        <Image source={require('../../../images/icon.png')} style={styles.signinImage}/>
          <View style={styles.signin}>
          <TextInput style={styles.signinText} placeholder="Nickname"/>
          <TextInput style={styles.signinText} placeholder="Email"/>
          <TextInput style={styles.signinText} placeholder="Contraseña"/>
          <TextInput style={styles.signinText} placeholder="Repetir Contraseña"/>
          <Button color={'#796DF0'} title="Registrarse" 
          onPress={()=> "Futura llamada al servidor"}/>
        </View>
      </View>
      
    );
  }