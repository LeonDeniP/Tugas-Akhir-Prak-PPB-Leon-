import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header'; 
import DoaAkuPercaya from '../Doa/DoaAkuPercaya';
import DoaBapaKami from '../Doa/DoaBapaKami';
import DoaSalamMaria from '../Doa/DoaSalamMaria';
import DoaKemuliaan from '../Doa/DoaKemuliaan';
import DateTime from '../components/DateTime'; 

export default function HalamanDoa({ navigation }) {
  return (
    <View style={styles.background}>
      <Header title="Doa Katolik" />
      <DateTime /> {/* Menambahkan komponen DateTime */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <DoaAkuPercaya />
        </View>
        <View style={styles.card}>
          <DoaBapaKami />
        </View>
        <View style={styles.card}>
          <DoaSalamMaria />
        </View>
        <View style={styles.card}>
          <DoaKemuliaan />
        </View>
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
});
