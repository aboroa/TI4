import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const MisClientes = () => {
  const [misclientes, setMisClientes] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const clientesRef = ref(database, 'clientes');

    const handleData = snapshot => {
      const data = snapshot.val();
      const clientesList = [];
      for (let id in data) {
        clientesList.push({ id, ...data[id] });
      }
      setMisClientes(clientesList);
    };

    onValue(clientesRef, handleData, error => {
      console.error(error);
    });

    return () => {
      // Cleanup: Desvincular el listener para evitar múltiples llamadas y potenciales errores de memoria
      off(clientesRef, handleData);
    };

  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.title}>Mis Clientes</Text>
      {misclientes.map(cliente => (
        <View key={cliente.id} style={styles.clienteContainer}>
          <Text style={styles.clienteText}>Nombre: {cliente.nombre}</Text>
          <Text style={styles.clienteText}>Correo electrónico: {cliente.email}</Text>
          <Text style={styles.clienteText}>Teléfono: {cliente.telefono}</Text>
          <Text style={styles.clienteText}>Observaciones: {cliente.observaciones}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  clienteContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  clienteText: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default MisClientes;