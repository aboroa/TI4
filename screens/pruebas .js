
import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

import { db } from '../database/firebaseConfig';


const pruebas = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Trae todos los usuarios de la base de datos de Firebase.
    const ref = db.ref('https://abogados-bac85-default-rtdb.firebaseio.com/');
    ref.on('value', snapshot => {
      const users = [];
      snapshot.forEach(childSnapshot => {
        const user = childSnapshot.val();
        users.push(user);
      });
      setUsers(users);
    });
  }, []);

  // Guarda un nuevo usuario en la base de datos de Firebase.
  const handleAddUser = () => {
    const newUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    const ref = db.ref('https://abogados-bac85-default-rtdb.firebaseio.com/');
    ref.push(newUser);
  };

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Agregar usuario</button>
    </div>
  );
};

export default pruebas;