import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { RegisterScreen } from './Screens/auth/RegistrationScreen';
import { LoginScreen } from './Screens/auth/LoginScreen';
// import { Home } from './Screens/main/Home';
import { PostsScreen } from './Screens/main/PostsScreen';
import { CreatePostsScreen } from './Screens/main/CreatePostsScreen';
// import { CommentsScreen } from './Screens/CommentsScreen';
import { ProfileScreen } from './Screens/main/ProfileScreen';
// import { MapScreen } from './Screens/MapScreen';


const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Home">
        <AuthStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ showLabel: false }}
    >
      <MainTab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <SimpleLineIcons name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}
      />
      <MainTab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="plus" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}
      />
      <MainTab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}        
      />
    </MainTab.Navigator>
  );
};