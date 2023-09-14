import { View, Text, StyleSheet } from 'react-native'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//mport * as React from 'react';





//import { Calendar } from 'react-native-calendars';

const Stack = createNativeStackNavigator();

import Clientes from './screens/Clientes'
import MisCasos from './screens/MisCasos'
import Home from './screens/Home'


function MyStack(){
  return(

      <Stack.Navigator>
        <Stack.Screen name="MisCasos" component={MisCasos}/>

        <Stack.Screen name="Clientes" component={Clientes}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>

  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

const Style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
