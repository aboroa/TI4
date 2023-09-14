import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';


//import { Calendar } from 'react-native-calendars';

  const Stack = createStackNavigator()

import Clientes from './screens/Clientes'
import MisCasos from './screens/MisCasos'
import Home from './screens/Home'


function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Clientes" component={Clientes}/>
      <Stack.Screen name="MisCasos" component={MisCasos}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}


export default function app() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'flex-start',
    color: '#db8e37'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },


});
