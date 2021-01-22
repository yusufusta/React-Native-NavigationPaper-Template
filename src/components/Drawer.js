import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './Stack';

const Drawer = createDrawerNavigator();

export default function  DrawerNavigator () {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={StackNavigator} />
        </Drawer.Navigator>
    );
};
