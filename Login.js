import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebaseConfig';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./app.css";

const backgroundImages = [
  { src: require('../images/fondo2.jpg') },
  { src: require('../images/fondo.png') },
  { src: require('../images/fondo3.jpg') },
];

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % backgroundImages.length;
    setCurrentIndex(nextInt);
  };

  return (
    <div className="Auth-form-container" style={{ backgroundImage: `url(${backgroundImages[currentIndex].src})` }}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Inicio de Sesión</h3>
          <text>Despacho Jurídico Temuco</text>
          <div className="form-group mt-3">
            <TextInput
              className="form-control mt-1"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={[styles.input]}
            />
          </div>
          <div className="form-group mt-3">
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={[styles.input]}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button title="Sign In" onPress={handleLogin} />
          </div>
          <Image
            source={require('../images/fondo3.jpg')}
            style={{ width: 20, height: 20, cursor: 'pointer', position: 'absolute', right: 20, top: 30 }}
            onClick={handleNextImage}
          />
          <p className="forgot-password text-right mt-2">¿No tienes una cuenta?</p>
          <Button title="Iniciar Sesión" onPress={() => navigation.navigate('SignUp')} />
        </div>
      </form>
    </div>
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
    width: 320,
  },
});

export default Login;