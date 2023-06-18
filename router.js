import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

export const useRoute = isAuth => {
  const [isFocused, setIsFocused] = useState(false);

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
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <MainTab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              backgroundColor={focused ? '#FF6C00' : '#fff'}
            >
              <SimpleLineIcons
                name="grid"
                size={24}
                color={focused ? '#fff' : 'rgba(33, 33, 33, 0.8)'}
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              backgroundColor={focused ? '#FF6C00' : '#fff'}
            >
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color={focused ? '#fff' : 'rgba(33, 33, 33, 0.8)'}
                backgroundColor={focused ? '#FF6C00' : '#fff'}
              />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color, backgroundColor }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              backgroundColor={focused ? '#FF6C00' : '#fff'}
            >
              <Feather
                name="user"
                size={24}
                color={focused ? '#fff' : 'rgba(33, 33, 33, 0.8)'}
                backgroundColor={focused ? '#FF6C00' : '#fff'}
              />
            </View>
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeScreen: {
    width: 70,
    height: 40,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disActiveScreen: {
    width: 40,
    height: 40,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
