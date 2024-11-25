import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Screen1() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>SIVIDA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397D4B',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginTop: 20,
  },
});
