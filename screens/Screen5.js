import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WeatherInfoCard from '../components/WeatherInfoCard';

export default function Screen5() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Dados fictícios de clima para os dias 25 a 30
    setWeatherData([
      { day: '25', temp: 25, condition: 'sunny', humidity: 60 },
      { day: '26', temp: 22, condition: 'cloudy', humidity: 75 },
      { day: '27', temp: 28, condition: 'partly cloudy', humidity: 65 },
      { day: '28', temp: 30, condition: 'sunny', humidity: 55 },
      { day: '29', temp: 24, condition: 'rainy', humidity: 90 },
      { day: '30', temp: 26, condition: 'stormy', humidity: 85 },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      {/* Passando os dados para o componente WeatherInfoCard */}
      <WeatherInfoCard weather={weatherData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#397D4B',
    padding: 20,
  },
});
