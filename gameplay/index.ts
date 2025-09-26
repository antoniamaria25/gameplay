import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {stylesSignIn} from './style';
import { TextInput } from 'react-native';
import {useState} from 'react'

export  function SignIn() {
  const [text,setText]= useState("");
  return (
    <View style={stylesSignIn.container}>
      <Text>digite alguma coisa</Text>
      <TextInput style={stylesSignIn.textInput} onChangeText={setText}/>
      
      <Text>Você Digitou: {text}</Text>
    </View>
  );
}

