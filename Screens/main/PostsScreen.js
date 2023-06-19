import React from 'react';
import { moduleName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultScreen } from '../nested/DefaultScreen';
import { CommentsScreen } from '../nested/CommentsScreen';
import { MapScreen } from '../nested/MapScreen';

const NestedScreen = createStackNavigator();

export const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen name="DefaultScreen" component={DefaultScreen} />
      <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
      <NestedScreen.Screen name="MapScreen" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};
