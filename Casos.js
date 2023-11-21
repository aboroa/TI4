import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

import { db } from '../database/firebaseConfig';

const Casos = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    Causa: '',
    Cliente: '',
    Descripcion: '',
    Fecha: ''
  });
  const hadleChangeText = (Causa, value) => {
    setState({ ...state, [Causa]: value });
  };


  const savecase = (props) => {
    if (state.Causa === '') {
      alert('Ingrese los datos');
    } else {
      set(ref(db, 'casos/caso3' ), {

        Causa: state.Causa,
        Cliente: state.Cliente,
        Descripcion: state.Descripcion,
        Fecha: state.Fecha
      });
      alert('Guardado...')
      navigation.navigate('Home')
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
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Causa"
          onChangeText={(value) => hadleChangeText('Causa', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Cliente"
          onChangeText={(value) => hadleChangeText('Cliente', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripcion"
          onChangeText={(value) => hadleChangeText('Descripcion', value)}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Fecha"
          onChangeText={(value) => hadleChangeText('Fecha', value)}
          multiline={true}
        />
        <View style={styles.buttonContainer}>
          <Button title="Guardar " onPress={() => savecase()} style={styles.button}></Button>
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

export default Casos;
