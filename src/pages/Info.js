import React from 'react';
import { View, Text } from 'react-native';

export default function Info({ route, navigation }) {
    var name  = route.params.name;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello, my name is {name}.</Text>
      </View>
    );
}