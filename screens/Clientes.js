import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

import { db } from '../database/firebaseConfig';

const Clientes = () => {
  const [state, setState] = useState({
    nombrecliente: '',
    mailcliente: '',
    telefonocliente: '',
    Observaciones: ''
  });

  const navigation = useNavigation(); // Obtiene la función de navegación

  const hadleChangeText = (nombrecliente, value) => {
    setState({ ...state, [nombrecliente]: value });
  };

  const saveuser = () => {
    if (state.nombrecliente === '') {
      alert('Ingrese los datos');
    } else {
      set(ref(db, 'clientes/nuevo-cliente'), {
        nombre: state.nombrecliente,
        email: state.mailcliente,
        telefono: state.telefonocliente,
        observaciones: state.Observaciones
      });
      alert('Guardado');
    }
  };

  // Función para navegar a la pantalla "Eventos"
  const navigateToEventos = () => {
    navigation.navigate('Eventos');
  };
  const navigateToMisCasos = () => {
    navigation.navigate('MisCasos');
  };

  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder="Nombre Cliente"
          onChangeText={(value) => hadleChangeText('nombrecliente', value)}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email Cliente"
          onChangeText={(value) => hadleChangeText('mailcliente', value)}
        />
      </View>
      <View>
        <TextInput
          placeholder="Telefono Cliente"
          onChangeText={(value) => hadleChangeText('telefonocliente', value)}
        />
      </View>
      <View>
        <TextInput
          placeholder="Observaciones"
          onChangeText={(value) => hadleChangeText('Observaciones', value)}
        />
      </View>
      <View>
        <Button title="Guardar Cliente" onPress={() => saveuser()}></Button>
      </View>

      {/* Agrega un botón para navegar a "Eventos" */}
      <View>
        <Button title="Ir a Eventos" onPress={navigateToEventos}></Button>
      </View>
      <View>
        <Button title="Ir a Mis Casos" onPress={navigateToMisCasos}></Button>
      </View>
    </ScrollView>
  );
};

export default Clientes;
