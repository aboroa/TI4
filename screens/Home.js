import React from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, Image,  Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation1 = useNavigation();
  const navigation2 = useNavigation();
  const navigation3 = useNavigation();
  const navigation4 = useNavigation();
  const image = require('../images/logo.png');

  return (
    <ScrollView contentContainerStyle={styles.container}>
 <Image source={image} style={[styles.image, { alignSelf: 'center' }]} />
      <text>Estudio Juridico</text>
      <Button title='Mis Casos' onPress={() => navigation1.navigate('MisCasos')} style={styles.button}>
      </Button>
      <Button title='Reuniones' style={styles.button}>
      </Button>
      <Button title='Mis eventos' onPress={() => navigation2.navigate('Eventos')} style={styles.button}>
      </Button>
      <Button title='Mis Clientes' onPress={() => navigation3.navigate('MisClientes')} style={styles.button}>
      </Button>
      <Button title='Agregar Clientes' onPress={() => navigation4.navigate('Clientes')} style={styles.button}>
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
