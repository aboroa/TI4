import React from 'react';
import { View,Button, TextInput, ScrollView, StyleSheet } from 'react-native';

const Clientes = () => {
    return(
        <ScrollView>
            <View>
                <TextInput placeholder='Nombre Cliente'/>
            </View>
            <View>
                <TextInput placeholder='Email Cliente'/>
            </View>
            <View>
                <TextInput placeholder='Telefono Cliente'/>
            </View>
            <View>
                <TextInput placeholder='Observaciones'>
                    El cliente debe entregar los documentos faltantes para..
                </TextInput>
            </View>
            <View>
                <Button title='Guardar Cliente'></Button>
            </View>
        </ScrollView>
    )
}
export default Clientes;
