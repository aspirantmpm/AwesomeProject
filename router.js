import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { RegisterScreen } from './Screens/auth/RegistrationScreen';
import { LoginScreen } from './Screens/auth/LoginScreen';
import { PostsScreen } from './Screens/main/PostsScreen';
import { CreatePostsScreen } from './Screens/main/CreatePostsScreen';
import { ProfileScreen } from './Screens/main/ProfileScreen';
// import { MapScreen } from './Screens/MapScreen';
// import { Home } from './Screens/main/Home';
// import { CommentsScreen } from './Screens/CommentsScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <MainTab.Navigator
      initialRouteName="PostsScreen"
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.activeScreen} backgroundColor={focused ? '#FF6C00' : '#fff'}>
              <SimpleLineIcons
                name="grid"
                size={24}
                color={focused ? '#fff' : 'rgba(33, 33, 33, 0.8)'}
              />
            </View>
          ),
          headerShown: true,
          headerTitle: 'Публікації',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 17,
            alignItems: 'center',
          },
          headerRight: () => (
            <Ionicons name="exit-outline" size={24} color="black" style={{ marginRight: 10 }}/>
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.activeScreen} backgroundColor={focused ? '#FF6C00' : '#fff'}>
              <MaterialCommunityIcons
                name="plus"
                size={24}
                color={focused ? '#fff' : 'rgba(33, 33, 33, 0.8)'}
                backgroundColor={focused ? '#FF6C00' : '#fff'}
              />
            </View>
          ),
          headerShown: true,
          headerTitle: 'Створити публікацію',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 17,
            alignItems: 'center',
          },
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color, backgroundColor }) => (
            <View style={styles.activeScreen} backgroundColor={focused ? '#FF6C00' : '#fff'}>
              <Feather
                name="user"
                size={24}
                color={focused ? '#fff' : 'rgba(33, 33, 33, 0.8)'}
                backgroundColor={focused ? '#FF6C00' : '#fff'}
              />
            </View>
          ),          
          headerTitle: 'Профіль',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 17,
            alignItems: 'center',
          },
        }}
      />
    </MainTab.Navigator>
  );
};


export const useRoute = () => {  
    return (
      <AuthStack.Navigator initialRouteName="LoginScreen">
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
        <AuthStack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </AuthStack.Navigator>
    );
  }

const styles = StyleSheet.create({
  activeScreen: {
    width: 70,
    height: 40,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
