import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const doaSalamMaria = [
  "Salam Maria, penuh rahmat, Tuhan sertamu,",
  "terpujilah engkau di antara wanita,",
  "dan terpujilah buah tubuhmu, Yesus.",
  "Santa Maria, bunda Allah,",
  "doakanlah kami yang berdosa ini sekarang dan waktu kami mati. Amin."
];

export default function DoaSalamMaria() {
  return (
    <View style={styles.doaContainer}>
      <Text style={styles.doaTitle}>Doa Salam Maria</Text>
      {doaSalamMaria.map((line, index) => (
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
