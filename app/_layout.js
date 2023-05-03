import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { SafeAreaView, ActivityIndicator } from 'react-native';

const Layout = () => {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
    })();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const { error, setError } = useState(null);
  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ActivityIndicator
          size={'large'}
          color={'blue'}
        />
      </SafeAreaView>
    );
  }

  return (
    <Stack
      screenOptions={{
        header: () => null,
      }}
    />
  );
};
export default Layout;
