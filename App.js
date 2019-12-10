import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteTaker from './app/index'

export default function App() {
  return (
    <View style={styles.container}>
      <NoteTaker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
