import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import Header from '../components/Header'; 

const peristiwaRosario = [
  {
    hari: 'Senin dan Sabtu',
    nama: 'Peristiwa Gembira',
    peristiwa: [
      'Maria menerima kabar gembira dari malaikat Gabriel',
      'Maria mengunjungi Elisabet',
      'Yesus lahir di Betlehem',
      'Yesus diserahkan di Bait Allah',
      'Yesus diketemukan di dalam Bait Allah',
    ],
  },
  {
    hari: 'Selasa dan Jumat',
    nama: 'Peristiwa Sedih',
    peristiwa: [
      'Yesus berdoa di Taman Getsemani',
      'Yesus didera dan disesah',
      'Yesus dimahkotai duri',
      'Yesus memanggul salib-Nya ke Golgota',
      'Yesus wafat di kayu salib',
    ],
  },
  {
    hari: 'Rabu dan Minggu',
    nama: 'Peristiwa Mulia',
    peristiwa: [
      'Yesus bangkit dari antara orang mati',
      'Yesus naik ke surga',
      'Roh Kudus turun atas para rasul',
      'Maria diangkat ke surga',
      'Maria dimahkotai di surga',
    ],
  },
  {
    hari: 'Kamis',
    nama: 'Peristiwa Terang',
    peristiwa: [
      'Yesus dibaptis di Sungai Yordan',
      'Yesus menyatakan diri dalam pernikahan di Kana',
      'Yesus mewartakan Kerajaan Allah dan menyerukan pertobatan',
      'Yesus dimuliakan di atas gunung',
      'Yesus menetapkan Ekaristi',
    ],
  },
];

export default function HalamanRosario() {
  return (
    <View style={styles.background}>
      <Header title="Doa Rosario" /> {/* Menambahkan Header */}
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../Gambar/Rosario.jpg')} style={styles.rosarioImage} />
        {peristiwaRosario.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.hari}>{item.hari}</Text>
            <Text style={styles.namaPeristiwa}>{item.nama}</Text>
            {item.peristiwa.map((peristiwa, idx) => (
              <Text key={idx} style={styles.peristiwaText}>
                • {peristiwa}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  container: {
    padding: 10,
    alignItems: 'center',
  },
  rosarioImage: {
    width: '90%',
    height: 500,
    resizeMode: 'contain',
    marginVertical: 20,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  hari: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  namaPeristiwa: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 10,
  },
  peristiwaText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
