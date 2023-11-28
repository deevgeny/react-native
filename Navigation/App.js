import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerStyle: {
              backgroundColor: '#6a51ae'
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWight: 'bold' },
            headerRight: () => (
              <Pressable onPress={() => alert('Menu button pressed!')}>
                <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: { backgroundColor: '#e8e4f3'}
          }}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={({ route }) => ({
            title: route.params.name
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
