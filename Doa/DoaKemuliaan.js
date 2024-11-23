import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const doaKemuliaan = [
  "Kemuliaan kepada Bapa, dan Putra, dan Roh Kudus,",
  "seperti pada permulaan, sekarang, selalu,",
  "dan sepanjang segala abad. Amin."
];

export default function DoaKemuliaan() {
  return (
    <View style={styles.doaContainer}>
      <Text style={styles.doaTitle}>Doa Kemuliaan</Text>
      {doaKemuliaan.map((line, index) => (
        <Text key={index} style={styles.doaContent}>{line}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  doaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
    textAlign: 'center',
  },
  doaContent: {
    fontSize: 14,
    color: '#333',
    lineHeight: 24,
    textAlign: 'left',
  },
});
