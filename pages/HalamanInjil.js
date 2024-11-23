import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const HalamanInjil = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://api-alkitab.vercel.app/api/book');
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data.data);
      } catch (error) {
        console.error(error);
        alert("Error fetching books");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handlePress = (name, chapter) => {
    navigation.navigate('Detail Kitab', {
      passage: name,
      chapter: chapter,
    });
  };

  const handleBookPress = (book) => {
    setSelectedBook(book);
  };

  const renderChapterButtons = () => {
    if (!selectedBook || !selectedBook.chapter) return null;
    const chapters = Array.from({ length: selectedBook.chapter }, (_, index) => index + 1);
    return chapters.map((chapter) => (
      <TouchableOpacity
        key={chapter}
        style={styles.chapterButton}
        onPress={() => handlePress(selectedBook.name, chapter)}
      >
        <Text style={styles.chapterButtonText}>Bab {chapter}</Text>
      </TouchableOpacity>
    ));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text>Loading books...</Text>
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <Header title="Kitab Injil" />
      <ScrollView contentContainerStyle={styles.container}>
        {!selectedBook ? (
          <View>
            <Text style={styles.title}>Pilih Kitab</Text>
            <View style={styles.bookList}>
              {books.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleBookPress(item)}
                  style={styles.card}
                >
                  <Text style={styles.bookText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.selectedBookContainer}>
            <Text style={styles.selectedBookTitle}>Memilih Kitab: {selectedBook.name}</Text>
            {renderChapterButtons()}
          </View>
        )}
      </ScrollView>
      {selectedBook && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedBook(null)}>
            <Text style={styles.backButtonText}>Kembali</Text>
          </TouchableOpacity>
        </View>
      )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginVertical: 20,
  },
  bookList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '40%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  bookText: {
    fontSize: 18,
    color: '#2c3e50',
    textAlign: 'center',
  },
  selectedBookContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  selectedBookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 20,
  },
  chapterButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: '90%',
  },
  chapterButtonText: {
    color: '#2c3e50',
    fontSize: 16,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderTopWidth: 1,
    borderTopColor: '#d1d1d1',
  },
  backButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  backButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HalamanInjil;
