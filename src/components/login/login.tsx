import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <Text>Nombre Usuario</Text>
      <TextInput
      style={{
        height: 60,
        borderColor: '#000000',
        borderWidth:1
      }}
        

       />
    <Text>Contraseña</Text>
      

     <TextInput
      
      style={{
        height:30,
        borderColor: '#000000',
        borderWidth:1
        
      }}
        secureTextEntry={true}
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