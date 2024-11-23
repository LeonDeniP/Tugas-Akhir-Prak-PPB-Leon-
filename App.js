import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HalamanDoa from './pages/HalamanDoa';
import HalamanRosario from './pages/HalamanRosario';
import HalamanProfile from './pages/HalamanProfile';
import HalamanInjil from './pages/HalamanInjil';
import BookDetail from './pages/BookDetail';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const InjilStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Daftar Kitab" component={HalamanInjil} />
      <Stack.Screen name="Detail Kitab" component={BookDetail} />
    </Stack.Navigator>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;
          if (route.name === 'Doa Rosario') {
            iconSource = require('./Gambar/rosary.png');
          } else if (route.name === 'Doa Katolik') {
            iconSource = require('./Gambar/folded.png');
          } else if (route.name === 'Profil') {
            iconSource = require('./Gambar/profile.png');
          } else if (route.name === 'Injil') {
            iconSource = require('./Gambar/open-book.png');
          }
          return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Doa Katolik" component={HalamanDoa} />
      <Tab.Screen name="Injil" component={InjilStack} />
      <Tab.Screen name="Doa Rosario" component={HalamanRosario} />
      <Tab.Screen name="Profil" component={HalamanProfile} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* Menggunakan hanya TabNavigator tanpa SplashScreen */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
