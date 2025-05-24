import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const Countries = ({ countries }) => {
  return (
    <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
      <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
        {!countries.length ? (
          <Text style={styles.centerMessage}>No saved countries!</Text>
        ) : (
          countries.map((item, index) => (
            <View key={index} style={styles.countryContainer}>
              <Text style={styles.countryName}>{item.name}</Text>
              <Text style={styles.countryCurrency}>{item.currency}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centerMessage: { alignSelf: 'center', fontSize: 20 },
  countryContainer: { padding: 10, borderBottomWidth: 2, borderBottomColor: '#ccc' },
  countryName: { fontSize: 20 },
  countryCurrency: { color: 'rgba(0, 0, 0, .5)' },
});

export default Countries;
