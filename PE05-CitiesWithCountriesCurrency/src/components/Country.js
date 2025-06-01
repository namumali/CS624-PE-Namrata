// src/components/Country.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const Country = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{country.name}</Text>
      <Text style={styles.label}>Currency:</Text>
      <Text style={styles.currency}>{country.currency}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  currency: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});

export default Country;
