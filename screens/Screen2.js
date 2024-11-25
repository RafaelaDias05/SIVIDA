import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>SIVIDA</Text>
      </View>
      <TextInput 
        style={styles.input} 
        placeholder="Insira seu endereço"
        placeholderTextColor="#aaa"
      />
      <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#397D4B',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginTop: 10,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingLeft: 20,
    fontSize: 18,
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: [{ translateY: -12 }],
  },
});
