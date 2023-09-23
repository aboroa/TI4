import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';


import { db } from '../database/firebaseConfig';

const Clientes = () => {
  const [state, setState] = useState({
    nombrecliente: '',
    mailcliente: '',
    telefonocliente: '',
    Observaciones: ''
  });

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
    </ScrollView>
  );
};

export default Clientes;
