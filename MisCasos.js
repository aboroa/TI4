import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const MisCasos = () => {
  const [miscasos, setMisCasos] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const casosRef = ref(db, 'casos');

    const handleData = snapshot => {
      const data = snapshot.val();
      const casosList = [];
      for (let id in data) {
        casosList.push({ id, ...data[id] });
      }
      setMisCasos(casosList);
    };

    onValue(casosRef, handleData, error => {
      console.error(error);
    });

    return () => {
      // Cleanup: Desvincular el listener para evitar múltiples llamadas y potenciales errores de memoria
      off(casosRef, handleData);
    };
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.title}>Mis Casos</Text>
      {miscasos.map(caso => (
        <View key={caso.id} style={styles.container}>
          <Text style={styles.casoText}>Causa: {caso.Causa}</Text>
          <Text style={styles.casoText}>Cliente: {caso.Cliente}</Text>
          <Text style={styles.casoText}>Descripcion: {caso.Descripcion}</Text>
          <Text style={styles.casoText}>Fecha: {caso.Fecha}</Text>
        </View>
      ))}
    </ScrollView>
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
  caso: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  casoText: {
    marginBottom: 5,
  },
  casoDescription: {
    marginBottom: 5,
  },
});

export default MisCasos;