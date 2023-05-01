import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        // tabBarShowLabel: false,

        tabBarActiveTintColor: COLORS.tertiary,
      }}
    >
      <Tabs.Screen
        name="currentWeather"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="home"
              size={24}
              color={color}
            />
          ),
          title: 'home',
        }}
      />

      <Tabs.Screen
        name="upComingWeather"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weather-cloudy-clock"
              size={24}
              color={color}
            />
          ),
          title: 'weather',
        }}
      />

      <Tabs.Screen
        name="city"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="city-variant-outline"
              size={24}
              color={color}
            />
          ),
          title: 'city',
        }}
      />
    </Tabs>
  );
};
export default Layout;
