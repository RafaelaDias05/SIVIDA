import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WeatherInfoCard({ weather }) {
  return (
    <View style={styles.container}>
      {weather.map((day, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.day}>{`Dia ${day.day}`}</Text>
          <View style={styles.weatherContainer}>
            {/* Definindo ícones com base na condição climática */}
            <Ionicons
              name={
                day.condition === 'sunny'
                  ? 'sunny'
                  : day.condition === 'cloudy'
                  ? 'cloudy'
                  : day.condition === 'rainy'
                  ? 'rainy'
                  : day.condition === 'stormy'
                  ? 'thunderstorm'
                  : 'partly-sunny'
              }
              size={30}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.temp}>{`${day.temp}°C`}</Text>
          </View>
          <Text style={styles.humidity}>{`Umidade: ${day.humidity}%`}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#5EC362',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  day: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  temp: {
    fontSize: 24,
    color: 'white',
  },
  humidity: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
});
