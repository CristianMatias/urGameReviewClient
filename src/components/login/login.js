import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { login } from '../../service/UserService';
import base64 from 'react-native-base64'


export default function Login({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function logUp(){
    login(username, password)
    //navigation.push('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput 
          placeholder = "Nombre de usuario"
          onChangeText={(name) => setUsername(name)} 
          style={{height: 60, borderColor: '#000000', borderWidth:1}}
      />

      <TextInput 
          placeholder = "Contraseña"
          onChangeText={(password) => setPassword(password)}
          style={{height:30, borderColor: '#000000', borderWidth:1}}  
          secureTextEntry={true} 
      />

      <Button 
          title="Iniciar sesión" 
          onPress={() => logUp()}
      />

      <Text style={{color: 'blue'}} onPress={() => navigation.push('Registrarse')}>¿No tienes cuenta? Regístrate</Text>
      
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