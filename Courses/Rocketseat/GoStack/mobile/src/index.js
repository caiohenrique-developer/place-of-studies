import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="red" />
      <View style={styles.container}>
        <Text style={styles.title}>Acaba não Mundão!</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
});