import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despacho Jurídico</Text>
      <Text style={styles.subtitle}>Se ha identificado como: Alfonso B</Text>
      <View style={styles.line} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mis casos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reuniones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clientes</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Fechas importantes</Text>
      <Calendar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'flex-start',
    color: '#db8e37'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },


});
