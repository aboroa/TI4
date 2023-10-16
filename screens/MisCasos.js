import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';

const MisCasos = () => {
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const casosRef = ref(db, 'casos');

    // Escuchar cambios en la base de datos
    const unsubscribe = onValue(casosRef, (snapshot) => {
      const data = snapshot.val();
      const tempList = [];
      for (let key in data) {
        tempList.push(data[key]);
      }
      setCasos(tempList);
    });

    // Limpiar el listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Casos</Text>
      {casos.map((caso, index) => (
        <View key={index} style={styles.case}>
          <Text style={styles.caseTitle}>{caso.Causa}, {caso.Cliente}</Text>
          <Text style={styles.caseDescription}>Descripción del caso: {caso.Descripcion}</Text>
          <Text style={styles.caseDescription}>Fecha: {caso.Fecha}</Text>
        </View>
      ))}
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