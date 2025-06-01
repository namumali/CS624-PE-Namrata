// src/components/Countries.js

import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../theme';

const Countries = ({ navigation, countries }) => {
  return (
    <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
      <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
        {!countries.length ? (
          <Text style={styles.centerMessage}>No saved countries!</Text>
        ) : (
          countries.map((item, index) => (
            <TouchableOpacity
              key={item.id || index}
              onPress={() =>
                navigation.navigate('Country', {
                  country: item,
                })
              }>
              <View style={styles.countryContainer}>
                <Text style={styles.countryName}>{item.name}</Text>
                <Text style={styles.countryCurrency}>{item.currency}</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centerMessage: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  countryContainer: {
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  countryName: {
    fontSize: 20,
    fontWeight: '500',
  },
  countryCurrency: {
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 4,
  },
});

export default Countries;
