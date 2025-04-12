import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: Namrata Vijay Mali</Text>
      <Text style={styles.text}>Program: MS in Computer Science</Text>
      <Text style={styles.text}>School: City University of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
