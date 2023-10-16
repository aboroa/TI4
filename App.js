import { View, Text, StyleSheet } from 'react-native'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//mport * as React from 'react';

//import { Calendar } from 'react-native-calendars';

const Stack = createNativeStackNavigator();

import Login from './screens/Login'
import SignUp from './screens/SignUp'
import AgregarCliente from './screens/AgregarCliente'
import MisCasos from './screens/MisCasos'
import Home from './screens/Home'
import Eventos from './screens/Eventos.js'
import MisClientes from './screens/MisClientes';

function MyStack(){
  return(

      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login}/>

        <Stack.Screen name="SignUp" component={SignUp}/> 

        <Stack.Screen name="Home" component={Home}/> 

        <Stack.Screen name="MisClientes" component={MisClientes}/>

        <Stack.Screen name="AgregarCliente" component={AgregarCliente}/>

        <Stack.Screen name="MisCasos" component={MisCasos}/>

        <Stack.Screen name="Eventos" component={Eventos}/>

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