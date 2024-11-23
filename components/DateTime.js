import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DateTime() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      const formattedTime = now.toLocaleTimeString('id-ID');
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);


    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.dateTimeContainer}>
      <Text style={styles.dateText}>{currentDate}</Text>
      <Text style={styles.timeText}>{currentTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dateTimeContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  timeText: {
    fontSize: 16,
    color: 'gray',
  },
});
