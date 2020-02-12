import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning developer React-Native!</Text>
      <Text style={styles.myName}>Caiozinho (;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
  },

  myName: {
    fontSize: 30,
    color: 'gold',
    fontWeight: 'bold',
  },
});
