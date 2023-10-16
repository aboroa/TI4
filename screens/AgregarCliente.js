import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getDatabase, ref, set , push } from 'firebase/database';

const AgregarCliente = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const guardarCliente = () => {
    const database = getDatabase();
    const clientesRef = ref(database, 'clientes');
    const newClienteRef = push(clientesRef);
  
    set(newClienteRef, {
      nombre: nombre,
      email: email,
      telefono: telefono,
      observaciones: observaciones
    }).then(() => {
      Alert.alert("Éxito", "Cliente guardado exitosamente!");
      setNombre('');
      setEmail('');
      setTelefono('');
      setObservaciones('');
    }).catch(error => {
      Alert.alert("Error", "Hubo un error al guardar el cliente. Por favor intenta nuevamente.");
      console.error(error);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        style={styles.input}
      />
      <TextInput
        placeholder="Observaciones"
        value={observaciones}
        onChangeText={setObservaciones}
        style={styles.input}
        multiline
      />
      <Button title="Guardar Cliente" onPress={guardarCliente} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  }
});

export default AgregarCliente;