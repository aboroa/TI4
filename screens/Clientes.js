import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

import { db } from '../database/firebaseConfig';

const Clientes = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    nombrecliente: '',
    mailcliente: '',
    telefonocliente: '',
    Observaciones: ''
  });

  const hadleChangeText = (nombrecliente, value) => {
    setState({ ...state, [nombrecliente]: value });
  };

  const saveuser = (props) => {
    if (state.nombrecliente === '') {
      alert('Ingrese los datos');
    } else {
      set(ref(db, 'clientes/usuario' ), {

        nombre: state.nombrecliente,
        email: state.mailcliente,
        telefono: state.telefonocliente,
        observaciones: state.Observaciones
      });
      alert('Guardado...')
      navigation.navigate('Home')
    }
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nombre Cliente"
          onChangeText={(value) => hadleChangeText('nombrecliente', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Cliente"
          onChangeText={(value) => hadleChangeText('mailcliente', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefono Cliente"
          onChangeText={(value) => hadleChangeText('telefonocliente', value)}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Observaciones"
          onChangeText={(value) => hadleChangeText('Observaciones', value)}
          multiline={true}
        />
        <View style={styles.buttonContainer}>
          <Button title="Guardar Cliente" onPress={() => saveuser()} style={styles.button}></Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#0000FF',
    borderRadius: 10,
    padding: 10,
  },
});

export default Clientes;
