import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import styles from '../../../styles/styleSignin';
import {signup} from '../../service/UserService'
import base64 from 'react-native-base64'

export default function SignIn() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  function signIn(){

    if(password === repeatPassword) {
      signup(username, email, base64.encode(password))
      alert('Usuario registrado')
    }
    else alert('Las contraseñas no coinciden')
  }

    return (
      <View style={{backgroundColor: '#40A2FF', flex: 1}}>
        <Image source={require('../../../images/icon.png')} style={styles.signinImage}/>
          <View style={styles.signin}>
          <TextInput 
                style={styles.signinText} 
                placeholder="Nickname"
                onChangeText={(name) => setUsername(name)}
          />
          <TextInput 
                style={styles.signinText} 
                placeholder="Email"
                onChangeText={(mail) => setEmail(mail)}
                />
          <TextInput 
                style={styles.signinText} 
                placeholder="Contraseña" 
                onChangeText={(pass) => setPassword(pass)}
                secureTextEntry={true}
          />
          <TextInput 
                style={styles.signinText} 
                placeholder="Repetir Contraseña"
                onChangeText={(pass) => setRepeatPassword(pass)}
                secureTextEntry={true}
          />
          <Button color={'#796DF0'} title="Registrarse" 
          onPress={()=> signIn()}/>
        </View>
      </View>
      
    );
  }