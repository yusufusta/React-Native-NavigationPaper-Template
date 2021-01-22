import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Home({ navigation }) {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
        <View style={styles.element}>
          <TextInput
            label="Name"
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
            style={{ width: 200 }}
          />
        </View>
        <View style={styles.element}>
          <Button
            mode="contained"
            title="SEND"
            onPress={ () => {
              navigation.navigate('Info', {
                name: text,
              })    
            }}
          />
        </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1, 
  },
  element: {
    margin: 5,
    padding: 10,
    height: 50,
  },
});
