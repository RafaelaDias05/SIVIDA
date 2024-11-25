import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // Usando o Google Maps como provedor
import NotificationBar from '../components/NotificationBar';
import MenuOptions from '../components/MenuOptions';

export default function Screen3() {
  return (
    <View style={styles.container}>
      <NotificationBar />
      <MapView
        provider={PROVIDER_GOOGLE} // Definindo explicitamente o Google Maps como provedor
        style={styles.map}
        initialRegion={{
          latitude: -14.864,
          longitude: -40.839,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <MenuOptions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Preenche toda a tela
  },
});
