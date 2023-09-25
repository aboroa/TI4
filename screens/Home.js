import React from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const image = require('../images/logo.png');

  return (
    <ScrollView contentContainerStyle={styles.container}>
 <Image source={image} style={[styles.image, { alignSelf: 'center' }]} />
      <text>Estudio Juridico</text>
      <Button title='Mis Casos' onPress={() => navigation.navigate('MisCasos')} style={styles.button}>
        <Text style={styles.buttonText}>Ver todos tus casos</Text>
      </Button>
      <Button title='Reuniones' style={styles.button}>
        <Text style={styles.buttonText}>Ver todas tus reuniones</Text>
      </Button>
      <Button title='Mis eventos' onPress={() => navigation.navigate('MisEventos')} style={styles.button}>
        <Text style={styles.buttonText}>Ver todos tus eventos</Text>
      </Button>
      <Button title='Mis Clientes' onPress={() => navigation.navigate('MisClientes')} style={styles.button}>
        <Text style={styles.buttonText}>Ver todos tus clientes</Text>
      </Button>
      <Button title='Agregar Clientes' onPress={() => navigation.navigate('Clientes')} style={styles.button}>
        <Text style={styles.buttonText}>Ver todos tus clientes</Text>
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    
    backgroundColor: '#0000FF',
    margin: 50,
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
