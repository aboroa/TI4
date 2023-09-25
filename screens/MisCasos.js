import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MisCasos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Casos</Text>
      <View style={styles.case}>
        <Text style={styles.caseTitle}>Divorcio, Juan Perez</Text>
        <Text style={styles.caseDescription}>Descripción del caso:</Text>
        <Text style={styles.caseDescription}>Divorcio por diferencias irreconciliables, ambos de acuerdo con el divorcio.</Text>
        <Text style={styles.caseDescription}>Fecha: 25 de septiembre de 2023.</Text>
      </View>
      <View style={styles.case}>
        <Text style={styles.caseTitle}>Pensión Alimenticia, Juan Lopez</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  case: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  caseTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caseDescription: {
    marginBottom: 5,
  },
});

export default MisCasos;
