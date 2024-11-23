import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Linking } from 'react-native';
import Header from '../components/Header';

const HalamanProfile = () => {
  const openGitHubProfile = () => {
    Linking.openURL('https://github.com/LeonDeniP'); 
  };

  return (
    <View style={styles.background}>
      <Header title="Profil" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../Gambar/foto.png')} 
            style={styles.profileImage}
          />
          <Text style={styles.name}>Leonardus Deni Prabowo</Text>
          <Text style={styles.nim}>(211201221200120)</Text> {/* Replace with your NIM */}

          {/* Enhanced Profile GitHub text */}
          <Text style={styles.github} onPress={openGitHubProfile}>
            Profile GitHub
          </Text>

          <Text style={styles.bio}>
            Aplikasi ini bertujuan untuk meningkatkan kemudahan bagi umat Katolik dengan menyediakan doa-doa dasar dan juga bacaan Injil yang terangkum dalam satu aplikasi.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

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
    alignItems: 'center', 
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#2c3e50',
  },
  nim: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  github: {
    fontSize: 18,
    color: '#4A90E2',
    textDecorationLine: 'underline',
    marginBottom: 16,
    fontWeight: 'bold', 
    paddingVertical: 8,
    paddingHorizontal: 20, 
    borderRadius: 5, 
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default HalamanProfile;
