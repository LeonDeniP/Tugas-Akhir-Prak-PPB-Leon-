// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 75,
    backgroundColor: '#00796b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  headerText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
