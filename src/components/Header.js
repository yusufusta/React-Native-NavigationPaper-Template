import React from 'react';
import { Appbar } from 'react-native-paper';

export const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
        />
      ) : (
        <Appbar.Action 
          icon="menu"
          onPress={() => navigation.openDrawer()}
          animated={true}
        />
      )}
      <Appbar.Content
        title={title}
      />
    </Appbar.Header>
  );
};