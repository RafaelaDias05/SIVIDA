import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // Importando o provedor do Google Maps
import NotificationBar from '../components/NotificationBar';
import MenuOptions from '../components/MenuOptions';

export default function Screen4() {
  // Dados simulados de CO2 (latitude, longitude, título do marcador e nível de CO2)
  const co2Data = [
    { latitude: -14.864, longitude: -40.839, title: 'Ponto A', description: 'Nível de CO2: 450 ppm (alto)' },   // Alto
    { latitude: -15.000, longitude: -40.900, title: 'Ponto B', description: 'Nível de CO2: 350 ppm (médio)' },  // Médio
    { latitude: -14.700, longitude: -40.750, title: 'Ponto C', description: 'Nível de CO2: 250 ppm (baixo)' },   // Baixo
    { latitude: -14.950, longitude: -40.800, title: 'Ponto D', description: 'Nível de CO2: 500 ppm (perigoso)' }, // Perigoso
    { latitude: -14.800, longitude: -40.950, title: 'Ponto E', description: 'Nível de CO2: 300 ppm (médio)' },   // Médio
    { latitude: -14.900, longitude: -40.870, title: 'Ponto F', description: 'Nível de CO2: 600 ppm (muito alto)' },  // Muito alto
    { latitude: -14.750, longitude: -40.780, title: 'Ponto G', description: 'Nível de CO2: 100 ppm (muito baixo)' },  // Muito baixo
    { latitude: -14.850, longitude: -40.720, title: 'Ponto H', description: 'Nível de CO2: 400 ppm (alto)' },   // Alto
  ];

  return (
    <View style={styles.container}>
      <NotificationBar />
      <MapView
        provider={PROVIDER_GOOGLE} // Forçando o uso do Google Maps
        style={styles.map}
        initialRegion={{
          latitude: -14.864,
          longitude: -40.839,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Adicionando marcadores com base nos dados de CO2 */}
        {co2Data.map((data, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: data.latitude, longitude: data.longitude }}
            title={data.title}
            description={data.description}
          />
        ))}
      </MapView>
      <MenuOptions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Faz o mapa ocupar toda a tela
  },
});
