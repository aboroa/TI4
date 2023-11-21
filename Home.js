import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Col, Row } from 'react-bootstrap';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../database/firebaseConfig';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigation = useNavigation();
  const user = auth.currentUser;

  return (
    <View>
      <Row style={{blackgroundColor: 'red'}}>

        <text style={{color: 'black',
    fontSize: 35, fontFamily: 'cursive'}}>Despacho Jurídico Temuco</text>
      </Row>
      <Row>
        <Col>
          <ImageBackground
            source={require('../images/fondo.png')}
            style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('MisCasos')}>
              <Text style={{color: 'white',
    fontSize: 20}}>Mis Casos</Text>
            </TouchableOpacity>
          </ImageBackground>
        </Col>
        <Col>
          <ImageBackground
            source={require('../images/reuniones.jpeg')}
            style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Casos')}>
              <Text style={{color: 'white',
    fontSize: 20}}>Agregar Casos</Text>
            </TouchableOpacity>
          </ImageBackground>
        </Col>
      </Row>
      <Row>
        <Col>
          <ImageBackground
            source={require('../images/eventos.png')}
            style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Eventos')}>
              <Text style={{color: 'white',
    fontSize: 20}}>Mis Eventos</Text>
            </TouchableOpacity>
          </ImageBackground>
        </Col>
        <Col>
          <ImageBackground
            source={require('../images/clientes.jpg')}
            style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('MisClientes')}>
              <Text style={{color: 'white',
    fontSize: 20}}>Mis Clientes</Text>
            </TouchableOpacity>
          </ImageBackground>
        </Col>
      </Row>
      <Row>
        <Col>
          <ImageBackground
            source={require('../images/agregar.jpg')}
            style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('AgregarCliente')}>
              <Text style={{color: 'white',
    fontSize: 20}}>Agregar Clientes</Text>
            </TouchableOpacity>
          </ImageBackground>
        </Col>
        <Col>
          <ImageBackground
            source={require('../images/misdatos.jpg')}
            style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('ScreenName')}>
              <Text style={{color: 'white',
    fontSize: 20}}>Mis datos </Text>
            </TouchableOpacity>
          </ImageBackground>
        </Col>
      </Row>
    </View>
  );
};

export default Home;
