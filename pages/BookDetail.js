import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header'; // Pastikan path sesuai

const BookDetail = ({ route }) => {
  const { passage, chapter } = route.params;
  const [bibleData, setBibleData] = useState(null);

  useEffect(() => {
    const fetchBibleData = async () => {
      const response = await fetch(
        `https://api-alkitab.vercel.app/api/passage?passage=${passage}&num=${chapter}`
      );
      const data = await response.json();
      setBibleData(data.bible);
    };
    fetchBibleData();
  }, [passage, chapter]);

  if (!bibleData) {
    return <Text style={styles.loadingText}>Memuat Kitab</Text>;
  }

  return (
    <View style={styles.background}>
      <Header title="Bacaan Kitab" /> {/* Menambahkan Header */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{bibleData.title}</Text>
          <Text style={styles.bookTitle}>{bibleData.book.name}</Text>

          {bibleData.book.chapter.verses.map((verse) => (
            <View key={verse.number} style={styles.verseContainer}>
              <Text style={styles.verseNumber}>{verse.number}</Text>
              {verse.title && <Text style={styles.verseTitle}>{verse.title}</Text>}
              <Text style={styles.verseText}>{verse.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e0f7fa', // Warna latar belakang yang sama dengan HalamanDoa.js
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  verseContainer: {
    marginBottom: 15,
  },
  verseNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  verseTitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
  },
  verseText: {
    fontSize: 16,
    color: '#333',
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
});

export default BookDetail;
