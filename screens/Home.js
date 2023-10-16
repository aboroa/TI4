import React from 'react';
import { View, Button, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../database/firebaseConfig';

const Home = () => {
  const navigation = useNavigation();
  const user = auth.currentUser; // Obtiene el usuario actual
  const image = require('../images/logo.png');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={image} style={[styles.image, { alignSelf: 'center' }]} />
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Estudio Juridico</Text>
      {user && <Text style={{ marginBottom: 10 }}>Bienvenido, {user.email}</Text>}
      <Button title='Mis Casos' onPress={() => navigation.navigate('MisCasos')} style={styles.button} />
      <Button title='Reuniones' style={styles.button} />
      <Button title='Mis eventos' onPress={() => navigation.navigate('Eventos')} style={styles.button} />
      <Button title='Mis Clientes' onPress={() => navigation.navigate('MisClientes')} style={styles.button} />
      <Button title='Agregar Clientes' onPress={() => navigation.navigate('AgregarCliente')} style={styles.button} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch'
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#0000FF',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Home;