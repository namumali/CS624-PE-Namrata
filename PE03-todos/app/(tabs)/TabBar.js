// TabBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ type, setType }) => {
  return (
    <View style={styles.container}>
      {['All', 'Active', 'Completed'].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, type === tab && styles.activeTab]}
          onPress={() => setType(tab)}
        >
          <Text style={[styles.tabText, type === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  activeTab: {
    backgroundColor: '#bbb',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  activeTabText: {
    fontWeight: 'bold',
  },
});

export default TabBar;
