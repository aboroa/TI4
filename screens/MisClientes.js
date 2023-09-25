import React from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, Text } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

import { db } from '../database/firebaseConfig';
const MisClientes = () => {
  const navigation = useNavigation();
  const navigation1 = useNavigation();
  const clientes = [
    {
      nombre: 'Juan Pérez',
      correoElectronico: 'juanperez@gmail.com',
      telefono: '555-1234',
      direccion: 'Calle 123, Ciudad',
      observaciones: 'Cliente debe presentar la documentacion actualizada',
    },
    {
      nombre: 'María García',
      correoElectronico: 'mariagarcia@gmail.com',
      telefono: '555-5678',
      direccion: 'Avenida 456, Ciudad',
      observaciones: '',
    },
  ];

  return (
    <View>
      <Text style={styles.title}>Mis Clientes</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>Nombre</Text>
          <Text style={styles.header}>Correo electrónico</Text>
          <Text style={styles.header}>Teléfono</Text>
          <Text style={styles.header}>Dirección</Text>
          <Text style={styles.header}>Observaciones</Text>
        </View>
        {clientes.map((cliente, index) => (
          <View key={index} style={[styles.row, index % 2 && { backgroundColor: '#e6e6e6' }]}>
            <Text style={{ flex: 1, padding: 10 }}>{cliente.nombre}</Text>
            <Text style={{ flex: 1, padding: 10 }}>{cliente.correoElectronico}</Text>
            <Text style={{ flex: 1, padding: 10 }}>{cliente.telefono}</Text>
            <Text style={{ flex: 1, padding: 10 }}>{cliente.direccion}</Text>
            <Text style={{ flex: 1, padding: 10 }}>{cliente.observaciones}</Text>
            <button title='Agregar Usuarios' onPress={() => navigation1.navigate('Clientes')}></button>
          </View>
        ))}

      </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  header: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
  },
});
export default MisClientes;