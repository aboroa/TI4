import React from 'react';

import { View,Button, TextInput, ScrollView, StyleSheet } from 'react-native';

const Home = () => {
  return(
<ScrollView>
            <View>
                <Button title='Mis Casos'></Button>
            </View>
            <View>
                <Button title='Reuniones'></Button>
            </View>
            <View>
                <Button title='Clientes'></Button>
            </View>
 </ScrollView>
  )
}
export default Home;