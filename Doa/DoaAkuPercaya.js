import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const doaAkuPercaya = [
  "Aku percaya akan Allah, Bapa yang mahakuasa, Pencipta langit dan bumi;",
  "dan akan Yesus Kristus, Putra-Nya yang tunggal, Tuhan kita,",
  "yang dikandung dari Roh Kudus, dilahirkan oleh Perawan Maria;",
  "yang menderita sengsara dalam pemerintahan Pontius Pilatus, disalibkan, wafat, dan dimakamkan;",
  "yang turun ke tempat penantian, pada hari ketiga bangkit dari antara orang mati;",
  "yang naik ke surga, duduk di sebelah kanan Allah Bapa yang mahakuasa;",
  "dari situ Ia akan datang mengadili orang yang hidup dan yang mati.",
  "Aku percaya akan Roh Kudus, Gereja Katolik yang kudus, persekutuan para kudus,",
  "pengampunan dosa, kebangkitan badan, kehidupan kekal. Amin."
];

export default function DoaAkuPercaya() {
  return (
    <View style={styles.doaContainer}>
      <Text style={styles.doaTitle}>Doa Aku Percaya</Text>
      {doaAkuPercaya.map((line, index) => (
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
