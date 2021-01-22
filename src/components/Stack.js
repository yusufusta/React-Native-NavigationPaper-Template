import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from './Header';
import Home from '../pages/Home';
import Info from '../pages/Info';

const Stack = createStackNavigator();

export default function StackNavigator () {
    return (
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          header: ({ scene, previous, navigation }) => (
            <Header scene={scene} previous={previous} navigation={navigation} />
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: 'Home Page' }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{ headerTitle: 'Information' }}
        />
      </Stack.Navigator>
    );
  };