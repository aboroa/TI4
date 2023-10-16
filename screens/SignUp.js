import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebaseConfig';
import { db } from '../database/firebaseConfig';
import { set, ref } from 'firebase/database';

const SignUp = ({ navigation }) => { // Asegúrate de desestructurar navigation aquí
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      console.log("Intentando registrar el usuario..."); // Agregamos esto

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Usuario registrado en Auth..."); 

      // Almacenar 'name', 'surname', y 'email' en la Realtime Database
      const userRef = ref(db, 'users/' + user.uid);
      await set(userRef, {
        name: name,
        surname: surname,
        email: email,
        uid: user.uid
      });

      console.log("Usuario registrado en la base de datos..."); // Agregamos esto

      // Mostrar un mensaje al usuario
      Alert.alert(
        "Usuario registrado con éxito",
        [
          { text: "OK", onPress: () => navigation.navigate('Home') }
        ]
      );

    } catch (error) {
      console.error("Error al registrar el usuario:", error); // Modificamos el alert por un console.error
    }
};

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Apellido" value={surname} onChangeText={setSurname} style={styles.input} />
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Registrarse" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default SignUp;