import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotificationBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notificação</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#397D4B',
    paddingTop: Platform.OS === 'ios' ? 40 : 20,  // Ajuste para iOS
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
