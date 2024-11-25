import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuOptions() {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="md-arrow-dropdown" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="sunny" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="logo-whatsapp" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="information-circle" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  icon: {
    padding: 10,
    backgroundColor: '#5EC362',
    borderRadius: 50,
  },
});
