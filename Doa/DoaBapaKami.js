import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const doaBapaKami = [
  "Bapa kami yang ada di surga, Dimuliakanlah nama-Mu.",
  "Datanglah kerajaan-Mu.",
  "Jadilah kehendak-Mu di atas bumi seperti di dalam surga.",
  "Berilah kami rezeki pada hari ini,",
  "dan ampunilah kesalahan kami, seperti kami pun mengampuni yang bersalah kepada kami.",
  "Dan janganlah masukkan kami ke dalam pencobaan,",
  "tetapi bebaskanlah kami dari yang jahat. Amin."
];

export default function DoaBapaKami() {
  return (
    <View style={styles.doaContainer}>
      <Text style={styles.doaTitle}>Doa Bapa Kami</Text>
      {doaBapaKami.map((line, index) => (
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
